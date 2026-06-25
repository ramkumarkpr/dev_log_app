import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <form className="w-full max-w-sm bg-white px-6 py-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            <Link to={"/dashboard"}>Login</Link>
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <span className="hover:underline cursor-pointer text-blue-500">
              register
            </span>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
