import { ApiPath } from "../const";

export const getMainListAction = async () => {
    const response = await fetch(ApiPath.news, {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
    }
    return await response.json();
};

export const getAuthTokenAction = async (username, password) => {
    const response = await fetch(ApiPath.auth, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
        throw new Error(`Не удалось авторизоваться: ${response.statusText}`);
    }
    const data = await response.json();
    return data.token;
};
