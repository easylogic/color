export function round (n, k) {
    k = typeof k == 'undefined' ? 1 : k; 
    return Math.round(n * k) / k;
}


export function degreeToRadian (angle) {
    return angle * Math.PI / 180;
}

/**
 * 
 * convert radian to degree 
 * 
 * @param {*} radian 
 * @returns {Number} 0..360
 */
export function radianToDegree(radian) {
    var angle =  radian * 180 / Math.PI;


    if (angle < 0) {   // 각도가 0보다 작으면 360 에서 반전시킨다. 
        angle = 360 + angle
    }

    return angle; 
}
export default {
    round,
    radianToDegree,
    degreeToRadian,
}