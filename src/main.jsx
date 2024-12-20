import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Load from './assets/components/LoadEvent/Load';

const rootElement = document.getElementById('root');

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After 2 seconds, set loading to false
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return isLoading ? <Load /> : (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

const root = createRoot(rootElement);
root.render(<Main />);