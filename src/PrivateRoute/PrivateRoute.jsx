import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvide";

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) return (
        <div className="flex justify-center bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400 ">
             <span className="loading loading-spinner loading-lg h-screen flex items-center justify-center"></span>
        </div>
    );
    if (!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children;
};
PrivateRout.propTypes = {
    children: PropTypes.object.isRequired
}
export default PrivateRout;