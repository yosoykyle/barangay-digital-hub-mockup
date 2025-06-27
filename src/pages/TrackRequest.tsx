import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Download, Star, Clock, CheckCircle, XCircle, Package, User, Calendar, FileText, Phone, Mail } from "lucide-react";
import { useState } from "react";
import TrackRequestSuccess from "@/components/TrackRequestSuccess";

const TrackRequest = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [searchResults, setSearchResults] = useState<any>(null);
  const [feedback, setFeedback] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedTrackingNumber, setSubmittedTrackingNumber] = useState("");

  // Mock data for tracking results
  const mockRequests = {
    "TRK-2025-0214": {
      id: "TRK-2025-0214",
      type: "Barangay Clearance",
      status: "Processing",
      progress: 60,
      submittedDate: "2025-01-10",
      estimatedCompletion: "2025-01-17",
      applicant: {
        name: "Juan Dela Cruz",
        contact: "09123456789",
        email: "juan@email.com"
      },
      timeline: [
        { step: "Submitted", status: "completed", date: "2025-01-10", time: "10:30 AM" },
        { step: "Under Review", status: "completed", date: "2025-01-11", time: "2:15 PM" },
        { step: "Approved", status: "completed", date: "2025-01-12", time: "9:45 AM" },
        { step: "Processing", status: "current", date: "2025-01-13", time: "11:20 AM" },
        { step: "Ready for Pickup", status: "pending", date: "", time: "" },
        { step: "Completed", status: "pending", date: "", time: "" }
      ],
      details: {
        purpose: "Employment requirements",
        fee: "₱100",
        paymentStatus: "Paid",
        requirements: ["Valid ID", "Proof of Residency"],
        notes: "Rush processing requested"
      }
    },
    "TRK-2025-0215": {
      id: "TRK-2025-0215",
      type: "Certificate of Indigency",
      status: "Ready for Pickup",
      progress: 85,
      submittedDate: "2025-01-08",
      estimatedCompletion: "2025-01-15",
      applicant: {
        name: "Maria Santos",
        contact: "09987654321",
        email: "maria@email.com"
      },
      timeline: [
        { step: "Submitted", status: "completed", date: "2025-01-08", time: "2:30 PM" },
        { step: "Under Review", status: "completed", date: "2025-01-09", time: "10:15 AM" },
        { step: "Approved", status: "completed", date: "2025-01-10", time: "3:45 PM" },
        { step: "Processing", status: "completed", date: "2025-01-12", time: "1:20 PM" },
        { step: "Ready for Pickup", status: "current", date: "2025-01-14", time: "4:30 PM" },
        { step: "Completed", status: "pending", date: "", time: "" }
      ],
      details: {
        purpose: "Medical assistance",
        fee: "Free",
        paymentStatus: "N/A",
        requirements: ["Valid ID", "Medical Certificate"],
        notes: "Urgent request approved"
      }
    }
  };

  const handleSearch = () => {
    if (!trackingNumber.trim()) {
      // Show success page with a mock tracking number
      const mockTrackingNumber = `TRK-2025-${String(Math.floor(Math.random() * 9999)).padStart(4, '0')}`;
      setSubmittedTrackingNumber(mockTrackingNumber);
      setShowSuccess(true);
      return;
    }

    const result = mockRequests[trackingNumber as keyof typeof mockRequests];
    setSearchResults(result || "not_found");
  };

  const handleBackToTrack = () => {
    setShowSuccess(false);
    setTrackingNumber("");
    setSearchResults(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-600";
      case "Ready for Pickup": return "bg-blue-600";
      case "Processing": return "bg-yellow-600";
      case "Under Review": return "bg-orange-600";
      case "Rejected": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  const getTimelineIcon = (step: string, status: string) => {
    if (status === "completed") return <CheckCircle className="h-5 w-5 text-green-600" />;
    if (status === "current") return <Clock className="h-5 w-5 text-blue-600" />;
    if (status === "rejected") return <XCircle className="h-5 w-5 text-red-600" />;
    return <div className="h-5 w-5 rounded-full border-2 border-gray-300" />;
  };

  if (showSuccess) {
    return (
      <DashboardLayout userType="citizen">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Track Document Request</h1>
            <p className="text-gray-600">Your request has been successfully submitted</p>
          </div>
          <TrackRequestSuccess 
            onBack={handleBackToTrack}
            trackingNumber={submittedTrackingNumber}
          />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Track Document Request</h1>
          <p className="text-gray-600">Enter your tracking number to check the status of your document request</p>
        </div>

        {/* Search Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Track Your Request
            </CardTitle>
            <CardDescription>Enter your tracking number to view the current status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Label htmlFor="tracking">Tracking Number</Label>
                <Input
                  id="tracking"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., TRK-2025-0214)"
                  className="mt-1"
                />
              </div>
              <div className="flex items-end">
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="mr-2 h-4 w-4" />
                  Track
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {searchResults === "not_found" && (
          <Card className="border-red-200">
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-700">Request Not Found</h3>
                <p className="text-red-600">Please check your tracking number and try again.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {searchResults && searchResults !== "not_found" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Status Overview */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      Request Details
                    </span>
                    <Badge className={getStatusColor(searchResults.status)}>
                      {searchResults.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Tracking Number</p>
                      <p className="font-semibold">{searchResults.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Document Type</p>
                      <p className="font-semibold">{searchResults.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Submitted Date</p>
                      <p className="font-semibold">{searchResults.submittedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Estimated Completion</p>
                      <p className="font-semibold">{searchResults.estimatedCompletion}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-semibold">{searchResults.progress}%</span>
                    </div>
                    <Progress value={searchResults.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Status Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Status Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {searchResults.timeline.map((step: any, index: number) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {getTimelineIcon(step.step, step.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className={`font-medium ${step.status === 'current' ? 'text-blue-600' : step.status === 'completed' ? 'text-green-600' : 'text-gray-500'}`}>
                              {step.step}
                            </h4>
                            {step.date && (
                              <span className="text-sm text-gray-500">
                                {step.date} {step.time}
                              </span>
                            )}
                          </div>
                          {step.status === 'current' && (
                            <p className="text-sm text-blue-600">Currently in progress</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Applicant Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Applicant Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-semibold">{searchResults.applicant.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Contact</p>
                    <p className="font-semibold flex items-center">
                      <Phone className="mr-1 h-4 w-4" />
                      {searchResults.applicant.contact}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold flex items-center">
                      <Mail className="mr-1 h-4 w-4" />
                      {searchResults.applicant.email}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Request Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Purpose</p>
                    <p className="font-semibold">{searchResults.details.purpose}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fee</p>
                    <p className="font-semibold">{searchResults.details.fee}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payment Status</p>
                    <Badge variant={searchResults.details.paymentStatus === "Paid" ? "default" : "secondary"}>
                      {searchResults.details.paymentStatus}
                    </Badge>
                  </div>
                  {searchResults.details.notes && (
                    <div>
                      <p className="text-sm text-gray-600">Notes</p>
                      <p className="text-sm">{searchResults.details.notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {(searchResults.status === "Ready for Pickup" || searchResults.status === "Completed") && (
                    <Button className="w-full" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download Copy
                    </Button>
                  )}
                  
                  {searchResults.status === "Completed" && (
                    <div className="space-y-2">
                      <Label>Rate your experience</Label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-6 w-6 cursor-pointer ${
                              feedback >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                            onClick={() => setFeedback(star)}
                          />
                        ))}
                      </div>
                      {feedback > 0 && (
                        <Button size="sm" className="w-full mt-2">
                          Submit Feedback
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Quick Access */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
            <CardDescription>Try these sample tracking numbers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-sm">TRK-2025-0214</p>
                <p className="text-sm text-gray-600">Barangay Clearance - Processing</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-sm">TRK-2025-0215</p>
                <p className="text-sm text-gray-600">Certificate of Indigency - Ready for Pickup</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TrackRequest;
