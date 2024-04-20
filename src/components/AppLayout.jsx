import { Outlet } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";

function AppLayout (){
  return (
    <div>
      <Header />
      <Dashboard/>
      <Outlet />
    </div>
  )
};

export default AppLayout;
