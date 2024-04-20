import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Modal } from "antd";

import Header from "./Header";
import Dashboard from "./Dashboard";
import WelcomeScreen from "./WelcomeScreen";
import TransactionHistory from "./TransactionHistory";
import Chart from "./Chart";
import MainContent from "./MainContent";

function AppLayout() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <Dashboard />
      <MainContent/>
      <Outlet />
      <Modal open={isModalOpen} onCancel={handleModalClose} footer={null}>
        <WelcomeScreen onClose={handleModalClose} />
      </Modal>
    </div>
  )
};

export default AppLayout;
