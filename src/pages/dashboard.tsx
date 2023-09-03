import React from "react";
import ContactsPage from "./contact";

const DashboardPage: React.FC = () => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
            Dashboard {""} <p className="text-sm">Welcome to the dashboard!</p>
          </h1>

          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <ContactsPage />
      </div>
    </>
  );
};

export default DashboardPage;
