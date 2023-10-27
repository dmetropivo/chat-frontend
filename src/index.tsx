import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import HomePage from './components/HomePage/HomePage';
import ChatPage from './components/ChatPage/ChatPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'chat/:chatId',
    element: <ChatPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);