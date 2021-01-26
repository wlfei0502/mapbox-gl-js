uniform mat4 u_matrix;
uniform bool u_scale_with_map;
uniform bool u_pitch_with_map;
uniform vec2 u_extrude_scale;
uniform lowp float u_device_pixel_ratio;
uniform highp float u_camera_to_center_distance;

attribute vec2 a_pos;

varying vec3 v_data;

#pragma mapbox: define mediump float radius
#pragma mapbox: define mediump float part_1
#pragma mapbox: define mediump float part_2
#pragma mapbox: define mediump float part_3
#pragma mapbox: define mediump float part_4
#pragma mapbox: define mediump float part_5
#pragma mapbox: define mediump float part_6
#pragma mapbox: define mediump float part_7
#pragma mapbox: define mediump float part_8
#pragma mapbox: define mediump float part_9

void main(void) {
    #pragma mapbox: initialize mediump float radius
    #pragma mapbox: initialize mediump float part_1
    #pragma mapbox: initialize mediump float part_2
    #pragma mapbox: initialize mediump float part_3
    #pragma mapbox: initialize mediump float part_4
    #pragma mapbox: initialize mediump float part_5
    #pragma mapbox: initialize mediump float part_6
    #pragma mapbox: initialize mediump float part_7
    #pragma mapbox: initialize mediump float part_8
    #pragma mapbox: initialize mediump float part_9

    // unencode the extrusion vector that we snuck into the a_pos vector
    vec2 extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);

    // multiply a_pos by 0.5, since we had it * 2 in order to sneak
    // in extrusion data
    vec2 circle_center = floor(a_pos * 0.5);
    if (u_pitch_with_map) {
        vec2 corner_position = circle_center;
        if (u_scale_with_map) {
            corner_position += extrude * radius * u_extrude_scale;
        } else {
            // Pitching the circle with the map effectively scales it with the map
            // To counteract the effect for pitch-scale: viewport, we rescale the
            // whole circle based on the pitch scaling effect at its central point
            vec4 projected_center = u_matrix * vec4(circle_center, 0, 1);
            corner_position += extrude * radius * u_extrude_scale * (projected_center.w / u_camera_to_center_distance);
        }

        gl_Position = u_matrix * vec4(corner_position, 0, 1);
    } else {
        gl_Position = u_matrix * vec4(circle_center, 0, 1);

        if (u_scale_with_map) {
            gl_Position.xy += extrude * radius * u_extrude_scale * u_camera_to_center_distance;
        } else {
            gl_Position.xy += extrude * radius * u_extrude_scale * gl_Position.w;
        }
    }

    // This is a minimum blur distance that serves as a faux-antialiasing for
    // the circle. since blur is a ratio of the circle's size and the intent is
    // to keep the blur at roughly 1px, the two are inversely related.
    lowp float antialiasblur = 1.0 / u_device_pixel_ratio / radius;

    v_data = vec3(extrude.x, extrude.y, antialiasblur);
}
