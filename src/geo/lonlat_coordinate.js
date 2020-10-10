
export function lonLatYfromLat(lat) {
    return (90 - lat) / 180;
}

export function lonLatLatFromY(y) {
    return 90 - y * 180;
}

export function lonLatScale(lat) {
    return 1 / Math.pow(Math.cos(lat * Math.PI / 180), 2);
}