import styled from 'styled-components';
import SearchIcon from 'assets/images/icon/farmskin-search-icon.png';
import CloseIcon from 'assets/images/icon/farmskin-close-icon.png';

export const SearchFormContainer = styled.div`
  position: relative;
  width: 960px;
  height: 100%;
  margin: 80px auto 0;
  padding: 80px 0 0;
  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const BookSearchInputContainer = styled.form`
  display: flex;
  margin-top: 16px;

  button {
    width: 72px;
    height: 32px;
    margin: auto 0 auto 16px;
    color: #8d94a0;
    border: 1px solid #8d94a0;
    border-radius: 8px;
    background-color: #ffffff;
  }

  input {
    width: 465px;
    height: 35px;
    padding: 15px 51px;
    border: none;
    background-color: #f2f4f6;
    border-radius: 100px;
    font-size: 16px;
    color: #8d94a0;
    font-weight: 400;
    line-height: 24px;
    background-image: url(${SearchIcon});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 15px;

    :focus {
      outline: none;
    }
  }
`;

export const DetailSearchPopupContainer = styled.div`
  position: absolute;
  width: 336px;
  top: 170px;
  left: 355px;
  padding: 12px;
  background: #ffffff;
  box-shadow: 0 4px 14px 6px #97979726;
  z-index: 1;

  .popup-close {
    position: relative;
    width: 12px;
    height: 12px;
    margin: 0 0 0 auto;
    background-image: url(${CloseIcon});
    background-size: 12px;
    background-repeat: no-repeat;
  }
`;
