import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, FileText, Clock, AlertTriangle, TrendingUp, CheckCircle, Calendar, DollarSign, Settings, BarChart3, UserCog } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Manage Users",
      description: "Add, edit, and manage user accounts",
      icon: Users,
      path: "/admin/manage-users",
      color: "bg-blue-600",
      stats: "2,847 users"
    },
    {
      title: "View Analytics",
      description: "Reports and system analytics",
      icon: TrendingUp,
      path: "/admin/analytics",
      color: "bg-green-600",
      stats: "Live data"
    },
    {
      title: "Directory Management",
      description: "Manage contact directory",
      icon: UserCog,
      path: "/admin/directory",
      color: "bg-purple-600",
      stats: "50+ contacts"
    },
    {
      title: "Support Tickets",
      description: "Review and respond to tickets",
      icon: AlertTriangle,
      path: "/admin/support-tickets",
      color: "bg-orange-600",
      stats: "15 pending"
    },
    {
      title: "Generate Report",
      description: "Export system reports",
      icon: FileText,
      path: "/admin/analytics",
      color: "bg-indigo-600",
      stats: "Monthly reports"
    },
    {
      title: "System Settings",
      description: "Configure system preferences",
      icon: Settings,
      path: "/admin/settings",
      color: "bg-gray-600",
      stats: "Admin access"
    }
  ];

  const kpis = [
    { title: "Active Citizens", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Pending Requests", value: "127", change: "-8%", icon: FileText, color: "text-yellow-600" },
    { title: "Completed Today", value: "45", change: "+15%", icon: CheckCircle, color: "text-green-600" },
    { title: "Avg Response Time", value: "2.1h", change: "-5%", icon: Clock, color: "text-purple-600" }
  ];

  const pendingApprovals = [
    { 
      id: "BR-2024-0127", 
      type: "Barangay Certificate", 
      requester: "Maria Santos", 
      priority: "high", 
      date: "2024-06-26",
      purpose: "Employment - Overseas",
      contactInfo: "maria.santos@email.com"
    },
    { 
      id: "BR-2024-0128", 
      type: "Business Permit", 
      requester: "Jose Cruz", 
      priority: "medium", 
      date: "2024-06-25",
      purpose: "New Sari-sari Store",
      contactInfo: "jose.cruz@email.com"
    },
    { 
      id: "BR-2024-0129", 
      type: "Certificate of Indigency", 
      requester: "Ana Reyes", 
      priority: "high", 
      date: "2024-06-24",
      purpose: "Medical Assistance",
      contactInfo: "ana.reyes@email.com"
    },
    { 
      id: "BR-2024-0130", 
      type: "Barangay Clearance", 
      requester: "Roberto Gonzales", 
      priority: "low", 
      date: "2024-06-24",
      purpose: "Police Requirements",
      contactInfo: "roberto.g@email.com"
    },
    { 
      id: "BR-2024-0131", 
      type: "Business Permit Renewal", 
      requester: "Carmen Dela Cruz", 
      priority: "medium", 
      date: "2024-06-23",
      purpose: "Hardware Store",
      contactInfo: "carmen.dc@email.com"
    }
  ];

  const alerts = [
    { 
      type: "System", 
      message: "Server maintenance scheduled for tonight at 11:00 PM", 
      severity: "warning",
      time: "2 hours ago"
    },
    { 
      type: "Security", 
      message: "Unusual login activity detected from multiple locations", 
      severity: "error",
      time: "30 minutes ago"
    },
    { 
      type: "Service", 
      message: "Document processing queue approaching capacity (85%)", 
      severity: "warning",
      time: "1 hour ago"
    },
    { 
      type: "Payment", 
      message: "15 payment confirmations pending verification", 
      severity: "info",
      time: "45 minutes ago"
    },
    { 
      type: "Backup", 
      message: "Daily system backup completed successfully", 
      severity: "success",
      time: "3 hours ago"
    }
  ];

  const recentActivities = [
    {
      action: "Document Approved",
      details: "Barangay Certificate for Maria Santos",
      user: "Admin Juan",
      timestamp: "10 minutes ago"
    },
    {
      action: "User Registered",
      details: "New citizen registration: Pedro Martins",
      user: "System",
      timestamp: "25 minutes ago"
    },
    {
      action: "Payment Received",
      details: "Business permit fee - ₱500",
      user: "System",
      timestamp: "1 hour ago"
    },
    {
      action: "Document Rejected",
      details: "Incomplete requirements - ID not clear",
      user: "Admin Rosa",
      timestamp: "2 hours ago"
    }
  ];

  const monthlyStats = [
    { label: "Documents Processed", value: "1,234", color: "bg-blue-100 text-blue-800" },
    { label: "Revenue Generated", value: "₱45,670", color: "bg-green-100 text-green-800" },
    { label: "New Registrations", value: "89", color: "bg-purple-100 text-purple-800" },
    { label: "Complaints Resolved", value: "23", color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-blue-100 mt-2">Barangay San Isidro Digital Service Management</p>
          <div className="mt-4 flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Today: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                      <p className="text-3xl font-bold mt-1">{kpi.value}</p>
                      <p className={`text-sm mt-1 ${kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.change} from last month
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <Icon className={`h-8 w-8 ${kpi.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Monthly Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
            <CardDescription>Key performance indicators for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {monthlyStats.map((stat, index) => (
                <div key={index} className={`p-4 rounded-lg ${stat.color}`}>
                  <p className="text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Approvals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Pending Approvals
                </div>
                <Badge variant="secondary">{pendingApprovals.length}</Badge>
              </CardTitle>
              <CardDescription>Documents waiting for your review</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="max-h-96 overflow-y-auto">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <p className="font-medium">{item.type}</p>
                          <Badge 
                            variant={
                              item.priority === "high" ? "destructive" : 
                              item.priority === "medium" ? "default" : "secondary"
                            }
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><strong>Requester:</strong> {item.requester}</p>
                          <p><strong>Purpose:</strong> {item.purpose}</p>
                          <p><strong>Contact:</strong> {item.contactInfo}</p>
                          <p><strong>Submitted:</strong> {item.date}</p>
                          <p><strong>ID:</strong> #{item.id}</p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                View All Pending ({pendingApprovals.length + 15} total)
              </Button>
            </CardContent>
          </Card>

          {/* Live Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  System Alerts
                </div>
                <Badge variant="secondary">{alerts.length}</Badge>
              </CardTitle>
              <CardDescription>Important notifications and system status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="max-h-96 overflow-y-auto">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-1 rounded-full ${
                      alert.severity === "error" ? "bg-red-100" :
                      alert.severity === "warning" ? "bg-yellow-100" : 
                      alert.severity === "success" ? "bg-green-100" : "bg-blue-100"
                    }`}>
                      <AlertTriangle className={`h-4 w-4 ${
                        alert.severity === "error" ? "text-red-600" :
                        alert.severity === "warning" ? "text-yellow-600" : 
                        alert.severity === "success" ? "text-green-600" : "text-blue-600"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{alert.type}</p>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest system activities and user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.details}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
                <Users className="h-6 w-6" />
                <span className="text-sm">Manage Users</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span className="text-sm">Generate Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">View Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-sm">Revenue Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
