import { Outlet, Link } from "react-router-dom";

function Dashboard(){
    return (
        <div className="flex">
            <div className="w-42">
                <ul>
                    <li><Link className="m-1 p-3 block bg-blue-200 font-bold" to="/dashboard/profile">Profile</Link></li>
                    <li><Link className="m-1 p-3 block bg-blue-200 font-bold" to="/dashboard/setting">Setting</Link></li>
                </ul>
            </div>

            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;