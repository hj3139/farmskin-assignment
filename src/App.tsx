import { BookList, Header, SearchForm } from 'components';

import styled from 'styled-components';
import 'antd/dist/antd.min.css';
import './App.css';

import { observer } from 'mobx-react';

const StyledApp = styled.div`
  #content {
    position: relative;
    height: 100%;
    margin: 0 auto;
    padding: 32px 0 80px;
  }
`;

const App = () => {
  return (
    <StyledApp className='App'>
      <Header />
      <SearchForm />
      <div id='content'>
        <BookList />
      </div>
    </StyledApp>
  );
};

export default observer(App);
