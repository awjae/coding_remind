export const API_END_POINT = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

const cache = {};

const request = async (url) => {
    if (cache[url]) {
        return cache[url];
    }
    const res = await fetch(url);

    if (res.ok) {
        const json = await res.json();
        cache[url] = json;
        return json;
    }

    throw new Error("요청 실패");
}

export const fetchRequest = async (nodeId) => request(`${API_END_POINT}/${nodeId}`);