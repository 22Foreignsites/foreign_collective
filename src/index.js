import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import './css/index.css';
import Layout from './Layout';
import Home from './pages/Home'; //need to reference home before calling that home file -> You can call Home anything but the file path has to be correct
import Merch from './pages/Merch';
import Contact from './pages/Contact';
import Volunteer from './pages/Volunteer';
import Scholarship from './pages/Scholarship';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="merch" element={<Merch />} />
          <Route path="contact" element={<Contact />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="scholarship" element={<Scholarship />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
//import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
