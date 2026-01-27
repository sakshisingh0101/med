// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { X, Mail, Lock, User, Eye, EyeOff, CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useAuth } from "@/context/AuthContext";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// interface AuthModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   mode: "login" | "signup";
//   onModeChange: (mode: "login" | "signup") => void;
// }

// const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Log form data to console (as requested - visual only)
//     console.log(`${mode === "signup" ? "Signup" : "Login"} form submitted:`, formData);

//     // Simulate API delay
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     setIsSubmitting(false);
//     setShowSuccess(true);

//     // Navigate to dashboard after success
//     setTimeout(() => {
//       setShowSuccess(false);
//       onClose();
//       navigate("/dashboard");
//     }, 1500);
//   };

//   const resetForm = () => {
//     setFormData({ name: "", email: "", password: "", confirmPassword: "" });
//     setShowSuccess(false);
//   };

//   const switchMode = () => {
//     resetForm();
//     onModeChange(mode === "login" ? "signup" : "login");
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-md p-0 overflow-hidden">
//         {showSuccess ? (
//           <div className="p-8 text-center animate-scale-in">
//             <div className="w-16 h-16 rounded-full bg-safe/10 flex items-center justify-center mx-auto mb-4">
//               <CheckCircle className="w-8 h-8 text-safe" />
//             </div>
//             <h3 className="font-display text-xl font-semibold text-foreground">
//               {mode === "signup" ? "Account Created!" : "Welcome Back!"}
//             </h3>
//             <p className="text-muted-foreground mt-2">
//               Redirecting to your dashboard...
//             </p>
//           </div>
//         ) : (
//           <>
//             <DialogHeader className="p-6 pb-0">
//               <DialogTitle className="font-display text-2xl text-center">
//                 {mode === "signup" ? "Create your account" : "Welcome back"}
//               </DialogTitle>
//               <p className="text-muted-foreground text-center mt-2">
//                 {mode === "signup"
//                   ? "Start checking your medicines safely"
//                   : "Login to continue checking your medicines"}
//               </p>
//             </DialogHeader>

//             <form onSubmit={handleSubmit} className="p-6 space-y-5">
//               {mode === "signup" && (
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-sm font-medium">
//                     Full Name
//                   </Label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                     <Input
//                       id="name"
//                       name="name"
//                       type="text"
//                       placeholder="Enter your full name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="pl-11 h-12 rounded-xl"
//                       required
//                     />
//                   </div>
//                 </div>
//               )}

//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-sm font-medium">
//                   Email Address
//                 </Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="pl-11 h-12 rounded-xl"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-sm font-medium">
//                   Password
//                 </Label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <Input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="pl-11 pr-11 h-12 rounded-xl"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-5 h-5" />
//                     ) : (
//                       <Eye className="w-5 h-5" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {mode === "signup" && (
//                 <div className="space-y-2">
//                   <Label htmlFor="confirmPassword" className="text-sm font-medium">
//                     Confirm Password
//                   </Label>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                     <Input
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Confirm your password"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange}
//                       className="pl-11 h-12 rounded-xl"
//                       required
//                     />
//                   </div>
//                 </div>
//               )}

//               <Button
//                 type="submit"
//                 variant="scan"
//                 size="lg"
//                 className="w-full mt-6"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting
//                   ? "Please wait..."
//                   : mode === "signup"
//                   ? "Create Account"
//                   : "Login"}
//               </Button>

//               <div className="text-center pt-4 border-t border-border">
//                 <p className="text-muted-foreground">
//                   {mode === "signup"
//                     ? "Already have an account?"
//                     : "Don't have an account?"}{" "}
//                   <button
//                     type="button"
//                     onClick={switchMode}
//                     className="text-primary font-medium hover:underline"
//                   >
//                     {mode === "signup" ? "Login" : "Sign up"}
//                   </button>
//                 </p>
//               </div>
//             </form>
//           </>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AuthModal;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Mail, Lock, User, Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
  onModeChange: (mode: "login" | "signup") => void;
}

const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
  const navigate = useNavigate();
  const { login, register} = useAuth(); // ✅ ACTUALLY USED NOW

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ REAL AUTH HANDLER (NO STRUCTURE CHANGE)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (mode === "login") {
        await login(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Passwords do not match");
        }
       await register({
  fullName: formData.name,
  email: formData.email,
  password: formData.password,
});
      }

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        navigate("/dashboard");
      }, 1200);
    } catch (err: any) {
      console.error(err.message);
      // later: toast.error(err.message)
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setShowSuccess(false);
  };

  const switchMode = () => {
    resetForm();
    onModeChange(mode === "login" ? "signup" : "login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        {showSuccess ? (
          <div className="p-8 text-center animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-safe/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-safe" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {mode === "signup" ? "Account Created!" : "Welcome Back!"}
            </h3>
            <p className="text-muted-foreground mt-2">
              Redirecting to your dashboard...
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="font-display text-2xl text-center">
                {mode === "signup" ? "Create your account" : "Welcome back"}
              </DialogTitle>
              <p className="text-muted-foreground text-center mt-2">
                {mode === "signup"
                  ? "Start checking your medicines safely"
                  : "Login to continue checking your medicines"}
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
  {mode === "signup" && (
    <div className="space-y-2">
      <Label htmlFor="name">Full Name</Label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          className="pl-9"
          required
        />
      </div>
    </div>
  )}

  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleInputChange}
        className="pl-9"
        required
      />
    </div>
  </div>

  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        value={formData.password}
        onChange={handleInputChange}
        className="pl-9 pr-9"
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  </div>

  {mode === "signup" && (
    <div className="space-y-2">
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="pl-9"
          required
        />
      </div>
    </div>
  )}

  <Button
    type="submit"
    className="w-full"
    disabled={isSubmitting}
  >
    {isSubmitting
      ? "Please wait..."
      : mode === "signup"
      ? "Create Account"
      : "Login"}
  </Button>

  <p className="text-sm text-center text-muted-foreground">
    {mode === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
    <button
      type="button"
      onClick={switchMode}
      className="text-primary font-medium hover:underline"
    >
      {mode === "signup" ? "Login" : "Sign up"}
    </button>
  </p>
</form>

          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
