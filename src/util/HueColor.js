import Color from './Color';
import {isUndefined} from "./functions/func";

const hue_color = [
    { rgb : '#ff0000', start : .0, ...Color.parse("#ff0000") },
    { rgb : '#ffff00', start : .17, ...Color.parse("#ffff00") },
    { rgb : '#00ff00', start : .33, ...Color.parse("#00ff00") },
    { rgb : '#00ffff', start : .50, ...Color.parse("#00ffff") },
    { rgb : '#0000ff', start : .67, ...Color.parse("#0000ff") },
    { rgb : '#ff00ff', start : .83, ...Color.parse("#ff00ff") },
    { rgb : '#ff0000', start : 1, ...Color.parse("#ff0000") },
];

function checkHueColor(p) {
    var startColor, endColor;

    for(var i = 0; i < hue_color.length;i++) {
        if (hue_color[i].start >= p) {
            startColor = hue_color[i-1];
            endColor = hue_color[i];
            break;
        }
    }

    if (startColor && endColor) {
        return Color.mix(startColor.rgb, endColor.rgb, (p - startColor.start)/(endColor.start - startColor.start));
    }
    return hue_color[0].rgb;
}


function getHueScale(p, minScale = 0.1, maxScale) {

    const start = isUndefined(maxScale) ? p - minScale : minScale;
    const end = isUndefined(maxScale) ? p + scale : maxScale; 

    const list = []

    // console.log(start, checkHueColor(start));

    for(var i = 0; i < hue_color.length;i++) {
        const currentHue = hue_color[i];

        if (start <= currentHue.start && currentHue.start < end) {
            list.push({ rgb: currentHue.rgb, start: currentHue.start })            
            // list.push({ rgb: checkHueColor(start), start })
        } else if (hue_color[i+1] && currentHue.start < start && start < hue_color[i+1].start){
            list.push({ rgb: checkHueColor(start), start })
        } else if (hue_color[i-1] && hue_color[i-1].start < end && end < currentHue.start){
            list.push({ rgb: checkHueColor(end), start: end })
        } else if (currentHue.start < start || currentHue.start > end){
            // noop 
        } else {
            list.push({ rgb: currentHue.rgb, start: currentHue.start })            
        }
    }

    return list;
}

export default { 
    colors : hue_color,
    checkHueColor,
    getHueScale
};