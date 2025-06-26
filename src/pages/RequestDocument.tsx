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

  const selectedDocumentInfo = documentTypes.find(doc => doc.value === selectedDocument);

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

                {/* Purpose of Request (Textarea) */}
                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of Request</Label>
                  <Textarea id="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} placeholder="State your purpose..." className="min-h-[80px]" />
                </div>

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
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RequestDocument;
