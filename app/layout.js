'use client';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import './globals.css';
import store from "./store/configureStore";
import { Provider } from "react-redux";
// import { Provider } from "react-redux";

export default function RootLayout({children})  {
  return (
    <html lang='en'>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}