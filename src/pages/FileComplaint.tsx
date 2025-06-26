
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertCircle, Clock, CheckCircle, FileText, Camera, Calendar } from "lucide-react";

const FileComplaint = () => {
  const complaintHistory = [
    {
      id: "COMP-2024-001",
      title: "Broken Street Light on Main Road",
      category: "Infrastructure",
      status: "Resolved",
      priority: "Medium",
      dateSubmitted: "2024-06-15",
      dateResolved: "2024-06-22",
      description: "Street light near barangay hall has been broken for 2 weeks",
      response: "Street light has been repaired by the maintenance team. Thank you for reporting.",
      assignedTo: "Maintenance Department"
    },
    {
      id: "COMP-2024-002", 
      title: "Noise Complaint - Construction Work",
      category: "Noise",
      status: "In Progress",
      priority: "High",
      dateSubmitted: "2024-06-20",
      dateResolved: null,
      description: "Construction work starting at 5 AM disturbing residents",
      response: "We have contacted the construction company. They will adjust their working hours.",
      assignedTo: "Community Relations"
    },
    {
      id: "COMP-2024-003",
      title: "Stray Dogs in Area",
      category: "Animal Control",
      status: "Under Review",
      priority: "Low",
      dateSubmitted: "2024-06-25",
      dateResolved: null,
      description: "Multiple stray dogs roaming around Block 5, some appear aggressive",
      response: null,
      assignedTo: "Animal Control Unit"
    }
  ];

  const complaintCategories = [
    "Infrastructure",
    "Noise Complaints", 
    "Sanitation",
    "Traffic",
    "Animal Control",
    "Public Safety",
    "Environmental",
    "Others"
  ];

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">File Complaint</h1>
          <p className="text-gray-600">Submit and track your complaints to improve our community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Complaint Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Submit New Complaint
              </CardTitle>
              <CardDescription>Describe your concern and we'll address it promptly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="complainant-name">Your Name</Label>
                  <Input id="complainant-name" placeholder="Juan dela Cruz" />
                </div>
                <div>
                  <Label htmlFor="contact-number">Contact Number</Label>
                  <Input id="contact-number" placeholder="+63 912 345 6789" />
                </div>
              </div>

              <div>
                <Label htmlFor="complaint-title">Complaint Title</Label>
                <Input id="complaint-title" placeholder="Brief description of the issue" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {complaintCategories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Priority Level</Label>
                  <RadioGroup defaultValue="medium" className="flex space-x-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" />
                      <Label htmlFor="low">Low</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium">Medium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high">High</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location/Address</Label>
                <Input id="location" placeholder="Specific location where the issue occurred" />
              </div>

              <div>
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Please provide as much detail as possible about the issue..."
                  className="min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label>Supporting Evidence (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Camera className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Upload photos or documents to support your complaint
                  </p>
                  <Button variant="outline" className="mt-2">
                    Choose Files
                  </Button>
                </div>
              </div>

              <Button className="w-full">
                Submit Complaint
              </Button>
            </CardContent>
          </Card>

          {/* Status Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Complaint Process</CardTitle>
              <CardDescription>How we handle your complaints</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Under Review (1-2 days)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">In Progress (3-7 days)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Resolved</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Quick Tips:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Be specific about location</li>
                  <li>• Include photos if possible</li>
                  <li>• Provide contact information</li>
                  <li>• Check status regularly</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Complaint History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Your Complaint History
            </CardTitle>
            <CardDescription>Track your previous and current complaints</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complaintHistory.map((complaint) => (
                <div key={complaint.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{complaint.title}</h4>
                        <Badge 
                          variant={
                            complaint.status === "Resolved" ? "default" :
                            complaint.status === "In Progress" ? "secondary" : "outline"
                          }
                          className={
                            complaint.status === "Resolved" ? "bg-green-600" :
                            complaint.status === "In Progress" ? "bg-blue-600" : "bg-yellow-600"
                          }
                        >
                          {complaint.status === "Resolved" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {complaint.status === "In Progress" && <Clock className="mr-1 h-3 w-3" />}
                          {complaint.status === "Under Review" && <AlertCircle className="mr-1 h-3 w-3" />}
                          {complaint.status}
                        </Badge>
                        <Badge variant="outline">{complaint.priority}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{complaint.description}</p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p>Complaint ID: #{complaint.id}</p>
                        <p>Category: {complaint.category}</p>
                        <p>Submitted: {complaint.dateSubmitted}</p>
                        {complaint.dateResolved && <p>Resolved: {complaint.dateResolved}</p>}
                        <p>Assigned to: {complaint.assignedTo}</p>
                        {complaint.response && (
                          <p className="text-green-600 font-medium mt-2">Response: {complaint.response}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FileComplaint;
