import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import CheckOut from "../Pages/CheckOut";
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

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: () => fetch('https://11th-assignment-08-11-22-server-asadaman42.vercel.app/servicess')
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
                loader: () => fetch('https://11th-assignment-08-11-22-server-asadaman42.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`https://11th-assignment-08-11-22-server-asadaman42.vercel.app/services/${params.id}`)
                
            },
            {
                path: '/myreviews',
                element: <Protected><MyReviews></MyReviews></Protected>
                
                
            },
            {
                path: '/editreview/:id',
                element: <Protected><EditReview></EditReview></Protected>,
                loader: ({ params }) => fetch(`https://11th-assignment-08-11-22-server-asadaman42.vercel.app/editreview/${params.id}`)
                
                
            },
            
            {
                path: '/checkout/:id',
                element: <Protected> <CheckOut></CheckOut> </Protected>,
                loader: ({ params }) => fetch(`https://11th-assignment-08-11-22-server-asadaman42.vercel.app/services/${params.id}`)

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