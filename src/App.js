/** @format */

import "./App.css";
import "./components/Home";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import Home from "./components/Home";
import Content from "./components/Content";
function HomePage() {
  return <div className="page">🏠 Page</div>;
}

function NotFoundPage() {
  return <div className="page">🧐 Page</div>;
}

function ApplePage() {
  return <div className="page">🍎 Page</div>;
}

function Users() {
  return <div className="page">🍎 🧐Users</div>;
}

function Chil() {
  return (
    <>
   
    </>
  );
}
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
        
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <div>
          <Link to="/home" className="link">
            Home
          </Link>

          <Link to="/applet" className="link">
            Applet
          </Link>
          <Link to="/users/me" className="link">
            Test
          </Link>
        </div>
        <Routes>
     
          <Route path="/home" element={<Chil />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/applet" element={<ApplePage />} />
          <Route path="/users">
            <Route path=":userId" element={<Users />} />
            <Route path="me" element={<Users />} />
          </Route>
          {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
