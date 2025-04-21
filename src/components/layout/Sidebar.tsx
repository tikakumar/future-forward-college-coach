
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  BookOpen, 
  CheckSquare, 
  FileText, 
  Home, 
  ListChecks, 
  Search, 
  User,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { 
      label: "Dashboard", 
      icon: <Home className="h-5 w-5" />, 
      path: "/dashboard" 
    },
    { 
      label: "College Matching", 
      icon: <Search className="h-5 w-5" />, 
      path: "/matching" 
    },
    { 
      label: "Essay Support", 
      icon: <FileText className="h-5 w-5" />, 
      path: "/essay" 
    },
    { 
      label: "Application Review", 
      icon: <CheckSquare className="h-5 w-5" />, 
      path: "/review" 
    },
    { 
      label: "Activities Tracker", 
      icon: <ListChecks className="h-5 w-5" />, 
      path: "/activities" 
    },
    { 
      label: "College Research", 
      icon: <BookOpen className="h-5 w-5" />, 
      path: "/research" 
    },
    { 
      label: "Analytics", 
      icon: <BarChart className="h-5 w-5" />, 
      path: "/analytics" 
    },
    { 
      label: "Profile", 
      icon: <User className="h-5 w-5" />, 
      path: "/profile" 
    },
  ];

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 flex h-screen w-72 flex-col bg-sidebar border-r border-r-sidebar-border transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    )}>
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-6">
        <h2 className="text-xl font-bold text-sidebar-foreground">College Coach</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-sidebar-foreground"
          onClick={toggleSidebar}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                location.pathname === item.path
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-md bg-sidebar-accent/20 p-3">
          <h3 className="font-medium text-sidebar-foreground">Need help?</h3>
          <p className="mt-1 text-xs text-sidebar-foreground/70">
            Contact your counselor or access our resources for guidance.
          </p>
          <Button className="mt-3 w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
            Get Support
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
