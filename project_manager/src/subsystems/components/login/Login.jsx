import { Link } from "react-router-dom";

export default function Login(){

  return(
    <>
      <div>
        <div className="m-8" >
          <label> User: </label>
          <input id="user" className=" bg-gray-300 rounded-lg" ></input>
        </div>

        <div className="m-8" >
          <label> Password: </label>
          <input id="pass" className=" bg-gray-300 rounded-lg" ></input>
        </div>

        <div className="flex">
          <label className="m-4">Have you don't account?</label>
          <div className="hover:underline m-4" >
            <Link to='/form' > Create an account </Link>
          </div>
        </div>
      </div>
    </>
  )
}