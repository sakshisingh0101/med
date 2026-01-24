import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-6">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <span className="font-display text-xl font-bold text-foreground">
          MedGuard
        </span>
      </div>
    </header>
  );
};

export default Header;
