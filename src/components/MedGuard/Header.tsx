// import { useLocation, useNavigate } from "react-router-dom";
// import { Shield, LogOut } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isLoggedIn = location.pathname === "/dashboard" || location.pathname === "/result";

//   const handleLogout = () => {
//     console.log("User logged out");
//     navigate("/");
//   };

//   return (
//     <header className="w-full py-6 px-6">
//       <div className="max-w-4xl mx-auto flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
//             <Shield className="w-6 h-6 text-primary" />
//           </div>
//           <span className="font-display text-xl font-bold text-foreground">
//             MedGuard
//           </span>
//         </div>

//         {isLoggedIn && (
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleLogout}
//             className="text-muted-foreground hover:text-foreground"
//           >
//             <LogOut className="w-4 h-4 mr-2" />
//             Logout
//           </Button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useNavigate } from "react-router-dom";
import { Shield, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout , user } = useAuth();
  console.log("HEADER auth:", { user , isAuthenticated });

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="w-full py-6 px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            MedGuard
          </span>
        </div>

        {isAuthenticated && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
