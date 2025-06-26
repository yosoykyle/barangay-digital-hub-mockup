
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Users, Bell, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CitizenDashboard = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Request Document",
      description: "Barangay Certificate, Clearance, etc.",
      icon: FileText,
      path: "/citizen/request-document",
      color: "bg-blue-600"
    },
    {
      title: "Book Service",
      description: "Schedule appointments",
      icon: Calendar,
      path: "/citizen/schedule-service",
      color: "bg-green-600"
    },
    {
      title: "Contact Directory",
      description: "Find officials and services",
      icon: Users,
      path: "/citizen/contact-directory",
      color: "bg-purple-600"
    }
  ];

  const recentRequests = [
    { id: "BR-001", type: "Barangay Certificate", status: "Processing", date: "2024-06-20" },
    { id: "BR-002", type: "Clearance", status: "Ready", date: "2024-06-18" },
    { id: "BR-003", type: "Indigency Certificate", status: "Pending", date: "2024-06-15" }
  ];

  const announcements = [
    {
      title: "Community Meeting - July 15",
      content: "Monthly barangay assembly will be held at the covered court.",
      date: "June 25, 2024",
      priority: "high"
    },
    {
      title: "New Online Services Available",
      content: "You can now apply for business permits online.",
      date: "June 22, 2024",
      priority: "medium"
    }
  ];

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Good morning, Juan!</h1>
          <p className="text-gray-600">Welcome to your barangay portal</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${action.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                      <Button 
                        className="mt-2" 
                        size="sm"
                        onClick={() => navigate(action.path)}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Recent Requests
              </CardTitle>
              <CardDescription>Track your document requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{request.type}</p>
                    <p className="text-sm text-gray-600">#{request.id} • {request.date}</p>
                  </div>
                  <Badge 
                    variant={request.status === "Ready" ? "default" : "secondary"}
                    className={
                      request.status === "Ready" ? "bg-green-600" :
                      request.status === "Processing" ? "bg-yellow-600" : "bg-gray-600"
                    }
                  >
                    {request.status === "Ready" && <CheckCircle className="mr-1 h-3 w-3" />}
                    {request.status === "Processing" && <Clock className="mr-1 h-3 w-3" />}
                    {request.status}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Requests
              </Button>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Announcements
              </CardTitle>
              <CardDescription>Latest updates from your barangay</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{announcement.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                      <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
                    </div>
                    {announcement.priority === "high" && (
                      <Badge variant="destructive" className="ml-2">Important</Badge>
                    )}
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Announcements
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CitizenDashboard;
