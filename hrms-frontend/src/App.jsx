import { BrowserRouter ,Routes ,Route} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Leaves from "./pages/Leaves";
import Attendance from "./pages/Attendance";
import Login from "./pages/Login";

function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path ="/login" element ={<Login/>}/>
        <Route path = "/*" element ={
          <ProtectedRoute allowedRoles ={["Admin", "HR","Manager"]}>
            <DashboardLayout>
              <Routes>
              <Route path ="/" element ={<Dashboard/>}/>
              <Route path ="/employees" element ={<Employees/>}/>
              <Route path ="/leaves" element ={<Leaves/>}/>
              <Route path ="/attendance" element ={<Attendance/>}/>
            </Routes>
            </DashboardLayout>
            
          </ProtectedRoute>
        }
        />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;