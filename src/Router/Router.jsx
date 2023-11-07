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
                element: <CreateAssignment></CreateAssignment>

            },
            {
                path: '/assignments',
                element: <Assignments></Assignments>
                
            },
            {
                path: '/myAssignment',
                element: <MyAssignments></MyAssignments>
            },
            {
                path: '/submittedAssignment',
                element: <SubmittedAssignment></SubmittedAssignment>
            },
            {
                path : '/assignments/:id',
                element: <AssignmentDetails></AssignmentDetails>,
                loader: ({params}) =>fetch(`http://localhost:5001/assignments/${params.id}`)
            },
            {
                path : '/updateAssignments/:id',
                element: <UpdateAssignment></UpdateAssignment>,
                loader: ({params}) =>fetch(`http://localhost:5001/assignments/${params.id}`)
            },
            {
                path: '/takeAssignment/:id',
                element: <TakeAssignment></TakeAssignment>,
                loader: ({params}) =>fetch(`http://localhost:5001/assignments/${params.id}`) 
            },
           
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