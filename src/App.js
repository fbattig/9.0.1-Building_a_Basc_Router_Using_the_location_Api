import React from "react";
import "./styles.css";

const RouteTo = (path) => {
  console.info(path);
  const paths = path
    .split("/")
    .map((p) => p.toLowerCase())
    .slice(1);
  switch (paths[0]) {
    case "about":
      return <About />;
    default:
      return <div className="Default">Default Route</div>;
  }
};

const About = () => (
  <div className="About">
    <h1> About Page </h1>
    <hr />
    <p>Informaion about your app or who you are would go here</p>
  </div>
);

const App = () => {
  return (
    <div className="Router">
      <h1>Example Router </h1>
      <hr />
      <p> href: {window.location.href}</p>
      <p> path: {window.location.pathname}</p>
      <hr />

      {RouteTo(window.location.pathname)}
    </div>
  );
};
export default App;
