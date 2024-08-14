import { hydrateRoot } from 'react-dom/client'; 
import React from 'react';
import App from './App';
import ReactDOMServer from "react-dom/server";
import ContainerProfileForm from './subsystems/components/ContainerProfileForm';
import ProfileForm from './subsystems/components/ProfileForm';

let data;
 
if (typeof window !== 'undefined') {
 data = window.__data__;
}


//hydrateRoot(document.getElementById('app'), <App data={data} />);
//hydrateRoot(document.getElementById('app'), <App /> ) ;
//hydrateRoot(document.getElementById('app'), <App data={data} />);