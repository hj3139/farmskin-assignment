import { observable, action, makeObservable } from 'mobx';
import { ResponseBookList } from 'types';
import { bookAPI } from './book.api';

class BookStore {
  @observable bookList: ResponseBookList = {
    display: 0,
    start: 0,
    items: [],
    lastBuildDate: '',
    total: 0
  };
  @observable detailSearchCondition: { [key: string]: string } = {};
  @observable searchQuery = '';
  @observable page = 1;
  @observable isPop = false;
  @observable isDetailSearch = false;

  constructor() {
    makeObservable(this);
  }

  @action getDefaultBookList = async () => {
    if (this.isPop) {
      this.handleIsPop();
    }

    if (!this.searchQuery && this.searchQuery === '') {
      return;
    }
    this.bookList = await bookAPI.getDefaultBookList(this.searchQuery, this.page);
    this.isDetailSearch = false;
  };

  @action getDetailBookList = async (detailSeachCondiiton: { [key: string]: string }) => {
    this.detailSearchCondition = detailSeachCondiiton;
    this.isDetailSearch = true;
    this.searchQuery = '';
    this.bookList = await bookAPI.getDetailBookList(detailSeachCondiiton, this.page);
  };

  @action getPaginationBookList = async (page: number) => {
    this.page = page;

    if (this.isDetailSearch) {
      this.getDetailBookList(this.detailSearchCondition);
    } else {
      this.getDefaultBookList();
    }

    window.scrollTo(0, 0);
  };

  @action changeQuery = (query: string) => {
    this.searchQuery = query;
  };

  @action handleIsPop = () => {
    this.isPop = !this.isPop;
  };
}
const store = new BookStore();

export default store;
