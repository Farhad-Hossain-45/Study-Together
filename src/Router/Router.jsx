/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import CreateAssignment from '../Pages/CreateAssignment/CreateAssignment';
import Assignments from '../Pages/Assignments/Assignments';
import AssignmentDetails from '../Pages/Assignments/AssignmentDetails/AssignmentDetails';
import MyAssignments from '../Pages/MyAssignments/MyAssignments';
import SubmittedAssignment from '../Pages/SubmittedAssignment/SubmittedAssignment';
import UpdateAssignment from '../components/UpdateAssignment/UpdateAssignment';
import TakeAssignment from '../components/TakeAssignment/TakeAssignment';
import Error from '../Pages/Error/Error';
import PrivetRoute from '../components/PrivetRoute/PrivetRoute';
import Marks from '../Pages/Marks/Marks';
import MyAssignment from '../Pages/MyAssignments/MyAssignment';


const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/createAssignment',
                element: <PrivetRoute><CreateAssignment></CreateAssignment></PrivetRoute>

            },
            {
                path: '/assignments',
                element: <Assignments></Assignments>
                
            },
            {
                path: '/myAssignment',
                element: <PrivetRoute><MyAssignments></MyAssignments></PrivetRoute>
            },
            {
                path: '/submittedAssignment',
                element: <PrivetRoute><SubmittedAssignment></SubmittedAssignment></PrivetRoute>
                
            },
            {
                path : '/assignments/:id',
                element: <PrivetRoute><AssignmentDetails></AssignmentDetails></PrivetRoute>,
                loader: ({params}) =>fetch(`https://eleventh-assignment-server-smoky.vercel.app/assignments/${params.id}`)
            },
            {
                path : '/updateAssignments/:id',
                element: <PrivetRoute><UpdateAssignment></UpdateAssignment></PrivetRoute>,
                loader: ({params}) =>fetch(`https://eleventh-assignment-server-smoky.vercel.app/assignments/${params.id}`)
            },
            {
                path: '/takeAssignment/:id',
                element: <TakeAssignment></TakeAssignment>,
                loader: ({params}) =>fetch(`https://eleventh-assignment-server-smoky.vercel.app/assignments/${params.id}`) 
            },
            {
                path: '/giveMarks/:id',
                element: <PrivetRoute><Marks></Marks></PrivetRoute>,
                loader: ({params}) =>fetch(`https://eleventh-assignment-server-smoky.vercel.app/takeAssignment/${params.id}`)
            },
            // {
            //     path: '/giveAssignment/:id',
            //     element: <PrivetRoute><MyAssignment></MyAssignment></PrivetRoute>,
            //     loader: ({params}) => fetch(`https://eleventh-assignment-server-smoky.vercel.app/giveAssignment/${params.id}`)
            // },
           
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
            

        ]
    }
])

export default Router;