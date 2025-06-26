
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, FileText, Clock, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";

const AdminDashboard = () => {
  const kpis = [
    { title: "Active Users", value: "1,234", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Pending Requests", value: "45", change: "-8%", icon: FileText, color: "text-yellow-600" },
    { title: "Completed Today", value: "23", change: "+15%", icon: CheckCircle, color: "text-green-600" },
    { title: "Response Time", value: "2.4h", change: "-5%", icon: Clock, color: "text-purple-600" }
  ];

  const pendingApprovals = [
    { id: "BR-123", type: "Barangay Certificate", requester: "Maria Santos", priority: "high", date: "2024-06-26" },
    { id: "BR-124", type: "Business Permit", requester: "Jose Cruz", priority: "medium", date: "2024-06-25" },
    { id: "BR-125", type: "Clearance", requester: "Ana Reyes", priority: "low", date: "2024-06-24" }
  ];

  const alerts = [
    { type: "System", message: "Server maintenance scheduled for tonight", severity: "warning" },
    { type: "Security", message: "New user registration spike detected", severity: "info" },
    { type: "Service", message: "Document processing queue is full", severity: "error" }
  ];

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Overview of barangay services and operations</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                      <p className="text-2xl font-bold">{kpi.value}</p>
                      <p className={`text-sm ${kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.change} from last month
                      </p>
                    </div>
                    <Icon className={`h-8 w-8 ${kpi.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Approvals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Pending Approvals
              </CardTitle>
              <CardDescription>Documents waiting for your review</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingApprovals.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{item.type}</p>
                    <p className="text-sm text-gray-600">{item.requester} • #{item.id}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={item.priority === "high" ? "destructive" : item.priority === "medium" ? "default" : "secondary"}
                    >
                      {item.priority}
                    </Badge>
                    <Button size="sm">Review</Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Pending
              </Button>
            </CardContent>
          </Card>

          {/* Live Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                System Alerts
              </CardTitle>
              <CardDescription>Important notifications and warnings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`p-1 rounded-full ${
                    alert.severity === "error" ? "bg-red-100" :
                    alert.severity === "warning" ? "bg-yellow-100" : "bg-blue-100"
                  }`}>
                    <AlertTriangle className={`h-4 w-4 ${
                      alert.severity === "error" ? "text-red-600" :
                      alert.severity === "warning" ? "text-yellow-600" : "text-blue-600"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{alert.type}</p>
                    <p className="text-sm text-gray-600">{alert.message}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2">
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
                <AlertTriangle className="h-6 w-6" />
                <span className="text-sm">System Health</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
