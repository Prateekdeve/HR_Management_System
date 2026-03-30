import {PieChart,Pie ,Cell ,Tooltip ,Legend } from "recharts";

const data = [
  {name:"IT" ,value:40},
  {name:"HR",value:15},
  {name:"Finance",value:20},
  {name:"Marketing ", value:25}
];

const COLORS =["#3b82f6","#22c55e","#f59e0b","ef444"];

function EmployeeChart(){
  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-lg font-semibold mb-4">
        Employees by Department
      </h2>

      <PieChart width ={350} height={250} >
        <Pie data ={data} cx ="50%" cy ="50%" outerRadius={80} dataKey ="value" label>{data.map((entry ,index)=>
          (<Cell key ={index} fill ={COLORS[index]}/>

        ))}
        </Pie>
        <Tooltip/>
        <Legend/>
      </PieChart>
    </div>
  )
}

export default EmployeeChart;