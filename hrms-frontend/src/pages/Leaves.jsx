import { useState } from "react";

function Leave() {

  const [leaves, setLeaves] = useState([
    { id: 1, employee: "Amit Sharma", type: "Sick Leave", status: "Pending" },
    { id: 2, employee: "Riya Verma", type: "Casual Leave", status: "Approved" }
  ]);

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Leave Management
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Employee</th>
            <th className="p-3 text-left">Leave Type</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>

          {leaves.map(leave => (
            <tr key={leave.id} className="border-t">

              <td className="p-3">{leave.employee}</td>
              <td className="p-3">{leave.type}</td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded text-white text-sm ${
                    leave.status === "Approved"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {leave.status}
                </span>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Leave;