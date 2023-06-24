import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Main from './layouts/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        }

      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
