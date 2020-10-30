import React from 'react'
import Header from "../components/Header";


function Signup() {
    return(
        <div>
            <form>
                student name :<input type="text"/>
                 student number :<input type="text"/>
                 student course :<input type="text"/>
                 <input type="submit" value="send"/>

            </form>
        </div>
    )

}
export default Signup;