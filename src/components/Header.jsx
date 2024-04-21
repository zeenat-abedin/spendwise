import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { Button, Layout, Modal } from 'antd';
import { addExpense } from '../reducers/expenseSlice';
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
  const [result, setResult] = useState(null);
    const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses)


  const handleButtonClick = () => {
    const description = 'Sample expense'
    const amount = 10
    const newExpense = { description, amount };
    setResult(newExpense);
    dispatch(addExpense({ description, amount }))
    setShowForm(true)  
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSubmit = (expenses) => { 
    console.log('Expenses:', expenses);
   setResult(expenses);
   setShowForm(false);
  };
  
  return (
    <Layout>
        <HeaderText>
          SPENDWISE
        </HeaderText>
      <ButtonContainer style={{display: 'flex', justifyContent: "flex-end", alignItems: 'center', gap: '0.5rem'}}>
      <Button type='primary'>
        Log Credit
      </Button>
      <Button type='primary' onClick={handleButtonClick} >
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
        <ExpenseForm onClose={handleCancel} onSubmit={handleSubmit} />
      </Modal>
    </Layout>
  );
}

export default Header;