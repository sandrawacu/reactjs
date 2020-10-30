import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>home page </h1>
            <Link to='/Call'>
                <p>Take me to contact us page</p>
            </Link>

        </div>
    )
}

export default Home;