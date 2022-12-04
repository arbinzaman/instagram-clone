import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home/Home';
import Main from '../Main/Main';
import ErrorRoute from './ErrorRoute';
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'
import ContactUs from '../../Pages/ContactUs/ContactUs'
import AllUsers from '../../DashBoard/AllUsers/AllUsers';
import PrivateRoutes from '../../Layouts/PrivateRoutes/PrivateRoutes';
import DashboradLayouts from '../DashboardLayouts/DashboardLayouts';

const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/*',
                element:<ErrorRoute></ErrorRoute>,
    
            },
            {
                path:'/login',
                element:<Login></Login>,
    
            },
            {
                path:'/register',
                element:<Register></Register>,
    
            },
            {
                path:'/contactus',
                element:<ContactUs></ContactUs>,
    
            },
            {
                path:'/dashboard',
                element:<PrivateRoutes><DashboradLayouts></DashboradLayouts></PrivateRoutes>,
                children :[
                    {
                        path:'/dashboard',
                        element:<AllUsers></AllUsers>
                    },
                    // {
                    //     path:'/dashboard/allusers',
                    //     element:<AllUser></AllUser>
                    // },
               
                
                ]
                
            }

            
        ],
        
    },
   

  ]);
  export default router;