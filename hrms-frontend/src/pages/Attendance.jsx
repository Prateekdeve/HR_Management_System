import { useState } from "react";

function Attendance() {

  const [attendance, setAttendance] = useState("Not Marked");

  const markAttendance = () => {
    setAttendance("Present");
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Attendance
      </h1>

      <div className="bg-white shadow rounded p-6 w-96">

        <p className="mb-4">
          Today's Status:
          <span className="font-bold ml-2">
            {attendance}
          </span>
        </p>

        <button
          onClick={markAttendance}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Mark Attendance
        </button>

      </div>

    </div>
  );
}

export default Attendance;