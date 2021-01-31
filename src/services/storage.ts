export const setInStorage = async (key: string, value: object) => {
    try {
        const result: void = await localStorage.setItem(key, JSON.stringify(value));
        if (result !== null) return JSON.parse(String(result));
    } catch (error) {
        return error;
    }
};

export const getFromStorage = async (key: string) => {
    try {
        const result: string | null = await localStorage.getItem(key);
        if (result !== null) return JSON.parse(result);
    } catch (error) {
        return error;
    }
};

export const removeFromStorage = async (key: string) => {
    try {
        const result: void = await localStorage.removeItem(key);
        if (result !== null) return JSON.parse(String(result));
    } catch (error) {
        return error;
    }
};

export const clearStorage = async () => {
    try {
        const result: void = await localStorage.clear();
        if (result !== null) return JSON.parse(String(result));
    } catch (error) {
        return error;
    }
};
