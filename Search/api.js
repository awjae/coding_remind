export const API_END_POINT = 'API END POINT';

const cache = {};

const requst = async (url) => {
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

// export const fetchedLanguage = async (keyword) => requst(`${API_END_POINT}/languages?keyword=${keyword}`);
export const fetchedLanguage = async (keyword) => requst(`https://imsea.herokuapp.com/api/1?q=${keyword}`);