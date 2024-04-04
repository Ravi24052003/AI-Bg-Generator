import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import FeatureSection from './components/landing-page/FeatureSection.jsx'
import BlogSection from './components/landing-page/BlogSection.jsx'
import FileUpload from "./pages/FileUpload.jsx"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />}>
    <Route path='' element = {<LandingPage />} />
    <Route path='FeatureSection' element = {<FeatureSection />} />
    <Route path='BlogSection' element = {<BlogSection />} />
    <Route path='file-upload' element = {<FileUpload />} />
     <Route />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
