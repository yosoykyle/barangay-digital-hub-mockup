import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Users, Bell, Clock, CheckCircle, AlertCircle, Settings, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CitizenDashboard = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Request Document",
      description: "Barangay Certificate, Clearance, etc.",
      icon: FileText,
      path: "/citizen/request-document",
      color: "bg-blue-600",
      stats: "4 active requests"
    },
    {
      title: "Book Service",
      description: "Schedule appointments",
      icon: Calendar,
      path: "/citizen/schedule-service",
      color: "bg-green-600",
      stats: "Next: July 5"
    },
    {
      title: "Contact Directory",
      description: "Find officials and services",
      icon: Users,
      path: "/citizen/contact-directory",
      color: "bg-purple-600",
      stats: "50+ contacts"
    },
    {
      title: "File Complaint",
      description: "Report issues or concerns",
      icon: AlertCircle,
      path: "/citizen/file-complaint",
      color: "bg-orange-600",
      stats: "Quick response"
    },
    {
      title: "Help & Support",
      description: "Get assistance and guides",
      icon: HelpCircle,
      path: "/citizen/help-support",
      color: "bg-indigo-600",
      stats: "24/7 support"
    },
    {
      title: "Settings",
      description: "Manage your account",
      icon: Settings,
      path: "/citizen/settings",
      color: "bg-gray-600",
      stats: "Profile & preferences"
    }
  ];

  const recentRequests = [
    { 
      id: "BR-2024-001", 
      type: "Barangay Certificate", 
      status: "Processing", 
      date: "2024-06-20",
      purpose: "Employment",
      estimatedCompletion: "2024-06-25"
    },
    { 
      id: "BR-2024-002", 
      type: "Barangay Clearance", 
      status: "Ready for Pickup", 
      date: "2024-06-18",
      purpose: "Business Permit",
      estimatedCompletion: "2024-06-22"
    },
    { 
      id: "BR-2024-003", 
      type: "Certificate of Indigency", 
      status: "Under Review", 
      date: "2024-06-15",
      purpose: "Medical Assistance",
      estimatedCompletion: "2024-06-28"
    },
    { 
      id: "BR-2024-004", 
      type: "Business Permit Renewal", 
      status: "Pending Payment", 
      date: "2024-06-10",
      purpose: "Sari-sari Store",
      estimatedCompletion: "2024-06-30"
    }
  ];

  const announcements = [
    {
      title: "Community Clean-Up Drive - July 15",
      content: "Join us for the monthly community clean-up at the barangay plaza. Prizes and refreshments will be provided.",
      date: "June 25, 2024",
      priority: "high",
      category: "Community Event"
    },
    {
      title: "New Online Business Permit System",
      content: "You can now apply for business permits online through our digital portal. Visit the Request Document section to get started.",
      date: "June 22, 2024",
      priority: "medium",
      category: "Service Update"
    },
    {
      title: "Barangay Health Center Schedule",
      content: "Free medical check-up every Tuesday and Thursday, 8:00 AM - 12:00 PM. Bring valid ID and barangay certificate.",
      date: "June 20, 2024",
      priority: "medium",
      category: "Health Services"
    },
    {
      title: "Scholarship Application Period",
      content: "Applications for the Barangay Educational Assistance Program are now open until July 31, 2024.",
      date: "June 18, 2024",
      priority: "high",
      category: "Education"
    }
  ];

  const upcomingEvents = [
    {
      title: "Barangay Assembly Meeting",
      date: "July 5, 2024",
      time: "7:00 PM",
      venue: "Covered Court"
    },
    {
      title: "Senior Citizens Monthly Gathering",
      date: "July 8, 2024",
      time: "2:00 PM",
      venue: "Barangay Hall"
    },
    {
      title: "Youth Leadership Training",
      date: "July 12, 2024",
      time: "9:00 AM",
      venue: "Multi-Purpose Hall"
    }
  ];

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
          <h1 className="text-3xl font-bold">Good morning, Juan dela Cruz!</h1>
          <p className="text-blue-100 mt-2">Welcome to Barangay San Isidro Digital Portal</p>
          <div className="mt-4 flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span>Verified Resident</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Member since 2023</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Requests</p>
                  <p className="text-2xl font-bold text-blue-600">4</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Ready for Pickup</p>
                  <p className="text-2xl font-bold text-green-600">1</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Upcoming Events</p>
                  <p className="text-2xl font-bold text-purple-600">3</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New Messages</p>
                  <p className="text-2xl font-bold text-orange-600">2</p>
                </div>
                <Bell className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions - Updated to be complete */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access all your barangay services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <div key={action.title} className="relative group">
                    <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-blue-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${action.color} group-hover:scale-110 transition-transform`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{action.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{action.description}</p>
                            <p className="text-xs text-gray-500 mb-3">{action.stats}</p>
                            <Button 
                              className="w-full" 
                              size="sm"
                              onClick={() => navigate(action.path)}
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Requests */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Recent Document Requests
              </CardTitle>
              <CardDescription>Track your document applications and their status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">{request.type}</p>
                        <Badge 
                          variant={
                            request.status === "Ready for Pickup" ? "default" :
                            request.status === "Processing" ? "secondary" :
                            request.status === "Pending Payment" ? "destructive" : "outline"
                          }
                          className={
                            request.status === "Ready for Pickup" ? "bg-green-600" :
                            request.status === "Processing" ? "bg-yellow-600" :
                            request.status === "Pending Payment" ? "bg-red-600" : "bg-gray-600"
                          }
                        >
                          {request.status === "Ready for Pickup" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {request.status === "Processing" && <Clock className="mr-1 h-3 w-3" />}
                          {request.status === "Pending Payment" && <AlertCircle className="mr-1 h-3 w-3" />}
                          {request.status}
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm text-gray-600 space-y-1">
                        <p>Request ID: #{request.id}</p>
                        <p>Purpose: {request.purpose}</p>
                        <p>Submitted: {request.date}</p>
                        <p>Expected completion: {request.estimatedCompletion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Requests
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Don't miss these community events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-sm">{event.title}</h4>
                  <div className="mt-2 text-xs text-gray-600 space-y-1">
                    <p className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {event.date} at {event.time}
                    </p>
                    <p>{event.venue}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Latest Announcements
            </CardTitle>
            <CardDescription>Important updates from your barangay</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-sm">{announcement.title}</h4>
                        {announcement.priority === "high" && (
                          <Badge variant="destructive" className="text-xs">Important</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{announcement.content}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{announcement.date}</span>
                        <Badge variant="outline" className="text-xs">{announcement.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Announcements
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CitizenDashboard;
