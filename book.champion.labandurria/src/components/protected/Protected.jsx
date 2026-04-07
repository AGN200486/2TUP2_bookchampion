import { Navigate, navigate } from "react-router";

const Protected = ({ isSignedIn, children }) => {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
