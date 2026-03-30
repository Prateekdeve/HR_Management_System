import {Link} from 'react-router-dom';

function Sidebar(){
  return(
    <div className ="w-64 h-screen bg-slate-900 text-white flex flex-col">
      <h2 className = "text-2xl font-bold p-6 border-b border-slate">HRMS</h2>
      
      <nav className ="flex flex-col p-4 space-y-3">
        <Link to ="/" className ="hover:bg-slate-700 p-2 rounded">Dashboard</Link>
        <Link to="/employees" className="hover:bg-slate-700 p-2 rounded">Employees</Link>
        <Link to ="/leaves" className ="hover:bg-slate-700 p-2 rounded"> Leave Management</Link>
        <Link to="/attendance" className="hover:bg-slate-700 p-2 rounded">Attendance</Link>
        
      </nav>
    </div>
  )
}

const styles ={
  sidebar:{
    width:"200px",
    height:"100vh",
    background:"#1e293b",
    color:"white",
    display:"flex",
    flexDirection:"column",
    padding:"20px",
    gap:"15px"
  }
};

export default Sidebar;