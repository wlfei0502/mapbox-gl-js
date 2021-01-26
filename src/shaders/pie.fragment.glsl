// 纹理单元
uniform sampler2D u_texture;

varying vec3 v_data;

#pragma mapbox: define mediump float part_1
#pragma mapbox: define mediump float part_2
#pragma mapbox: define mediump float part_3
#pragma mapbox: define mediump float part_4
#pragma mapbox: define mediump float part_5
#pragma mapbox: define mediump float part_6
#pragma mapbox: define mediump float part_7
#pragma mapbox: define mediump float part_8
#pragma mapbox: define mediump float part_9

void main() {
    #pragma mapbox: initialize mediump float part_1
    #pragma mapbox: initialize mediump float part_2
    #pragma mapbox: initialize mediump float part_3
    #pragma mapbox: initialize mediump float part_4
    #pragma mapbox: initialize mediump float part_5
    #pragma mapbox: initialize mediump float part_6
    #pragma mapbox: initialize mediump float part_7
    #pragma mapbox: initialize mediump float part_8
    #pragma mapbox: initialize mediump float part_9

    // 圆心到片元的向量
    vec2 extrude = v_data.xy;
    // 圆心到片元的向量长度
    float extrude_length = length(extrude);

    // 圆心到正上方的向量
    vec3 center_to_top = vec3(0, -1.0, 0.0);
    // 圆心到正上方的向量长度
    float top_middle_len = length(center_to_top);

    // 根据两个向量叉乘结果判断位置，左右
    vec3 v3_cross = cross(vec3(v_data.xy, 0.0), center_to_top);

    // 圆心到正上方的向量与圆心到片元的向量的内积，计算二者夹角
    float cos_rad = dot(vec4(v_data.xy, 0.0, 0.0), vec4(center_to_top.xyz, 0.0)) / extrude_length / top_middle_len;
    float deg = degrees(acos(cos_rad));

    if(v3_cross[2] < 0.0){
        deg = 360.0 - deg; 
    }

    float total = 0.0, parts[9];

    if(part_1 > -1.0) {
        total += part_1;
        parts[0] = part_1;
    }

    if(part_2 > -1.0) {
        total += part_2;
        parts[1] = part_2;
    }

    if(part_3 > -1.0) {
        total += part_3;
        parts[2] = part_3;
    }

    if(part_4 > -1.0) {
        total += part_4;
        parts[3] = part_4;
    }

    if(part_5 > -1.0) {
        total += part_5;
        parts[4] = part_5;
    }

    if(part_6 > -1.0) {
        total += part_6;
        parts[5] = part_6;
    }

    if(part_7 > -1.0) {
        total += part_7;
        parts[6] = part_7;
    }

    if(part_8 > -1.0) {
        total += part_8;
        parts[7] = part_8;
    }

    if(part_9 > -1.0) {
        total += part_9;
        parts[8] = part_9;
    }

    if(total == 0.0) {
        discard;
    }

    lowp float antialiasblur = v_data.z;
    float antialiased_blur = -antialiasblur;
    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);

    float current_deg = 0.0;

    for(int i = 0; i < 8; i++){
        if(parts[i] > 0.0) {
            float percent = parts[i] / total;
            current_deg += percent;
            float deg_segement = current_deg * 360.0;
            if(deg <= deg_segement){
                gl_FragColor = texture2D(u_texture, vec2( 0.125 / 2.0 + float(i) * 0.125, 0.5)) * opacity_t * 1.0;
                break;
            }
        }
    }

#ifdef OVERDRAW_INSPECTOR
    gl_FragColor = vec4(1.0);
#endif
}
