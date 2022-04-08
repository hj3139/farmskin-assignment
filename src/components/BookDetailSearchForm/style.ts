import { Button } from 'antd';
import styled from 'styled-components';

export const BookDetailSearchFormContainer = styled.form`
  .select-width-input-container {
    margin: 14px 0 80px;
  }
`;

export const BookDetailSearchFormButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 64px;
    height: 32px;
    margin: 0 7px;
    border: none;
    border-radius: 8px;
  }

  .reset-button {
    color: #6d7582;
    background-color: #f2f4f6;
  }

  .submit-button {
    color: #ffffff;
    background-color: #4880ee;
  }
`;

export const AddDetailSearchConditionButton = styled(Button)`
  position: absolute;
  width: 176px;
  height: 36px;
  right: 40px;
  border: none;
  background-color: #eaf3fe;
  font-size: 14px;
  font-weight: 500;
  color: #4880ee;
  margin: 14px 0 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 8px;
  }
`;

export const SelectWithInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  .ant-select,
  .ant-input {
    font-size: 14px;
    border-radius: 0;
    height: 36px;
    border-bottom: 1px solid;
  }

  .ant-select {
    width: 100px;
    border-color: #d2d6da;
  }

  .ant-select-selection-item {
    font-weight: 700;
  }

  .ant-select-selector {
    width: 100px;
    height: 36px;
    padding-top: 2px;
    padding-bottom: 2px;

    .ant-select-selection-placeholder {
      font-weight: 500 !important;
    }
  }

  .ant-input {
    width: 176px;
    margin-left: 8px;
    font-weight: 500px;
    border-color: #4880ee;
  }
`;
