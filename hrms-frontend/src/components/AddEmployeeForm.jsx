import { useState } from "react";

function AddEmployeeForm({addEmployee}){
  const [form ,setForm] = useState({
    name:" ",
    department:" ",
    role:" ",
    email:" "
  })

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    addEmployee({
      id:Date.now(),
      ...form
    });

    setForm({
      name: " ",
      department:" ",
      role: " ",
      email:" ",
    });
  };

  return (
    <form onSubmit = {handleSubmit} style={styles.form}>
      <input name ="name"
      placeholder= "Employee Name" value = {form.name} onChange={handleChange}/>
      <input name ="role"
      placeholder ="Role"
      value ={form.role}
      onChange={handleChange}
      />

      <input name = "email"
      placeholder = "Enter Email"
      value={form.email}
      onChange={handleChange} />

      <button type ="submit">Add Employee</button>
    </form>
  );
}

const styles ={
  form:{
    display: "flex",
    gap:"10px",
    marginTop:"20px"
  }
}

export default AddEmployeeForm;