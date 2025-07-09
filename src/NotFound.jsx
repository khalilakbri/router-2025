import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();
    function gohome(){
        navigate("/");
    }
    return (
        <div className="text-center h-96 p-10">
            <h1 className="text-red-400 font-bold">404 Page not found</h1>
            <button className="m-3 px-4 py-2 rounded text-white bg-blue-500" onClick={gohome}>Go to Home</button>
        </div>
    )
}

export default NotFound;