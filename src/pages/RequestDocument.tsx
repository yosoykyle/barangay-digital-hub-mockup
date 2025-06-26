
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
                <div className="space-y-2">
                  <Label htmlFor="document-type">Document Type</Label>
                  <Select value={selectedDocument} onValueChange={setSelectedDocument}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentTypes.map(doc => (
                        <SelectItem key={doc.value} value={doc.value}>
                          {doc.label} - {doc.fee}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedDocumentInfo && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{selectedDocumentInfo.label}</p>
                        <p className="text-sm text-gray-600">Processing time: {selectedDocumentInfo.processing}</p>
                      </div>
                      <Badge variant="secondary">{selectedDocumentInfo.fee}</Badge>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="purpose">Purpose</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employment">Employment</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="school">School</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="copies">Number of Copies</Label>
                    <Select defaultValue="1">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 copy</SelectItem>
                        <SelectItem value="2">2 copies</SelectItem>
                        <SelectItem value="3">3 copies</SelectItem>
                        <SelectItem value="more">More than 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
              <CardContent className="space-y-4">
                {currentRequests.map(request => (
                  <div key={request.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-sm">{request.type}</p>
                        <p className="text-xs text-gray-600">#{request.id}</p>
                        <p className="text-xs text-gray-500">{request.submitted}</p>
                      </div>
                      <Badge 
                        variant={request.status === "Ready for Pickup" ? "default" : "secondary"}
                        className={request.status === "Ready for Pickup" ? "bg-green-600" : ""}
                      >
                        {request.status}
                      </Badge>
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
