import { Children } from "react"
import {Navigate} from "react-router-dom"

const ProtectedRoute=({})=>{
    return isAuth ? Children : <Navigate to ="/login" replace />;
};

export default ProtectedRoute;