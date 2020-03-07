

export const localStorageSet = (key, state) => {
    let jSONstate =  JSON.stringify(state);
    localStorage.setItem(key, jSONstate);
}

export const localStorageDel = (state) => {
    localStorage.removeItem();
}

export const localStorageGet = (key) => {
    return JSON.parse(localStorage.getItem(key));
}