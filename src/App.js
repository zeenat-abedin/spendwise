import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
