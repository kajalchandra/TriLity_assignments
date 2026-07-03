
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {
 

  return (
    <div className='app'>
       <Header title={"TriLity"}/>
       <div className='main-content'>
           <Outlet/>
       </div>
       
        <Footer title={"Copyright"} year={2026}/>
    </div>
     
    
  )
}

 export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : <About/>
      }
    ]
  }
])

export default App
