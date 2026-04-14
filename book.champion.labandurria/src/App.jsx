import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/notFound/NotFound";
import Protected from "./components/Protected/Protected";

function App() {
  const [loggedIn, SetLoggedIn] = useState(false);

  const handleLogIn = () => {
    SetLoggedIn(true);
  };
  const handleLogOut = () => {
  SetLoggedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="login" element={<Login onLogin={handleLogIn} />} />
          <Route
            path="/library"
            element={
              <Protected isSignedIn={loggedIn}>
                <Dashboard onLogout={handleLogOut}/>
              </Protected>
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
