import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import App from './App';
import { DatastoreProvider } from './Context/Datastore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DatastoreProvider>
    <App />
  </DatastoreProvider>

);


