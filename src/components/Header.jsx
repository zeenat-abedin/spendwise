import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Button, Layout } from 'antd';

function Header() {

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: black;
  }
`;
  
  return (
    <Layout>
      <Link to="/" >
        SPENDWISE
      </Link>
      <ButtonContainer style={{display: 'flex', justifyContent: "flex-end"}}>
      <Button type='primary'>
        Log Credit
      </Button>
      <Button type='primary'>
        Log An Expense
        </Button>
      </ButtonContainer>
    </Layout>
  );
}

export default Header;