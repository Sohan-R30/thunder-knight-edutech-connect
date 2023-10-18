import React from 'react';
// import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
   // const {user} = useAuth();
    return (
        <div>
             <div className="w-full m-4">
                <h2 className="text-3xl">Welcome back, {user.displayName}</h2>
            </div>
        </div>
    );
};

export default AdminHome;