import BookIcon from 'assets/images/icon/farmskin-book-icon.png';
import { BokListEmptyContainer } from './style';

export const BookListEmpty = () => {
  return (
    <BokListEmptyContainer>
      <div>
        <img src={BookIcon} alt='empty-book-icon' />
        <p>검색된 결과가 없습니다.</p>
      </div>
    </BokListEmptyContainer>
  );
};
