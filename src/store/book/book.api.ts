import AxiosInstanceCreator from 'services/api';

const bookInstance = new AxiosInstanceCreator({}).create();

export const bookAPI = {
  getDefaultBookList: (query: string, page: number) =>
    bookInstance
      .get('/v1/search/book.json', { params: { query, start: page } })
      .then(res => res.data),
  getDetailBookList: (detailCondition: { [key: string]: string }, page: number) =>
    bookInstance
      .get('/v1/search/book_adv.json', { params: { ...detailCondition, start: page } })
      .then(res => res.data)
};
