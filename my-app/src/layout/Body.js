/** @format */

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Content from "../components/Content";
import Home from "../components/Home";
//import RoutePath from "src/router/RoutePath";
export const Body = () => {
  return (
    <>
    <br/>body <br/>
      <div>
        <Link to="/" className="link">
          Home
        </Link>{" "}
        &nbsp;
        <Link to="/content" className="link">
          content
        </Link>
        &nbsp;
        <Link to="/home" className="link">
          Home
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>



      {/* body
      <nav>
        <Link to="/me">My Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Home />} />
        <Route path="/me" element={<Home />} />
      </Routes> */}
      {/* <Routes>
     
        <route path="me" element={<Home />} />
      </Routes> */}
      {/* <Suspense fallback={'Loading'}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <>
                        <route.component {...props} />
                      </>
                    )}
                  />
                )
              )
            })}
          </Switch>
        </Suspense> */}
    </>
  );
};
function HomePage() {
    return <div className="page">🏠 Page</div>;
  }
  
  function NotFoundPage() {
    return <div className="page">🧐 Page</div>;
  }
  
  function ApplePage() {
    return <div className="page">🍎 Page</div>;
  }