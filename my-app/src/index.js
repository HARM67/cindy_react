import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importation du Routeur
import App from './App';
import { useEffect } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

//On donne un titre à l'onglet
function useTitle(title) {
    useEffect(() => {
      document.title = `Kasa | ${title}`;
    });
  }
  
  export default useTitle;