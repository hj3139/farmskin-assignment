import styled from 'styled-components';

export const BookListContainer = styled.div`
  width: 960px;
  margin: 0 auto;

  .book-count-wrap {
    margin: 32px 0 40px;
    font-size: 16px;
    font-weight: 500;
    .book-count {
      color: #3968e9;
    }
  }

  .ant-pagination {
    display: flex;
    justify-content: center;
    margin-top: 56px;

    li {
      width: auto;
      min-width: 24px;
      height: 24px;
      line-height: 24px;
      border-radius: 4px;

      a {
        width: 100%;
        height: 100%;
        font-size: 14px;
        padding: 0;
        color: #8d94a0;
      }
    }
    .ant-pagination-item-active {
      background: #4880ee;
      a {
        color: #ffffff;
      }
    }
    .ant-pagination-item-link {
      color: #8d94a0;
    }
  }
`;
