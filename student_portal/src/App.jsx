import AppRoutes from "./routes/AppRoutes";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider
        autoHideDuration={2500}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
