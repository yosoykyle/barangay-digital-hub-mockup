import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, FileText, Calendar, Users, HelpCircle, Settings, BarChart3, UserCog, Menu, Bell, LogOut, Bot } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "citizen" | "admin";
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const citizenMenuItems = [
    { icon: Home, label: "Dashboard", path: "/citizen/dashboard" },
    { icon: FileText, label: "Request Document", path: "/citizen/request-document" },
    { icon: FileText, label: "File Complaint", path: "/citizen/file-complaint" },
    { icon: Calendar, label: "Book Service", path: "/citizen/schedule-service" },
    { icon: Users, label: "Directory", path: "/citizen/contact-directory" },
    { icon: Bot, label: "Chatbot", path: "/citizen/chatbot" },
    { icon: HelpCircle, label: "Help & Support", path: "/citizen/help-support" },
    { icon: Settings, label: "Settings", path: "/citizen/settings" },
  ];

  const adminMenuItems = [
    { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: UserCog, label: "Manage Users", path: "/admin/manage-users" },
    { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
    { icon: Users, label: "Directory", path: "/admin/directory" },
    { icon: HelpCircle, label: "Support Tickets", path: "/admin/support-tickets" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  const menuItems = userType === "citizen" ? citizenMenuItems : adminMenuItems;

  const Sidebar = ({ className = "" }: { className?: string }) => (
    <div className={`bg-blue-900 text-white p-4 h-full ${className}`}>
      <div className="mb-8">
        <h2 className="text-xl font-bold">Barangay Portal</h2>
        <p className="text-blue-200 text-sm capitalize">{userType} Dashboard</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false);
              }}
              variant={isActive ? "secondary" : "ghost"}
              className={`w-full justify-start text-left ${
                isActive 
                  ? "bg-blue-700 text-white hover:bg-blue-600" 
                  : "text-blue-100 hover:bg-blue-800 hover:text-white"
              }`}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 fixed h-full">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/")}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
