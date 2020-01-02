// @ts-nocheck
import React from "react";
import { render } from "react-dom";

const container = document.getElementById("root");

const Home: React.FC = ({ message }: { message: string }) => (
  <div>
    <h2>{message}</h2>
  </div>
);

render(<Home {...window.props} />, container);

// keep this if you want hot reloading
if (module.hot) {
  module.hot.accept();
}
