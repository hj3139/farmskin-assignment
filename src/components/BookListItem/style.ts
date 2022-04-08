import styled from 'styled-components';

export const BookListItemContainer = styled.div<{ detail: boolean }>`
transition: all 0.5s;
position: relative;
border-bottom: 1px solid #d2d6da;
display: flex;
height: auto;
padding: ${props => (props.detail ? '40px 16px' : '16px 16px 16px 48px')};

img {
  transition: all 0.5s;
  width: ${props => (props.detail ? '200px' : '48px')};
  height: ${props => (props.detail ? '264px' : '68px')};
}

.book-info {
  transition: all 0.5s;
  position: ${props => (props.detail ? 'absolute' : 'relative')}; 
  width: ${props => (props.detail ? '390px' : 'auto')};
  display: flex;
  flex: 0.8 0.2 50px;
  align-items: ${props => (props.detail ? 'flex-start' : 'center')};
  margin: ${props => (props.detail ? '0 0 0 248px' : 'auto 0 auto 48px')};
  ${props => props.detail && `flex-direction: row; flex-wrap: wrap;`}

  .book-introduce-text {
    flex: 1 1 390px;
    margin: 16px 0 12px;
    font-size: 14px;
    font-weight: 700;
    color: #353C49;
  }

  .book-name {
    transition: all 0.5s;
    width: auto;
    font-size: 18px;
    font-weight: 700;
    color: #353c49;
    ${props => props.detail && `flex: 1 1 120px;`}
  }

  .book-author {
    flex: ${props => (props.detail ? 'none' : '1 1 140px')};
    margin-left: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #8d94a0;
  }

  .book-description {
    transition: all 0.5s;
    font-size: 10px;
    font-weight: 500;
    height: ${props => (props.detail ? '100%' : '0')};
    line-height: 16px;
  }
}

.book-discount-container {
  transition: all 0.5s;
  position: ${props => (props.detail ? 'absolute' : 'relative')};
  right: ${props => (props.detail ? '16px' : '0px')};
  margin ${props => (props.detail ? '0' : 'auto 0 auto auto')};
  ${props => !props.detail && `display: flex`};
  align-items: center;

  .book-discount {
    transition: all 0.5s;
    position: ${props => (props.detail ? 'absolute' : 'relative')};
    top: ${props => (props.detail ? '162px' : 'auto')};
    right: ${props => (props.detail ? '16px' : 'auto')};
    ${props =>
      props.detail &&
      `display: flex; align-items: center; width: 110px; justify-content: flex-end;`}
    font-size: 18px;
    font-weight: 700;
    color: #353c49;

    &-text {
      font-size: 10px;
      font-weight: 500;
      color: #8D94A0;
      margin-right: 8px;
    }
  }

  .book-price {
    transition: all 0.5s;
    position: ${props => (props.detail ? 'absolute' : 'relative')};
    top: ${props => (props.detail ? '128px' : 'auto')};
    right: ${props => (props.detail ? '16px' : 'auto')};
    ${props =>
      props.detail &&
      `display: flex; align-items: center; width: 110px; justify-content: flex-end;`}
    font-size: 18px;
    font-weight: 350;
    color: #353c49;

    span:nth-child(2) {
      text-decoration: line-through;
    }

    &-text {
      font-size: 10px;
      font-weight: 500;
      color: #8D94A0;
      margin-right: 8px;
      text-decoration: none;
    }
  }


  .button-container {
    transition: all 0.5s;
    margin-left:  ${props => (props.detail ? '0px' : '56px')};

    button {
      width: 115px;
      height: 48px;
      font-size: 16px;
      font-weight: 500;
      border: none;
      border-radius: 8px;
    }

    .sell-button {  
      transition: all 0.3s;
      width: ${props => (props.detail ? '240px' : '115px')}; 
      right: 0;
      position: ${props => (props.detail ? 'absolute' : 'relative')};
      top: ${props => (props.detail ? '216px' : '0')};
      background-color: #4880ee;
      color: #ffffff;
    }

    .detail-button {
      transition: all 0.5s;
      background-color: #f2f4f6;
      margin-left: ${props => (props.detail ? '0px' : '8px')};
      color: #6d7582;

      img {
        width: 14px;
        height: 8px;
        margin-left: 5px;
      }
    }
  }
}
`;
