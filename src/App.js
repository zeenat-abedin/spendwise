import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import Error from './components/Error';
import WelcomeScreen from './components/WelcomeScreen';

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
