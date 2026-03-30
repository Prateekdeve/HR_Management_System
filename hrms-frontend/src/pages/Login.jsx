import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name: "Prateek",
      role: "Admin"
    });

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          HRMS Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-6 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;