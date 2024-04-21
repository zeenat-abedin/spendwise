import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Button, Layout, Modal } from 'antd';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

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
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };
  
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
      <Button type='primary' onClick={handleButtonClick}>
        Log An Expense
        </Button>
      </ButtonContainer>
       <Modal
        title="Log An Expense"
        open={showForm}
        onCancel={handleCancel}
        footer={null}
        style={{ top: 20 }}
      >
        <ExpenseForm onClose={handleCancel} />
      </Modal>
    </Layout>
  );
}

export default Header;