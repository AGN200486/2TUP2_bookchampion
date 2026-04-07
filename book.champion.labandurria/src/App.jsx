import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/notFound/NotFound";
import Protected from "./components/Protected/Protected";

function App() {
  const [loggedIn, SetLoggedIn] = useState(false);

  const handleLogIn = () => {
    SetLoggedIn(true);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="login" element={<Login onLogin={handleLogIn} />} />
          <Route
            path="./library"
            element={
              <Protected isSignedIn={loggedIn}>
                <Dashboard />
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
