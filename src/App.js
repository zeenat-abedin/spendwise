import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import Error from './components/Error';
import WelcomeScreen from './components/WelcomeScreen';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <WelcomeScreen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
