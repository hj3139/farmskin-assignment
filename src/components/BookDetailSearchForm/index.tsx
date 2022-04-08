import { FormEvent, useState } from 'react';

import {
  AddDetailSearchConditionButton,
  BookDetailSearchFormButtonContainer,
  BookDetailSearchFormContainer,
  SelectWithInputContainer
} from './style';
import PlusIcon from 'assets/images/icon/farmskin-plus-icon.png';
import { Input, Select } from 'antd';

import useStore from 'store';

interface BookDetailSearchFormProps {
  onSubmit: (e: FormEvent) => void;
}

export const BookDetailSearchFrom = (props: BookDetailSearchFormProps) => {
  const { onSubmit } = props;

  const [count, setCount] = useState(1);
  const [selectList, setSelectList] = useState<string[]>([]);
  const [detailSeachCondiiton, setDetailSearchCondition] = useState<{ [key: string]: string }>({});

  const selectOptionList = [
    { value: 'd_titl', text: '제목' },
    { value: 'd_auth', text: '저자명' },
    { value: 'd_publ', text: '출판사' }
  ];

  const book = useStore.BookStore;
  const { getDetailBookList, handleIsPop } = book;

  const handlAddSearchDetailCondition = () => {
    setCount(count + 1);
  };

  const handleChangeSelect = (value: string, idx: number) => {
    setSelectList(prev => {
      if (prev[idx]) {
        const slice = prev.slice();
        slice.splice(idx, 1, value);
        return slice;
      } else {
        return prev.concat(value);
      }
    });
  };

  const handleChangeInput = (value: string, idx: number) => {
    if (selectList[idx]) {
      setDetailSearchCondition({
        ...detailSeachCondiiton,
        [selectList[idx]]: value
      });
    }
  };

  const selectOptionListFilter = (arr: { value: string; text: string }) => {
    let bool = true;
    for (let i = 0; i < selectList.length; i++) {
      if (selectList[i] === arr.value) {
        bool = false;
      }
    }
    return bool;
  };

  const handleDetailSearchConditionDelete = (idx: number) => {
    const slice = { ...detailSeachCondiiton };

    setCount(count - 1);

    delete slice[selectList[idx]];
    setDetailSearchCondition(slice);

    setSelectList(prev => {
      prev.splice(idx, 1);
      return prev;
    });
  };

  const handleDetailSearchConditionReset = () => {
    setDetailSearchCondition({});
    setSelectList([]);
    setCount(1);
  };

  const transperValue = (value: string) => {
    let text;
    switch (value) {
      case 'd_titl':
        text = '제목';
        break;
      case 'd_publ':
        text = '출판사';
        break;
      case 'd_auth':
        text = '저자명';
        break;
      default:
        text = null;
    }
    return text;
  };

  const handleDetailSubmit = () => {
    getDetailBookList(detailSeachCondiiton);
    handleIsPop();
  };

  return (
    <BookDetailSearchFormContainer onSubmit={onSubmit}>
      <div className='select-width-input-container'>
        {Array.from(Array(count)).map((_, idx) => {
          return (
            <SelectWithInputContainer key={idx}>
              <Select
                placeholder='선택'
                value={transperValue(selectList[idx])}
                bordered={false}
                onChange={value => handleChangeSelect(value, idx)}
                disabled={selectList.length === 3}
              >
                {selectOptionList.filter(selectOptionListFilter).map(arr => {
                  return (
                    <Select.Option value={arr.value} key={arr.value}>
                      {arr.text}
                    </Select.Option>
                  );
                })}
              </Select>
              <Input
                bordered={false}
                value={detailSeachCondiiton[selectList[idx]]}
                placeholder='검색어 입력'
                onChange={e => handleChangeInput(e.target.value, idx)}
              />
              {idx > 0 && <div onClick={() => handleDetailSearchConditionDelete(idx)}>삭제</div>}
            </SelectWithInputContainer>
          );
        })}

        {count < 3 && (
          <AddDetailSearchConditionButton onClick={handlAddSearchDetailCondition}>
            <img src={PlusIcon} alt='plus-icon' /> 검색 조건 추가
          </AddDetailSearchConditionButton>
        )}
      </div>
      <BookDetailSearchFormButtonContainer>
        <button className='reset-button' onClick={handleDetailSearchConditionReset}>
          초기화
        </button>
        <button className='submit-button' type='submit' onClick={handleDetailSubmit}>
          검색하기
        </button>
      </BookDetailSearchFormButtonContainer>
    </BookDetailSearchFormContainer>
  );
};
