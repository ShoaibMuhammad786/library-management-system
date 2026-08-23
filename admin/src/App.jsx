import AppRoutes from "./routes/AppRoutes";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        maxSnack={2}
        autoHideDuration={3500}
      />
      <AppRoutes />
    </>
  );
}

export default App;
