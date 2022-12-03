import './App.css';
import {RouterProvider } from 'react-router-dom';
import Spinner from './Shared/Spinner/Spinner';
import router from './Layouts/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="max-w-screen mx-auto">
      <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
