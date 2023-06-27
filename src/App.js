
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Root/Routes/Home';
import Info from './Root/Routes/Info';
import Contact from './Root/Routes/Contact';
import Guide from './Root/Routes/Guide';
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/guide' element={<Guide></Guide>}></Route>
        <Route path='/info' element={<Info></Info>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Route>
    )
  )
  return (
    
   <RouterProvider router={router}></RouterProvider>
   
   
  );
}

export default App;
