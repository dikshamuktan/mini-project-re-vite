import {Link} from "react-router-dom"



function Header() {
  
    return(
        <div  >
          
            <ul className="flex gap-36 p-5 justify-center items-center text-white bg-blackwish">
                <li>
                   <Link  to={"/"} className="">Home</Link>
                   </li>
                   <li>
                    <Link to={"/form"}>Form</Link>
                    </li>
                    <li> 
                    <Link to={"/details"}>Task Details</Link>
                    </li>
                    <li>
                    <Link to={"/movies"}>Movies</Link>
                    </li>
          
            </ul>
         
        </div>
    )
}

export default Header;