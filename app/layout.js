'use client';
import React from "react";
import './globals.css';
// import { Provider } from "react-redux";

export default function RootLayout({children})  {
  return (
    <html lang='en'>
      <body>
        {/* <Provider> */}
          {children}
        {/* </Provider> */}
      </body>
    </html>
  )
}