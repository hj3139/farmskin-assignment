export interface ResponseBookList {
  display: number;
  start: number;
  items: ResponseBookListItem[];
  lastBuildDate: string;
  total: number;
}

export type ResponseBookListItem = Record<
  | 'author'
  | 'description'
  | 'discount'
  | 'image'
  | 'isbn'
  | 'link'
  | 'price'
  | 'pubdate'
  | 'publisher'
  | 'title',
  string
>;

export interface Book {
  book: {
    isPopup: boolean;
  };
}
