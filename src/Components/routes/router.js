import {createBrowserRouter} from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Home';
import Statistics from '../Statistics';
import Blog from '../Blog';
import Questions from '../Questions';
import ErrorPage from '../ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home/>
            },
            {
                path: '/statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/questions/:quizId',
                loader: ({params}) =>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                },
                element: <Questions/>
            },

            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
])