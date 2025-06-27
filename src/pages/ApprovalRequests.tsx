
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, Eye, Check, X, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

const ApprovalRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showDetailsModal, setShowDetailsModal] = useState<number | null>(null);

  const documentRequests = [
    {
      id: 1,
      requester: "Ana Cruz",
      type: "Barangay Clearance",
      submitted: "2025-06-25",
      status: "Under Review",
      priority: "medium",
      purpose: "Employment Requirements",
      email: "ana.cruz@email.com",
      phone: "+63 912 345 6789"
    },
    {
      id: 2,
      requester: "Maria Santos",
      type: "Certificate of Indigency",
      submitted: "2025-06-24",
      status: "Pending",
      priority: "high",
      purpose: "Medical Assistance",
      email: "maria.santos@email.com",
      phone: "+63 912 345 6790"
    },
    {
      id: 3,
      requester: "Jose Reyes",
      type: "Business Permit",
      submitted: "2025-06-23",
      status: "Under Review",
      priority: "low",
      purpose: "Sari-sari Store",
      email: "jose.reyes@email.com",
      phone: "+63 912 345 6791"
    }
  ];

  const bookingRequests = [
    {
      id: 4,
      requester: "Carmen Dela Cruz",
      type: "Barangay Hall Rental",
      submitted: "2025-06-22",
      status: "Pending",
      priority: "medium",
      purpose: "Wedding Reception",
      email: "carmen.dc@email.com",
      phone: "+63 912 345 6792"
    },
    {
      id: 5,
      requester: "Roberto Garcia",
      type: "Basketball Court",
      submitted: "2025-06-21",
      status: "Under Review",
      priority: "low",
      purpose: "Community Tournament",
      email: "roberto.garcia@email.com",
      phone: "+63 912 345 6793"
    }
  ];

  const complaintRequests = [
    {
      id: 6,
      requester: "Elena Vasquez",
      type: "Noise Complaint",
      submitted: "2025-06-20",
      status: "Under Review",
      priority: "high",
      purpose: "Loud Music at Night",
      email: "elena.vasquez@email.com",
      phone: "+63 912 345 6794"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "Under Review": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-blue-100 text-blue-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleBulkApprove = () => {
    console.log("Bulk approve:", selectedItems);
    setSelectedItems([]);
  };

  const handleBulkReject = () => {
    console.log("Bulk reject:", selectedItems);
    setSelectedItems([]);
  };

  const RequestTable = ({ requests }: { requests: any[] }) => (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search requests..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
        </div>
        {selectedItems.length > 0 && (
          <div className="flex gap-2">
            <Button onClick={handleBulkApprove} className="bg-green-600 hover:bg-green-700">
              <Check className="mr-2 h-4 w-4" />
              Approve Selected ({selectedItems.length})
            </Button>
            <Button onClick={handleBulkReject} variant="destructive">
              <X className="mr-2 h-4 w-4" />
              Reject Selected ({selectedItems.length})
            </Button>
          </div>
        )}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>Requester</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Submitted Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>
                <Checkbox 
                  checked={selectedItems.includes(request.id)}
                  onCheckedChange={() => handleSelectItem(request.id)}
                />
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{request.requester}</div>
                  <div className="text-sm text-gray-500">{request.email}</div>
                </div>
              </TableCell>
              <TableCell>{request.type}</TableCell>
              <TableCell>{request.submitted}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(request.status)}>
                  {request.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge className={getPriorityColor(request.priority)}>
                  {request.priority}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => setShowDetailsModal(request.id)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-green-600">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <X className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 max-w-md">
            <h3 className="font-bold mb-4">Request Details</h3>
            {(() => {
              const request = [...documentRequests, ...bookingRequests, ...complaintRequests]
                .find(r => r.id === showDetailsModal);
              return request ? (
                <div className="space-y-3">
                  <div><strong>Requester:</strong> {request.requester}</div>
                  <div><strong>Type:</strong> {request.type}</div>
                  <div><strong>Purpose:</strong> {request.purpose}</div>
                  <div><strong>Email:</strong> {request.email}</div>
                  <div><strong>Phone:</strong> {request.phone}</div>
                  <div><strong>Submitted:</strong> {request.submitted}</div>
                  <div><strong>Status:</strong> 
                    <Badge className={`ml-2 ${getStatusColor(request.status)}`}>
                      {request.status}
                    </Badge>
                  </div>
                </div>
              ) : null;
            })()}
            <div className="flex gap-2 justify-end mt-6">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
              <Button size="sm" variant="destructive">Reject</Button>
              <Button size="sm" variant="outline">Request Info</Button>
              <Button size="sm" variant="outline" onClick={() => setShowDetailsModal(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Approval Requests</h1>
            <p className="text-gray-600">Review and approve pending requests</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
            <CardDescription>Manage document requests, bookings, and complaints</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="documents" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="documents">Documents ({documentRequests.length})</TabsTrigger>
                <TabsTrigger value="bookings">Bookings ({bookingRequests.length})</TabsTrigger>
                <TabsTrigger value="complaints">Complaints ({complaintRequests.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="documents" className="space-y-4">
                <RequestTable requests={documentRequests} />
              </TabsContent>
              
              <TabsContent value="bookings" className="space-y-4">
                <RequestTable requests={bookingRequests} />
              </TabsContent>
              
              <TabsContent value="complaints" className="space-y-4">
                <RequestTable requests={complaintRequests} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ApprovalRequests;
