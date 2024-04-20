import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Button, Layout } from 'antd';

const HeaderText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
`;

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: black;
  }
`;

function Header() {
  return (
    <Layout>
      <Link to="/" >
        <HeaderText>
          SPENDWISE
        </HeaderText>
      </Link>
      <ButtonContainer style={{display: 'flex', justifyContent: "flex-end", alignItems: 'center', gap: '0.5rem'}}>
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