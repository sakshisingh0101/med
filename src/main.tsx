import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "@/context/AuthContext";
import { MedicineProvider } from "./context/MedicineContext";

createRoot(document.getElementById("root")!).render(
 
    <AuthProvider>
      <MedicineProvider> {/* ✅ wrap with MedicineProvider */}
        <App />
        </MedicineProvider>
      
    </AuthProvider>
  
);
