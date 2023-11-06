import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvide";

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) return (
        <div className="flex justify-center">
            <span className="loading loading-spinner text-black loading-lg"></span>
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