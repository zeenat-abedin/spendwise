import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import Error from './components/Error';
import TransactionHistory from './components/TransactionHistory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/transaction-history',
        element: <TransactionHistory />,
      },
      {
        path: '/bills-and-payments',
        element: <TransactionHistory />,
      },
      {
        path: '/my-stats',
        element: <TransactionHistory />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
