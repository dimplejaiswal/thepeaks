const get = (key) => localStorage.getItem(key);

const set = (key, val) => localStorage.setItem(key, val);

export { get, set };
