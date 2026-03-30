function Employees() {

  const employees = [
    { id: 1, name: "Amit Sharma", department: "IT" },
    { id: 2, name: "Riya Verma", department: "HR" },
    { id: 3, name: "Rahul Mehta", department: "Finance" }
  ];

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Employees
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Department</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} className="border-t">

              <td className="p-3">{emp.id}</td>
              <td className="p-3">{emp.name}</td>
              <td className="p-3">{emp.department}</td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Employees;