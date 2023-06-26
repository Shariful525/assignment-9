import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Main from './layouts/Main';
import Home from './components/Home/Home';

import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import LanguageDetail from './components/LanguageDetail/LanguageDetail';

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
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',

          element: <Statistics></Statistics>
        },

        {
          path: '/language/:languageId',
          loader: async ({ params }) => {

            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.languageId}`)
          },
          element: <LanguageDetail></LanguageDetail>
        }

      ]
    },
    {
      path: '*',
      element: <div style={{ textAlign: 'center' }}>
        <h2>404!!!</h2>
        <h3>This Page was not found</h3>
      </div>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
