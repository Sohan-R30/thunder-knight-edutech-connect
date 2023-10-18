import React from 'react';
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const isAdmin = true;
    const isAdmin = useAdmin();
    return (
        <div className="drawer lg:drawer-open bg-slate-300">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
              <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-black text-white">
            {
              isAdmin ? <>
              <li><Link to='/dashboard/adminhome'>Admin Home</Link></li>
            <li><Link to='/dashboard/manageclasses'>Manage Classes</Link></li>
            <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
              </> : 
              <>
              <li><Link to='/dashboard/userhome'>User Home</Link></li>
              <li><Link to='/dashboard/myselectedclasses'>My Selected Classes</Link></li>
              <li><Link to='/dashboard/myenrolledclasses'>My Enrolled Classes</Link></li>
              </>
            }
            <div className="divider"></div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/instructors'>Instructors</Link></li>
            <li><Link to='/classes'>Classes</Link></li>
          </ul>

        </div>
      </div>
    );
};

export default Dashboard;