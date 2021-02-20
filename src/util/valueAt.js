let keyArray;
let resolved;
let index = 0;

const get = (obj, keys, defaultVal) => {
    resolved = obj;
    if (obj && typeof keys === 'string') {
        keyArray = keys.split('.');
        for (index = 0; index < keyArray.length; index += 1) {
            if (
                resolved &&
                typeof resolved.hasOwnProperty === 'function' &&
                // eslint-disable-next-line no-prototype-builtins
                resolved.hasOwnProperty(keyArray[index])
            ) {
                resolved = resolved[keyArray[index]];
            } else {
                resolved = defaultVal;
                break;
            }
        }
        return resolved;
    }
    return defaultVal;
};

export default get;
