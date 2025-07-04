import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, FileText, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Analytics = () => {
  const [timeFilter, setTimeFilter] = useState("This Month");

  const monthlyData = [
    { month: "Jan", documents: 120, complaints: 15, services: 45, users: 50 },
    { month: "Feb", documents: 135, complaints: 12, services: 52, users: 65 },
    { month: "Mar", documents: 148, complaints: 18, services: 48, users: 78 },
    { month: "Apr", documents: 162, complaints: 21, services: 61, users: 92 },
    { month: "May", documents: 175, complaints: 19, services: 58, users: 108 },
    { month: "Jun", documents: 189, complaints: 14, services: 67, users: 125 }
  ];

  const serviceDistribution = [
    { name: "Barangay Clearance", value: 35, color: "#0088FE" },
    { name: "Certificate of Residency", value: 28, color: "#00C49F" },
    { name: "Business Permit", value: 20, color: "#FFBB28" },
    { name: "Indigency Certificate", value: 12, color: "#FF8042" },
    { name: "Others", value: 5, color: "#8884D8" }
  ];

  const complaintCategories = [
    { category: "Noise Complaints", count: 45, resolved: 38 },
    { category: "Infrastructure", count: 32, resolved: 28 },
    { category: "Public Safety", count: 28, resolved: 25 },
    { category: "Sanitation", count: 22, resolved: 20 },
    { category: "Traffic", count: 18, resolved: 15 },
    { category: "Others", count: 15, resolved: 12 }
  ];

  const keyMetrics = [
    {
      title: "Total Requests",
      value: "2,847",
      change: "+12.5%",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Active Users",
      value: "1,156",
      change: "+8.2%",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Avg. Response Time",
      value: "2.3 days",
      change: "-15%",
      icon: Calendar,
      color: "text-purple-600"
    },
    {
      title: "Satisfaction Rate",
      value: "94.2%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const loginHistory = [
    { user: "Maria Santos", email: "maria.santos@email.com", date: "2025-07-01", device: "Mobile", status: "Success" },
    { user: "Juan Dela Cruz", email: "juan.delacruz@email.com", date: "2025-07-01", device: "Desktop", status: "Success" },
    { user: "Ana Rodriguez", email: "ana.rodriguez@barangay.gov.ph", date: "2025-06-30", device: "Mobile", status: "Failed" },
    { user: "Carlos Mendoza", email: "carlos.mendoza@email.com", date: "2025-06-29", device: "Desktop", status: "Success" }
  ];

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-600">System analytics and reporting</p>
          </div>
          <div className="flex gap-2 items-center">
            {/* Time Filter */}
            <select className="border rounded px-2 py-1" value={timeFilter} onChange={e => setTimeFilter(e.target.value)}>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                      <p className="text-sm text-green-600">{metric.change}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${metric.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Trends</CardTitle>
              <CardDescription>Service requests and user activity over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="documents" stroke="#8884d8" name="Documents" />
                  <Line type="monotone" dataKey="services" stroke="#82ca9d" name="Services" />
                  <Line type="monotone" dataKey="users" stroke="#ffc658" name="New Users" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Heatmap Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Heatmap</CardTitle>
              <CardDescription>Visualize peak activity periods (mock)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[300px] bg-gray-100 rounded flex items-center justify-center text-gray-400">
                [Heatmap Chart Placeholder]
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Request Volume */}
          <Card>
            <CardHeader>
              <CardTitle>Request Volume by Type</CardTitle>
              <CardDescription>Monthly comparison of different request types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="documents" fill="#8884d8" name="Documents" />
                  <Bar dataKey="complaints" fill="#82ca9d" name="Complaints" />
                  <Bar dataKey="services" fill="#ffc658" name="Services" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Complaint Resolution */}
          <Card>
            <CardHeader>
              <CardTitle>Complaint Categories</CardTitle>
              <CardDescription>Complaints received vs resolved by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complaintCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{category.category}</span>
                      <span className="text-gray-600">{category.resolved}/{category.count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(category.resolved / category.count) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {Math.round((category.resolved / category.count) * 100)}% resolved
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>Key performance indicators for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">95.2%</div>
                <div className="text-sm text-gray-600">Request Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1.8 days</div>
                <div className="text-sm text-gray-600">Average Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.6/5</div>
                <div className="text-sm text-gray-600">Average User Rating</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Login History Table */}
        <Card>
          <CardHeader>
            <CardTitle>Login History</CardTitle>
            <CardDescription>Recent user login activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">User</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Device</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loginHistory.map((log, i) => (
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2">{log.user}</td>
                      <td className="px-4 py-2">{log.email}</td>
                      <td className="px-4 py-2">{log.date}</td>
                      <td className="px-4 py-2">{log.device}</td>
                      <td className="px-4 py-2">
                        <span className={
                          log.status === "Success"
                            ? "text-green-600 font-medium"
                            : "text-red-600 font-medium"
                        }>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
