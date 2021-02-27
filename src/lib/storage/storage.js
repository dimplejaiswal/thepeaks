const get = (key) => localStorage.getItem(key);

const set = (key, val) => localStorage.setItem(key, val);

const storage = { get, set };

export default storage;
