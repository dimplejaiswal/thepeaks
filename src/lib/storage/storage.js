const get = (key) => {
    // eslint-disable-next-line no-console
    console.log(key, localStorage);
    localStorage.getItem(key);
};

const set = (key, val) => localStorage.setItem(key, val);

const storage = { get, set };

export default storage;
