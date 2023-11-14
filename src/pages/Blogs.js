import { useEffect } from "react";


const Blogs = () => {

    //effects
    useEffect(()=>{
        authChecker()
    },[])

    //functions

    // check auth
    const authChecker = async () => {
        const response = await fetch('/blogs/')
        const data = await response.json()

        console.log(data)
    }
    return ( 
        <div>
            <h3>Blogs</h3>
        </div>
     );
}
 
export default Blogs;