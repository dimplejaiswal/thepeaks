import storage from '../lib/storage/storage';
const BOOKMARK_STORAGE_KEY = 'peaksBookmark';

let bookMarkItems = [];

const getBookMarkItems = () => {
    if (bookMarkItems.length) {
        return bookMarkItems;
    }
    try {
        bookMarkItems = JSON.parse(storage.get(BOOKMARK_STORAGE_KEY)) || [];
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        bookMarkItems = [];
    }
    return bookMarkItems;
};

const setBookMarkItem = (data) => {
    const items = getBookMarkItems();
    items.push(data);
    storage.set(BOOKMARK_STORAGE_KEY, JSON.stringify(items));
};

const removeBookMarkItem = (id) => {
    const items = getBookMarkItems();
    const newItems = items.filter((item) => item.id !== id);
    bookMarkItems = newItems;
    storage.set(BOOKMARK_STORAGE_KEY, JSON.stringify(newItems));
};

const checkBookMarkItem = (id) => {
    const items = getBookMarkItems();
    return !!items.find((item) => item.id === id);
};

export { getBookMarkItems, setBookMarkItem, removeBookMarkItem, checkBookMarkItem };
