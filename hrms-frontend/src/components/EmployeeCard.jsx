
function EmployeeCard({employee}){
  return (
    <div style ={styles.card}>
      <h3>{employee.name}</h3>
      <p>Department: {employee.department}</p>
      <p>Role: {employee.role}</p>
    </div>
  );
}

const styles ={
  card:{
    border:"1px solid #ddd",
    padding:"15px",
    borderRadius:"8px",
    marginBottom:"10px"
  }
};

export default EmployeeCard;