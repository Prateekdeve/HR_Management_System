import EmployeeChart from "../components/EmployeeChart";
import AttendanceChart from "../components/AttendanceChart";
function Dashboard() {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        HR Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow rounded p-6">
          <h3 className="text-gray-500">Total Employees</h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h3 className="text-gray-500">Pending Leaves</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h3 className="text-gray-500">Today's Attendance</h3>
          <p className="text-3xl font-bold mt-2">110</p>
        </div>

      </div>

      <hr></hr>
      <div className="grid grid-cols-2 gap-6">
        <EmployeeChart/>
        <AttendanceChart/>
      </div>

    </div>
  );
}

export default Dashboard;