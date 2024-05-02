const Dashboard = ({ token }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center dark:bg-gray-700">
      <div className="px-20">
        <h1 className="text-3xl font-medium text-center text-gray-900 dark:text-white">
          Welcome to the Dashboard
        </h1>
        <div className="mt-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            You are logged in with token: {token}
          </p>
          <button
            className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 focus:outline-none"
            onClick={() => {
              // Remove token from local storage or state
              localStorage.removeItem("token");
              // Redirect user to login page
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
