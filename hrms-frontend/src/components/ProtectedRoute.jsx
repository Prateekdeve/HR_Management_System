import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate} from  "react-router-dom";

function ProtectedRoute({children ,allowedRoles}){
  const {user } = useContext(AuthContext);

  if(!user) return<Navigate to ="/login" />;
  if(!allowedRoles.includes(user.role))
    return <h2> Unauthorized Access</h2>

  return children;
}

export default ProtectedRoute;