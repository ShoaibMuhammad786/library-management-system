import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <Navbar />
      {children}
    </main>
  );
};

export default DashboardLayout;
