import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import RequestDocumentSuccess from "@/components/RequestDocumentSuccess";

const RequestDocument = () => {
  const [selectedDocument, setSelectedDocument] = useState("");
  const [purpose, setPurpose] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [cedula, setCedula] = useState("");
  const [consent, setConsent] = useState(false);
  const [feedback, setFeedback] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedRequestNumber, setSubmittedRequestNumber] = useState("");
  const [urgency, setUrgency] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [requirements, setRequirements] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianRelationship, setGuardianRelationship] = useState("");
  const [guardianDoc, setGuardianDoc] = useState(null);

  // Helper to check if under 18
  const isMinor = dob && ((new Date().getFullYear() - new Date(dob).getFullYear()) < 18);

  const documentTypes = [
    { value: "certificate", label: "Barangay Certificate", fee: "₱50", processing: "3-5 days" },
    { value: "clearance", label: "Barangay Clearance", fee: "₱100", processing: "5-7 days" },
    { value: "indigency", label: "Certificate of Indigency", fee: "Free", processing: "2-3 days" },
    { value: "residency", label: "Certificate of Residency", fee: "₱75", processing: "3-5 days" },
    { value: "business", label: "Business Permit", fee: "₱200", processing: "7-10 days" }
  ];

  const currentRequests = [
    { id: "BR-001", type: "Barangay Certificate", status: "Processing", submitted: "2024-06-20" },
    { id: "BR-002", type: "Clearance", status: "Ready for Pickup", submitted: "2024-06-18" }
  ];

  // Mock requirements per document
  const requirementsOptions = {
    certificate: ["Valid ID", "Proof of Residency"],
    clearance: ["Cedula", "Valid ID"],
    indigency: ["Barangay Certificate"],
    residency: ["Proof of Residency"],
    business: ["Business Permit Application", "Cedula"]
  };

  // Mock request history
  const requestHistory = [
    {
      id: "BR-2025-001",
      type: "Barangay Clearance",
      status: "Under Review",
      urgency: "High",
      payment: "GCASH",
      submitted: "2025-06-25",
      tracking: ["Submitted", "Under Review"]
    },
    {
      id: "BR-2025-002",
      type: "Certificate of Indigency",
      status: "Completed",
      urgency: "Normal",
      payment: "Cash",
      submitted: "2025-06-20",
      tracking: ["Submitted", "Under Review", "Approved", "Processing", "Ready", "Completed"]
    }
  ];

  const selectedDocumentInfo = documentTypes.find(doc => doc.value === selectedDocument);

  const handleSubmitRequest = () => {
    // Generate mock request number
    const mockRequestNumber = `REQ-2025-${String(Math.floor(Math.random() * 9999)).padStart(4, '0')}`;
    setSubmittedRequestNumber(mockRequestNumber);
    setShowSuccess(true);
  };

  const handleBackToRequest = () => {
    setShowSuccess(false);
    // Reset form
    setSelectedDocument("");
    setPurpose("");
    setName("");
    setDob("");
    setGender("");
    setCivilStatus("");
    setContact("");
    setEmail("");
    setCedula("");
    setConsent(false);
  };

  if (showSuccess) {
    return (
      <DashboardLayout userType="citizen">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Request Document</h1>
            <p className="text-gray-600">Your request has been successfully submitted</p>
          </div>
          <RequestDocumentSuccess 
            onBack={handleBackToRequest}
            requestNumber={submittedRequestNumber}
            documentType={selectedDocumentInfo?.label || "Barangay Certificate"}
          />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Request Document</h1>
          <p className="text-gray-600">Apply for barangay certificates and clearances</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Request Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>New Document Request</CardTitle>
                <CardDescription>Fill out the form to request official documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Type of Request Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="doc-type">Type of Request</Label>
                  <Select value={selectedDocument} onValueChange={v => { setSelectedDocument(v); setRequirements(""); }}>
                    <SelectTrigger><SelectValue placeholder="Select document type" /></SelectTrigger>
                    <SelectContent>
                      {documentTypes.map(doc => (
                        <SelectItem key={doc.value} value={doc.value}>{doc.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* Requirements Dropdown */}
                {selectedDocument && (
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Type of Requirements</Label>
                    <Select value={requirements} onValueChange={setRequirements}>
                      <SelectTrigger><SelectValue placeholder="Select requirement" /></SelectTrigger>
                      <SelectContent>
                        {(requirementsOptions[selectedDocument] || []).map(req => (
                          <SelectItem key={req} value={req}>{req}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Personal Info Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" value={dob} onChange={e => setDob(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={gender} onValueChange={setGender}>
                      <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="civil-status">Civil Status</Label>
                    <Select value={civilStatus} onValueChange={setCivilStatus}>
                      <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Number</Label>
                    <Input id="contact" value={contact} onChange={e => setContact(e.target.value)} placeholder="09xxxxxxxxx" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" />
                  </div>
                </div>

                {/* Cedula Number (if applicable) */}
                {(selectedDocument === "clearance" || selectedDocument === "business") && (
                  <div className="space-y-2">
                    <Label htmlFor="cedula">Cedula Number</Label>
                    <Input id="cedula" value={cedula} onChange={e => setCedula(e.target.value)} placeholder="Enter Cedula Number" />
                  </div>
                )}

                {/* Guardian Fields if minor */}
                {isMinor && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-yellow-50 p-4 rounded">
                    <div className="space-y-2">
                      <Label htmlFor="guardian-name">Guardian Name</Label>
                      <Input id="guardian-name" value={guardianName} onChange={e => setGuardianName(e.target.value)} placeholder="Enter guardian's name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guardian-relationship">Relationship</Label>
                      <Input id="guardian-relationship" value={guardianRelationship} onChange={e => setGuardianRelationship(e.target.value)} placeholder="Relationship" />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label>Guardian Documents</Label>
                      <Input type="file" onChange={e => setGuardianDoc(e.target.files?.[0] || null)} />
                    </div>
                  </div>
                )}

                {/* Purpose of Request (Textarea) */}
                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of Request</Label>
                  <Textarea id="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} placeholder="State your purpose..." className="min-h-[80px]" />
                </div>

                {/* Urgency Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency/Priority</Label>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger><SelectValue placeholder="Select urgency" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Normal">Normal</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2">
                  <Label htmlFor="payment">Payment Method</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger><SelectValue placeholder="Select payment method" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cash">Cash</SelectItem>
                      <SelectItem value="GCASH">GCASH</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <Label htmlFor="additional-info">Additional Information</Label>
                  <Textarea 
                    id="additional-info" 
                    placeholder="Any special instructions or notes..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Upload Section */}
                <div className="space-y-4">
                  <Label>Supporting Documents</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900">Upload required documents</p>
                    <p className="text-gray-600">Valid ID, proof of residency, etc.</p>
                    <Button className="mt-4">
                      Choose Files
                    </Button>
                  </div>
                </div>

                {/* Declaration & Consent Checkbox */}
                <div className="flex items-center space-x-2">
                  <input id="consent" type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} />
                  <Label htmlFor="consent" className="text-sm">I declare that the information provided is true and I consent to the processing of my data.</Label>
                </div>

                <div className="flex space-x-4">
                  <Button onClick={handleSubmitRequest} className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Submit Request
                  </Button>
                  <Button variant="outline">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Status Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Your Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6 pb-4 pt-2 bg-white">
                {currentRequests.map(request => (
                  <div key={request.id} className="p-4 bg-gray-50 rounded-lg shadow-sm mb-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm break-words">{request.type}</p>
                        <p className="text-xs text-gray-600 break-words">#{request.id}</p>
                        <p className="text-xs text-gray-500 break-words">{request.submitted}</p>
                        {/* Document Tracking Timeline */}
                        <div className="flex items-center space-x-2 mt-1 flex-wrap">
                          <span className="text-xs">Submitted</span>
                          <span className={`h-1 w-6 rounded-full ${request.status === 'Under Review' || request.status === 'Processing' || request.status === 'Ready for Pickup' ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
                          <span className="text-xs">Under Review</span>
                          <span className={`h-1 w-6 rounded-full ${request.status === 'Processing' || request.status === 'Ready for Pickup' ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
                          <span className="text-xs">Processing</span>
                          <span className={`h-1 w-6 rounded-full ${request.status === 'Ready for Pickup' ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
                          <span className="text-xs">Ready</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end flex-shrink-0 text-right gap-2 min-w-[110px]">
                        <Badge 
                          variant={request.status === "Ready for Pickup" ? "default" : "secondary"}
                          className={request.status === "Ready for Pickup" ? "bg-green-600" : ""}
                        >
                          {request.status}
                        </Badge>
                        {/* Download Proof Button (mock) */}
                        {request.status === "Ready for Pickup" && (
                          <Button size="sm" variant="outline" className="mt-1 w-full">Download Proof</Button>
                        )}
                        {/* Feedback Rating Bar (mock) */}
                        {request.status === "Ready for Pickup" && (
                          <div className="flex items-center mt-1 w-full justify-end">
                            {[1,2,3,4,5].map(star => (
                              <span key={star} onClick={() => setFeedback(star)} className={`cursor-pointer text-lg ${feedback >= star ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Processing Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {documentTypes.slice(0, 3).map(doc => (
                  <div key={doc.value} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{doc.label}</p>
                      <p className="text-xs text-gray-600">{doc.fee}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{doc.processing}</p>
                      <Clock className="h-3 w-3 text-gray-400 inline ml-1" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Request History Table */}
            <Card>
              <CardHeader>
                <CardTitle>Request History</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-left">ID</th>
                      <th className="py-2 text-left">Type</th>
                      <th className="py-2 text-left">Status</th>
                      <th className="py-2 text-left">Urgency</th>
                      <th className="py-2 text-left">Payment</th>
                      <th className="py-2 text-left">Submitted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestHistory.map(req => (
                      <tr key={req.id} className="border-b">
                        <td className="py-1">{req.id}</td>
                        <td>{req.type}</td>
                        <td>{req.status}</td>
                        <td>{req.urgency}</td>
                        <td>{req.payment}</td>
                        <td>{req.submitted}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RequestDocument;
