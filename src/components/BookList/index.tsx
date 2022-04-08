import { Pagination } from 'antd';
import { BookListContainer } from './style';

import { BookListEmpty, BookListItem } from 'components';

import { observer } from 'mobx-react';
import useStore from 'store';

export const BookList = observer(() => {
  const book = useStore.BookStore;

  const { bookList, page, getPaginationBookList } = book;
  const { items, total } = bookList;

  return (
    <>
      <BookListContainer>
        <div className='book-count-wrap'>
          도서 검색 결과 총<span className='book-count'> {total} </span>건
        </div>

        <div>
          {items.map((item, idx) => (
            <BookListItem key={idx} data={item} />
          ))}
          {total > 0 ? (
            <Pagination
              total={total}
              pageSize={10}
              current={page}
              showSizeChanger={false}
              onChange={e => getPaginationBookList(e)}
            />
          ) : (
            <BookListEmpty />
          )}
        </div>
      </BookListContainer>
    </>
  );
});
