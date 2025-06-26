
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Phone, Mail, MapPin, Users } from "lucide-react";
import { useState } from "react";

const DirectoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const directoryEntries = [
    {
      id: 1,
      name: "Captain Roberto Martinez",
      position: "Barangay Captain",
      department: "Executive Office",
      phone: "+63 912 345 6789",
      email: "captain@barangay-hillside.gov.ph",
      office: "Main Office, Room 101",
      schedule: "Mon-Fri 8:00 AM - 5:00 PM",
      status: "Available"
    },
    {
      id: 2,
      name: "Elena Vasquez",
      position: "Secretary",
      department: "Administrative",
      phone: "+63 912 345 6790",
      email: "secretary@barangay-hillside.gov.ph",
      office: "Main Office, Room 102",
      schedule: "Mon-Fri 8:00 AM - 5:00 PM",
      status: "Available"
    },
    {
      id: 3,
      name: "Dr. Miguel Santos",
      position: "Health Officer",
      department: "Health Services",
      phone: "+63 912 345 6791",
      email: "health@barangay-hillside.gov.ph",
      office: "Health Center",
      schedule: "Mon-Sat 8:00 AM - 4:00 PM",
      status: "On Leave"
    },
    {
      id: 4,
      name: "Carlos Reyes",
      position: "Peace & Order Officer",
      department: "Public Safety",
      phone: "+63 912 345 6792",
      email: "safety@barangay-hillside.gov.ph",
      office: "Security Office",
      schedule: "24/7 Shifts",
      status: "Available"
    },
    {
      id: 5,
      name: "Maria Gonzales",
      position: "Social Services Coordinator",
      department: "Social Services",
      phone: "+63 912 345 6793",
      email: "social@barangay-hillside.gov.ph",
      office: "Community Center",
      schedule: "Mon-Fri 9:00 AM - 4:00 PM",
      status: "Available"
    },
    {
      id: 6,
      name: "Antonio Cruz",
      position: "Treasurer",
      department: "Finance",
      phone: "+63 912 345 6794",
      email: "treasurer@barangay-hillside.gov.ph",
      office: "Main Office, Room 103",
      schedule: "Mon-Fri 8:00 AM - 5:00 PM",
      status: "Available"
    }
  ];

  const departments = [
    { name: "Executive Office", count: 1, color: "bg-blue-100 text-blue-800" },
    { name: "Administrative", count: 2, color: "bg-green-100 text-green-800" },
    { name: "Health Services", count: 3, color: "bg-red-100 text-red-800" },
    { name: "Public Safety", count: 4, color: "bg-yellow-100 text-yellow-800" },
    { name: "Social Services", count: 2, color: "bg-purple-100 text-purple-800" },
    { name: "Finance", count: 1, color: "bg-pink-100 text-pink-800" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-100 text-green-800";
      case "Busy": return "bg-yellow-100 text-yellow-800";
      case "On Leave": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Directory Management</h1>
            <p className="text-gray-600">Manage contact directory and staff information</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Contact
          </Button>
        </div>

        {/* Department Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {departments.map((dept, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                  <div className="text-2xl font-bold">{dept.count}</div>
                  <Badge className={`${dept.color} text-xs`}>
                    {dept.name}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Directory Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>Staff Directory</CardTitle>
                <CardDescription>Manage barangay staff contact information</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search directory..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact Information</TableHead>
                  <TableHead>Position & Department</TableHead>
                  <TableHead>Office Details</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {directoryEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{entry.name}</div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-3 w-3 mr-1" />
                          {entry.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-3 w-3 mr-1" />
                          {entry.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{entry.position}</div>
                        <Badge className="bg-blue-100 text-blue-800 text-xs">
                          {entry.department}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                          {entry.office}
                        </div>
                        <div className="text-sm text-gray-600">{entry.schedule}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(entry.status)}>
                        {entry.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
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

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Update Phone Numbers</h3>
              <p className="text-sm text-gray-600">Bulk update contact information</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Email Directory</h3>
              <p className="text-sm text-gray-600">Send directory updates to citizens</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-semibold mb-2">Department Management</h3>
              <p className="text-sm text-gray-600">Organize staff by departments</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DirectoryManagement;
