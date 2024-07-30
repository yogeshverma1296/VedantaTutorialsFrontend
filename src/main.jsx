import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';


// Libraries Stylesheet
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';

// Customized Bootstrap Stylesheet
import './css/bootstrap.min.css';

{/* Template Stylesheet */}
import './css/style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)