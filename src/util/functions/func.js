export function isUndefined (value) {
    return typeof value == 'undefined' || value === null;
}

export function isArray (value) {
    return Array.isArray(value);
}


export function isString (value) {
    return typeof value == 'string'
}
