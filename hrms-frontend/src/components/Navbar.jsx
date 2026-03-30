import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar(){
  const {user ,logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between item-center bg-white shadow px-6 py-4">
      <h3 className ="text-lg font-semibold"> Welcome ,{user?.name}</h3>
      <button onClick={logout}className ="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-500">Logout</button>
    </div>
  );
}

const styles ={
  navbar:{
    display:"flex",
    justifyContent:"space-between",
    padding:"15px",
    background:"#f1f5f9",
  }
};

export default Navbar;