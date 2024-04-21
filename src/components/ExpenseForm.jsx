import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Form, Input } from 'antd';

import { addExpense } from '../reducers/expenseSlice';

function ExpenseForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };
  const handleAmountChange = e => {
    setAmount(e.target.value);
  };
  const handleCancel = () => {
    setDescription('');
    setAmount('');
  };

  const handleSubmit = () => {
    if (!description || !amount) return;
     
    const newExpense = {
      description,
      amount,
    };
    dispatch(addExpense(newExpense));
    handleCancel()
  };
 
  return (
      <Form
        {...formItemLayout}
        variant="filled"
        style={{
        maxWidth: 800,
        }}
      onFinish={handleSubmit}
    >
      
      <Form.Item
      label="Description"
      name="description"
      rules={[
        {
          required: true,
          message: 'Please add a description!',
        },
      ]}
    >
      <Input value={description} onChange={handleDescriptionChange}/>
      </Form.Item>
        <Form.Item
      label="Amount"
      name="amount"
      rules={[
        {
          required: true,
          message: 'Please add amount!',
        },
      ]}
    >
      <Input type="number" value={amount} onChange={handleAmountChange}/>       
      </Form.Item>  
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ExpenseForm;
