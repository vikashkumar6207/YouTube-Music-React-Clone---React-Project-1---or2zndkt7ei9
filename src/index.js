import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import UserProvider from "./Provider/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  {/*   <Auth0Provider 
    domain="dev-ursfh57icldo5op2.us.auth0.com"
    clientId="53J1ksvxUvlFuh7SxY4WNhiXtSHGkwkj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    > */}
     {/* </Auth0Provider> */}
     <UserProvider>
     <App />
     </UserProvider>
      
     
    </BrowserRouter>
  </React.StrictMode>
);
