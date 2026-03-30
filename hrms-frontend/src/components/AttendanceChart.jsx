import {LineChart ,Line ,XAxis ,YAxis ,Tooltip ,CartesianGrid} from "recharts";

const data =[
  {day:"Mon",attendance:110},
  {day:"Mon",attendance:110},
  {day:"Mon",attendance:110},
  {day:"Mon",attendance:110},
  {day:"Mon",attendance:110},
  
];

function AttendanceChart(){
  return(
    <div className="bg-whiteshadowroundedp-6">
      <h2 className="text-lg font-semibold mb-4">Weekly Attendance</h2>
      <LineChart width ={400} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="day"/>
        <YAxis/>
        <Tooltip/>
        <Line type ="monotone"
        dataKey ="attendance"
        stroke ="#3b82f6"
        strokeWidth={3}
        />
      </LineChart>
    </div>

  );
}
export default AttendanceChart;