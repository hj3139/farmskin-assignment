// style
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const ResetStyle = createGlobalStyle`
  ${reset}
`;

const App = () => {
  return (
    <div className='App'>
      <ResetStyle />
    </div>
  );
};

export default App;
