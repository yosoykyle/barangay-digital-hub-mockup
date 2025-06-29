import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Search, Filter, MoreHorizontal, Edit, Trash2, Shield, User } from "lucide-react";
import { useState, useEffect } from "react";

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showRoleEditor, setShowRoleEditor] = useState<number | null>(null);
  const [showImport, setShowImport] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showQrPopup, setShowQrPopup] = useState(true);

  const users = [
    {
      id: 1,
      name: "Maria Santos",
      email: "maria.santos@email.com",
      role: "Citizen",
      status: "Active",
      lastLogin: "2024-06-25",
      registeredDate: "2024-01-15",
      documentsRequested: 5,
      complaintsFilED: 2
    },
    {
      id: 2,
      name: "Juan Dela Cruz",
      email: "juan.delacruz@email.com",
      role: "Citizen",
      status: "Active",
      lastLogin: "2024-06-24",
      registeredDate: "2024-02-20",
      documentsRequested: 8,
      complaintsFilED: 0
    },
    {
      id: 3,
      name: "Ana Rodriguez",
      email: "ana.rodriguez@barangay.gov.ph",
      role: "Staff",
      status: "Active",
      lastLogin: "2024-06-26",
      registeredDate: "2023-11-10",
      documentsRequested: 0,
      complaintsFilED: 0
    },
    {
      id: 4,
      name: "Carlos Mendoza",
      email: "carlos.mendoza@email.com",
      role: "Citizen",
      status: "Suspended",
      lastLogin: "2024-06-20",
      registeredDate: "2024-03-05",
      documentsRequested: 12,
      complaintsFilED: 8
    },
    {
      id: 5,
      name: "Rosa Fernandez",
      email: "rosa.fernandez@email.com",
      role: "Citizen",
      status: "Pending",
      lastLogin: "Never",
      registeredDate: "2024-06-25",
      documentsRequested: 0,
      complaintsFilED: 0
    }
  ];
  const [userStatus, setUserStatus] = useState(users.map(u => u.status));

  const userStats = [
    { label: "Total Users", value: "1,248", change: "+12%" },
    { label: "Active Users", value: "1,156", change: "+8%" },
    { label: "New This Month", value: "47", change: "+23%" },
    { label: "Suspended", value: "5", change: "-2%" }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin": return "bg-red-100 text-red-800";
      case "Staff": return "bg-blue-100 text-blue-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Suspended": return "bg-red-100 text-red-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout userType="admin">
      {/* QR Code Scan Verification Popup for Admin Login */}
      {showQrPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm flex flex-col items-center">
            <div className="mb-4 flex flex-col items-center">
              <div className="h-20 w-20 bg-gray-200 rounded flex items-center justify-center mb-2">
                {/* Mock QR code icon */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="#E5E7EB"/><rect x="8" y="8" width="8" height="8" fill="#111827"/><rect x="32" y="8" width="8" height="8" fill="#111827"/><rect x="8" y="32" width="8" height="8" fill="#111827"/><rect x="32" y="32" width="8" height="8" fill="#111827"/><rect x="20" y="20" width="8" height="8" fill="#111827"/></svg>
              </div>
              <p className="font-semibold text-lg">Please scan your Admin ID to continue</p>
            </div>
            <div className="mb-4 w-full">
              <div className="flex flex-col gap-1 text-sm text-gray-700">
                <span><b>User:</b> mark@bgy.gov</span>
                <span><b>Role:</b> Admin</span>
                <span><b>Status:</b> Active</span>
              </div>
            </div>
            <Button className="w-full mt-2" onClick={() => setShowQrPopup(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
            <p className="text-gray-600">User management and roles</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {userStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="text-sm text-green-600">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>User Directory</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowImport(true)}>
                  Import CSV
                </Button>
                <Button variant="outline" onClick={() => setShowExport(true)}>
                  Export CSV
                </Button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
            {/* Import/Export CSV Mock Dialogs */}
            {showImport && (
              <div className="absolute top-20 right-10 bg-white border rounded shadow p-4 z-50">
                <p className="mb-2 font-medium">Import Users from CSV (mock)</p>
                <input type="file" accept=".csv" className="mb-2" />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setShowImport(false)}>Close</Button>
                </div>
              </div>
            )}
            {showExport && (
              <div className="absolute top-20 right-10 bg-white border rounded shadow p-4 z-50">
                <p className="mb-2 font-medium">Export Users to CSV (mock)</p>
                <Button size="sm" onClick={() => setShowExport(false)}>Download CSV</Button>
                <Button size="sm" variant="outline" onClick={() => setShowExport(false)}>Close</Button>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, idx) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(userStatus[idx])}>
                        {userStatus[idx]}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>Docs: {user.documentsRequested}</div>
                        <div>Complaints: {user.complaintsFilED}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {/* Role Editor */}
                        <Button variant="ghost" size="sm" onClick={() => setShowRoleEditor(user.id)}>
                          <Shield className="h-4 w-4" />
                        </Button>
                        {showRoleEditor === user.id && (
                          <div className="absolute z-50 bg-white border rounded shadow p-4 mt-2">
                            <p className="mb-2 font-medium">Edit Role (mock)</p>
                            <select className="border rounded p-1 mb-2">
                              <option>Citizen</option>
                              <option>Staff</option>
                              <option>Admin</option>
                            </select>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => setShowRoleEditor(null)}>Save</Button>
                              <Button size="sm" variant="outline" onClick={() => setShowRoleEditor(null)}>Cancel</Button>
                            </div>
                          </div>
                        )}
                        {/* Suspend/Activate Toggle */}
                        <Button variant="ghost" size="sm" onClick={() => {
                          const updated = [...userStatus];
                          updated[idx] = updated[idx] === "Active" ? "Suspended" : "Active";
                          setUserStatus(updated);
                        }}>
                          {userStatus[idx] === "Active" ? (
                            <span className="text-yellow-600">Suspend</span>
                          ) : (
                            <span className="text-green-600">Activate</span>
                          )}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ManageUsers;
