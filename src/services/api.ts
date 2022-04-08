// base
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class AxiosInstanceCreator {
  #instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.#instance = axios.create({
      ...config,
      headers: {
        'X-Naver-Client-Id': 'spT7e4fr9Fv0p2YvkrOX',
        'X-Naver-Client-Secret': 'TlD7RpKb9p'
      }
    });

    this.interceptors();
  }

  interceptors() {
    this.#instance.interceptors.response.use(res => {
      if (res.data.code) {
        throw new Error(res.data.message).message;
      }

      return res;
    });
  }

  create() {
    return this.#instance;
  }
}

export default AxiosInstanceCreator;
