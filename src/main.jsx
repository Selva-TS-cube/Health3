import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faImage, faArrowRight, faCheckCircle);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
