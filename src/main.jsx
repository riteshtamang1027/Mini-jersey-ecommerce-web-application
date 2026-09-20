import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './layouts/header.jsx';
import Footer from './layouts/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter className="flex flex-col h-screen">
   <div className='sticky -top-6 z-50'>
    <Header/>
   </div>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <div className='flex-1'>
      <Footer/>
    </div>
  </BrowserRouter>,
  </StrictMode>,
)
