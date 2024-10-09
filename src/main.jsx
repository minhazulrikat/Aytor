import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./App.css"
function renderLoadComponent() {
  const root = document.getElementById('root'); // Get the root element
  const loadReactRoot = createRoot(root); // Create a React root
  loadReactRoot.render(<Load />); // Render the Load component
}

window.onload = renderLoadComponent; // Call the function when the window loads

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
