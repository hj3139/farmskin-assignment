import { useEffect, useState } from 'react';

import DetailArrowIcon from 'assets/images/icon/farmskin-detail-arrow-icon.png';

import { ResponseBookListItem } from 'types';
import { BookListItemContainer } from './style';

interface BookListItemProps {
  data: ResponseBookListItem;
}

export const BookListItem = (props: BookListItemProps) => {
  const { data } = props;
  const [isDetail, setIsDetial] = useState(false);

  const handleDetailClick = () => {
    setIsDetial(!isDetail);
  };

  const handleSellButtonClick = () => {
    window.open(data.link);
  };

  useEffect(() => {
    setIsDetial(false);
  }, [data]);

  return (
    <>
      <BookListItemContainer detail={isDetail}>
        <img src={data.image} alt='book-image' />
        <div className='book-info'>
          <div className='book-name' dangerouslySetInnerHTML={{ __html: data.title }} />
          <div className='book-author' dangerouslySetInnerHTML={{ __html: data.author }} />
          {isDetail && (
            <>
              <div className='book-introduce-text'>책 소개</div>
              <div
                className='book-description'
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </>
          )}
        </div>
        <div className='book-discount-container'>
          {isDetail && data.discount && data.discount !== '' && (
            <div className='book-price'>
              <span className='book-price-text'>원가</span>
              <span>{Number(data.price).toLocaleString()}원</span>
            </div>
          )}
          <div className='book-discount'>
            {isDetail && (
              <span className='book-discount-text'>
                {data.discount && data.discount !== '' ? '할인가' : '원가'}{' '}
              </span>
            )}
            <span>
              {data.discount && data.discount !== ''
                ? Number(data.discount).toLocaleString()
                : Number(data.price).toLocaleString()}
              원
            </span>
          </div>
          <div className='button-container'>
            <button className='sell-button' onClick={handleSellButtonClick}>
              구매하기
            </button>
            <button className='detail-button' onClick={handleDetailClick}>
              상세보기
              <img src={DetailArrowIcon} alt='detail-arrow-icon' />
            </button>
          </div>
        </div>
      </BookListItemContainer>
    </>
  );
};
