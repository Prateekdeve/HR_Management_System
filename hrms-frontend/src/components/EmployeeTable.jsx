// Employee Table UI.

function EmployeeTable({employees}){
  return (
    <table style ={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>E-mail</th>
        </tr>
      </thead>

      <tbody>
        {employees.map(emp =>(
          <tr key ={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles ={
  table: {
    width:"100%",
    borderCollapse:"collapse",
    marginTop:"20px"
  }
};

export default EmployeeTable;