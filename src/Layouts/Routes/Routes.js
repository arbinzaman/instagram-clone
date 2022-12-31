import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../HomeLayouts/HomeLayouts';
import Main from '../Main/Main';
import ErrorRoute from './ErrorRoute';
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'
import NewesFeed from '../../Pages/NewesFeed/NewesFeed';
import AddAPost from '../../Pages/AddAPost/AddAPost';
import NewesFeeds from '../../Pages/NewesFeed/NewesFeeds';
import Profile from '../../Pages/Profile/Profile';


const router = createBrowserRouter([

    {
      path:'/',
      element:<HomeLayouts></HomeLayouts>,
      children:[
        
            // {
            //     path:'/',
            //     element:<HomeLayouts></HomeLayouts>,
                
            // },
         
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
                path:'/newfeed',
                element:<NewesFeed></NewesFeed>,
    
            },         
            {
                path:'/profile',
                element:<Profile></Profile>,
    
            },         
            {
                path:'/newfeeds',
                element:<NewesFeeds></NewesFeeds>,
                loader:()=> fetch('http://localhost:5000/addapost'),
    
            },         
            {
                path:'/addapost',
                element:<AddAPost></AddAPost>,
    
            },         
        ],
        
    },
   

  ]);
  export default router;