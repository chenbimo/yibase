export const utilGetAssets = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
};

export const utilSessGetItem = (key) => {
    return sessionStorage.getItem(key);
};

export const utilSessSetItem = (key, value) => {
    return sessionStorage.setItem(key, value);
};

export const utilLocalGetItem = (key) => {
    return localStorage.getItem(key);
};

export const utilLocalSetItem = (key, value) => {
    return localStorage.setItem(key, value);
};
