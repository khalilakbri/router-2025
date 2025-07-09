import { Link } from "react-router-dom"
function Layout(props){
    return (
        <div>
            <ul>
                <li className="inline-block"><Link className="inline-block p-4 font-bold" to="/">Home</Link></li>
                <li className="inline-block"><Link className="inline-block p-4 font-bold" to="/contact/9">Contact</Link></li>
                <li className="inline-block"><Link className="inline-block p-4 font-bold" to="/dashboard">Dashboard</Link></li>
            </ul>

            {props.children}

            <div className="p-10 text-center bg-slate-200">
                &copy; 2025
            </div>
        </div>
    )
}

export default Layout;