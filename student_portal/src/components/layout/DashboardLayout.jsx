import useOnline from "../../hooks/useOnline";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const isOnline = useOnline();
  return (
    <main className="w-full max-w-7xl mx-auto">
      <Navbar />
      {isOnline ? (
        children
      ) : (
        <main className="w-full max-w-7xl mx-auto flex items-center justify-center min-h-screen">
          <h1 className="secondary-text">No internet connection.</h1>
        </main>
      )}
      {/* {children} */}
    </main>
  );
};

export default DashboardLayout;
