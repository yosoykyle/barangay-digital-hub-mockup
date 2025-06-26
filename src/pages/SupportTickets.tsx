
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MessageSquare, Clock, CheckCircle, AlertCircle, User, Calendar } from "lucide-react";
import { useState } from "react";

const SupportTickets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const tickets = [
    {
      id: "TK-001",
      subject: "Cannot download barangay clearance",
      description: "User reports unable to download completed document",
      submitter: "Maria Santos",
      email: "maria.santos@email.com",
      category: "Technical",
      priority: "High",
      status: "Open",
      created: "2024-06-26 09:15 AM",
      lastUpdate: "2024-06-26 10:30 AM",
      assignee: "Admin Staff"
    },
    {
      id: "TK-002",
      subject: "Request status not updating",
      description: "Document request shows as pending for over a week",
      submitter: "Juan Dela Cruz",
      email: "juan.delacruz@email.com",
      category: "Process",
      priority: "Medium",
      status: "In Progress",
      created: "2024-06-25 02:30 PM",
      lastUpdate: "2024-06-26 08:45 AM",
      assignee: "Document Officer"
    },
    {
      id: "TK-003",
      subject: "Unable to reset password",
      description: "Password reset email not being received",
      submitter: "Ana Rodriguez",
      email: "ana.rodriguez@email.com",
      category: "Account",
      priority: "Medium",
      status: "Resolved",
      created: "2024-06-24 11:20 AM",
      lastUpdate: "2024-06-25 09:15 AM",
      assignee: "IT Support"
    },
    {
      id: "TK-004",
      subject: "Complaint form not submitting",
      description: "Error message appears when trying to submit complaint",
      submitter: "Carlos Mendoza",
      email: "carlos.mendoza@email.com",
      category: "Technical",
      priority: "High",
      status: "Open",
      created: "2024-06-26 01:45 PM",
      lastUpdate: "2024-06-26 01:45 PM",
      assignee: "Unassigned"
    },
    {
      id: "TK-005",
      subject: "Incorrect contact information in directory",
      description: "Phone number for health officer is outdated",
      submitter: "Rosa Fernandez",
      email: "rosa.fernandez@email.com",
      category: "Content",
      priority: "Low",
      status: "In Progress",
      created: "2024-06-25 04:20 PM",
      lastUpdate: "2024-06-26 11:00 AM",
      assignee: "Content Manager"
    }
  ];

  const ticketStats = [
    { label: "Total Tickets", value: "127", icon: MessageSquare, color: "text-blue-600" },
    { label: "Open", value: "23", icon: AlertCircle, color: "text-red-600" },
    { label: "In Progress", value: "18", icon: Clock, color: "text-yellow-600" },
    { label: "Resolved", value: "86", icon: CheckCircle, color: "text-green-600" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-red-100 text-red-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Resolved": return "bg-green-100 text-green-800";
      case "Closed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technical": return "bg-blue-100 text-blue-800";
      case "Process": return "bg-purple-100 text-purple-800";
      case "Account": return "bg-orange-100 text-orange-800";
      case "Content": return "bg-pink-100 text-pink-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Support Tickets</h1>
            <p className="text-gray-600">Manage and resolve citizen support requests</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {ticketStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>Review and manage citizen support requests</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search tickets..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket Details</TableHead>
                  <TableHead>Submitter</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-blue-600">{ticket.id}</div>
                        <div className="font-semibold">{ticket.subject}</div>
                        <div className="text-sm text-gray-600 max-w-xs truncate">
                          {ticket.description}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {ticket.created}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="font-medium">{ticket.submitter}</div>
                          <div className="text-sm text-gray-600">{ticket.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getCategoryColor(ticket.category)}>
                        {ticket.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{ticket.assignee}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Reply
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Bulk Reply</h3>
              <p className="text-sm text-gray-600">Send responses to multiple tickets</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
              <h3 className="font-semibold mb-2">Escalate Priority</h3>
              <p className="text-sm text-gray-600">Mark urgent tickets for immediate attention</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Close Resolved</h3>
              <p className="text-sm text-gray-600">Archive completed support tickets</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportTickets;
