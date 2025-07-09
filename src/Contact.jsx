import { useParams } from "react-router-dom";

function Contact(){
    const {id} = useParams();
    return (
        <>
            <h1 className="text-7xl font-bold text-center text-green-500 p-10">Contact page {id}</h1>
        </>
    )
}

export default Contact;