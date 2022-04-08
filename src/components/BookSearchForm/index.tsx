import { ChangeEvent, FormEvent } from 'react';

import { BookSearchInputContainer, DetailSearchPopupContainer, SearchFormContainer } from './style';

import { BookDetailSearchFrom } from 'components';

import useStore from 'store';
import { observer } from 'mobx-react';

export const SearchForm = observer(() => {
  const book = useStore.BookStore;

  const { searchQuery, isPop, getDefaultBookList, changeQuery, handleIsPop } = book;

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    changeQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getDefaultBookList();
    if (isPop) {
      handleIsPop();
    }
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <p>도서 검색</p>
      <BookSearchInputContainer>
        <input
          placeholder='검색어 입력'
          value={searchQuery}
          name='query'
          onChange={handleChangeQuery}
        />
        <button type='button' onClick={handleIsPop}>
          상세검색
        </button>
      </BookSearchInputContainer>
      {isPop && (
        <DetailSearchPopupContainer>
          <div className='popup-close' onClick={handleIsPop} />
          <BookDetailSearchFrom onSubmit={handleSubmit} />
        </DetailSearchPopupContainer>
      )}
    </SearchFormContainer>
  );
});
