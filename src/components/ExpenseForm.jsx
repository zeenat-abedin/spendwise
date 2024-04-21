import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Spin } from 'antd';

import { addExpense } from '../reducers/expenseSlice';

function ExpenseForm({ onClose, onSubmit, expenses }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const navigate = useNavigate();
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
    onClose()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(expenses)
  };
 
  return (
      <Form
        {...formItemLayout}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: 600 }}
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
