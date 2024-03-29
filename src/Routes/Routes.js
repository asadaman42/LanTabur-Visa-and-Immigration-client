import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Services from "../Pages/Services";
import Homepage from "../Pages/Homepage";
import LogIn from "../Pages/LogIn";
import LoginEmail from "../Pages/LoginEmail";
import Register from "../Pages/Register";
import Unhandled from "../Pages/Unhandled";
import ViewDetails from "../Pages/ViewDetails";
import Protected from "./Protected";
import MyReviews from "../Pages/MyReviews";
import EditReview from "../Pages/EditReview";
import AddService from "../Pages/AddService";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: () => fetch('https://lantabur-visa-and-immigration-server-asadaman42.vercel.app/servicess')
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/loginemail',
                element: <LoginEmail></LoginEmail>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://lantabur-visa-and-immigration-server-asadaman42.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`https://lantabur-visa-and-immigration-server-asadaman42.vercel.app/services/${params.id}`)
                
            },
            {
                path: '/myreviews',
                element: <Protected><MyReviews></MyReviews></Protected>
                
                
            },
            {
                path: '/addservice',
                element: <Protected><AddService></AddService></Protected>
                
                
            },
            {
                path: '/editreview/:id',
                element: <Protected><EditReview></EditReview></Protected>,
                loader: ({ params }) => fetch(`https://lantabur-visa-and-immigration-server-asadaman42.vercel.app/editreview/${params.id}`)
                
                
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/*',
                element: <Unhandled></Unhandled>
            }


        ]
    }

])