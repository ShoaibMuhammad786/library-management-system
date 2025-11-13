import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
