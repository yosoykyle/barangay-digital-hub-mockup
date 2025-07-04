import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Phone, Mail, MapPin, Clock, Users, Star, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactDirectory = () => {
  const [search, setSearch] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [category, setCategory] = useState("all");

  const barangayOfficials = [
    {
      id: 1,
      name: "Maria Santos",
      position: "Barangay Captain",
      department: "Executive Office",
      phone: "+63 912 345 6789",
      email: "captain@barangaysanisidro.gov.ph",
      office: "Barangay Hall - Room 101",
      schedule: "Mon-Fri 8:00 AM - 5:00 PM",
      avatar: "/placeholder.svg",
      priority: "high"
    },
    {
      id: 2,
      name: "Roberto Cruz",
      position: "Barangay Secretary",
      department: "Administrative Office",
      phone: "+63 912 345 6790",
      email: "secretary@barangaysanisidro.gov.ph", 
      office: "Barangay Hall - Room 102",
      schedule: "Mon-Fri 8:00 AM - 5:00 PM",
      avatar: "/placeholder.svg",
      priority: "high"
    },
    {
      id: 3,
      name: "Ana Reyes",
      position: "Barangay Treasurer",
      department: "Finance Office",
      phone: "+63 912 345 6791",
      email: "treasurer@barangaysanisidro.gov.ph",
      office: "Barangay Hall - Room 103", 
      schedule: "Mon-Fri 8:00 AM - 4:00 PM",
      avatar: "/placeholder.svg",
      priority: "high"
    },
    {
      id: 4,
      name: "Dr. Elena Garcia",
      position: "Health Officer",
      department: "Health Center",
      phone: "+63 912 345 6792",
      email: "health@barangaysanisidro.gov.ph",
      office: "Barangay Health Center",
      schedule: "Mon-Sat 7:00 AM - 3:00 PM",
      avatar: "/placeholder.svg",
      priority: "medium"
    },
    {
      id: 5,
      name: "Carlos Mendoza",
      position: "Peace & Order Committee Chair",
      department: "Public Safety",
      phone: "+63 912 345 6793",
      email: "safety@barangaysanisidro.gov.ph",
      office: "Security Office",
      schedule: "24/7 Emergency Response",
      avatar: "/placeholder.svg",
      priority: "high"
    },
    {
      id: 6,
      name: "Lisa Fernandez",
      position: "Social Services Officer",
      department: "Social Welfare",
      phone: "+63 912 345 6794",
      email: "social@barangaysanisidro.gov.ph",
      office: "Community Center",
      schedule: "Mon-Fri 9:00 AM - 5:00 PM",
      avatar: "/placeholder.svg",
      priority: "medium"
    }
  ];

  const emergencyContacts = [
    {
      service: "Police Emergency",
      number: "117",
      description: "National emergency hotline for police",
      available: "24/7"
    },
    {
      service: "Fire Department",
      number: "116", 
      description: "Fire emergency and rescue services",
      available: "24/7"
    },
    {
      service: "Medical Emergency",
      number: "911",
      description: "Medical emergency response",
      available: "24/7"
    },
    {
      service: "Barangay Emergency",
      number: "+63 912 345 6789",
      description: "Local barangay emergency response",
      available: "24/7"
    }
  ];

  const importantServices = [
    {
      name: "Document Processing Office",
      contact: "+63 912 345 6795",
      email: "documents@barangaysanisidro.gov.ph",
      location: "Barangay Hall - Ground Floor",
      hours: "Mon-Fri 8:00 AM - 4:00 PM",
      services: ["Certificates", "Clearances", "IDs"]
    },
    {
      name: "Business Permits Office", 
      contact: "+63 912 345 6796",
      email: "business@barangaysanisidro.gov.ph",
      location: "Barangay Hall - 2nd Floor",
      hours: "Mon-Fri 8:00 AM - 4:00 PM",
      services: ["Business Permits", "Renewals", "Consultations"]
    },
    {
      name: "Senior Citizens Office",
      contact: "+63 912 345 6797", 
      email: "seniors@barangaysanisidro.gov.ph",
      location: "Senior Citizens Center",
      hours: "Mon-Fri 9:00 AM - 12:00 PM",
      services: ["ID Processing", "Benefits", "Activities"]
    },
    {
      name: "Youth Development Office",
      contact: "+63 912 345 6798",
      email: "youth@barangaysanisidro.gov.ph", 
      location: "Youth Center",
      hours: "Mon-Sat 2:00 PM - 6:00 PM",
      services: ["Programs", "Training", "Events"]
    }
  ];

  const quickGuides = [
    {
      title: "How to Get Barangay Certificate",
      steps: ["Visit Document Office", "Bring Valid ID", "Fill out form", "Pay fee", "Wait for processing"],
      estimatedTime: "30 minutes",
      requirements: ["Valid Government ID", "Proof of Residency"]
    },
    {
      title: "Business Permit Application",
      steps: ["Prepare requirements", "Visit Business Office", "Submit documents", "Pay fees", "Schedule inspection"],
      estimatedTime: "1-2 weeks", 
      requirements: ["DTI Registration", "Fire Safety Permit", "Sanitary Permit"]
    },
    {
      title: "Report Emergency",
      steps: ["Call emergency number", "Provide location", "Describe situation", "Stay on line", "Follow instructions"],
      estimatedTime: "Immediate",
      requirements: ["Clear communication", "Accurate location"]
    }
  ];

  const autocompleteOptions = [
    "Maria Santos (Barangay Captain)",
    "Roberto Cruz (Secretary)",
    "Police Emergency",
    "Document Processing Office",
    "Upcoming Vaccination Drive"
  ];

  const newsItems = [
    { title: "Upcoming Vaccination Drive", date: "2025-07-01", summary: "Free vaccines at the barangay hall.", category: "Health" },
    { title: "Barangay Fiesta Announced", date: "2025-08-10", summary: "Annual fiesta with parade and events.", category: "Events" },
    { title: "New Business Permit Guidelines", date: "2025-06-20", summary: "Updated requirements for business permits.", category: "Business" }
  ];

  const announcements = [
    { title: "Water Interruption Notice", content: "There will be a scheduled water interruption on July 3, 2025 from 8AM-5PM." },
    { title: "Barangay Hall Renovation", content: "Renovation works will start July 10, 2025. Some offices will be temporarily relocated." }
  ];

  // Category Filters
  const categoryFilters = [
    { label: "All", value: "all" },
    { label: "Officials", value: "officials" },
    { label: "Services", value: "services" },
    { label: "Emergency", value: "emergency" }
  ];

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Directory</h1>
          <p className="text-gray-600">Find officials, services, and important contacts</p>
        </div>

        {/* Search Bar with Auto-complete */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search for officials, services, or departments..." 
                className="pl-10"
                value={search}
                onChange={e => { setSearch(e.target.value); setShowAutocomplete(true); }}
                onBlur={() => setTimeout(() => setShowAutocomplete(false), 200)}
                onFocus={() => setShowAutocomplete(true)}
              />
              {showAutocomplete && search && (
                <div className="absolute left-0 right-0 mt-1 bg-white border rounded shadow z-10">
                  {autocompleteOptions.filter(opt => opt.toLowerCase().includes(search.toLowerCase())).map((opt, i) => (
                    <div key={i} className="px-4 py-2 hover:bg-blue-50 cursor-pointer" onMouseDown={() => { setSearch(opt); setShowAutocomplete(false); }}>{opt}</div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          {/* Category Filters */}
          {categoryFilters.map((filter) => (
            <Button key={filter.value} size="sm" variant={category === filter.value ? "default" : "outline"} onClick={() => setCategory(filter.value)}>{filter.label}</Button>
          ))}
        </div>

        {/* Emergency Contacts */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Contacts
            </CardTitle>
            <CardDescription className="text-red-600">Important numbers for urgent situations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="p-3 bg-white rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-700">{contact.service}</h4>
                  <p className="text-2xl font-bold text-red-600">{contact.number}</p>
                  <p className="text-xs text-red-600">{contact.description}</p>
                  <Badge variant="outline" className="mt-2 text-red-600 border-red-600">
                    {contact.available}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Barangay Officials */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Barangay Officials
              </CardTitle>
              <CardDescription>Contact your local government representatives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Cards: Add Bookmark, Share, Text-to-Speech */}
              {barangayOfficials.map((official) => (
                <div key={official.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={official.avatar} />
                      <AvatarFallback>{official.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium">{official.name}</h4>
                        {official.priority === "high" && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                        {/* Bookmark Button */}
                        <Button size="icon" variant="ghost" title="Bookmark"><Star className="h-4 w-4" /></Button>
                        {/* Share Button */}
                        <Button size="icon" variant="ghost" title="Share"><ExternalLink className="h-4 w-4" /></Button>
                        {/* Text-to-Speech Button */}
                        <Button size="icon" variant="ghost" title="Text to Speech">🔊</Button>
                      </div>
                      <p className="text-sm text-blue-600 font-medium">{official.position}</p>
                      <p className="text-sm text-gray-600">{official.department}</p>
                      
                      <div className="mt-2 space-y-1 text-xs text-gray-500">
                        <p className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {official.phone}
                        </p>
                        <p className="flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {official.email}
                        </p>
                        <p className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {official.office}
                        </p>
                        <p className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {official.schedule}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Guides */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Guides</CardTitle>
              <CardDescription>Step-by-step process guides</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickGuides.map((guide, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">{guide.title}</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p><strong>Time:</strong> {guide.estimatedTime}</p>
                    <p><strong>Requirements:</strong></p>
                    <ul className="ml-4 list-disc">
                      {guide.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button size="sm" variant="outline" className="mt-2 w-full">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Guide
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Important Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Important Services & Offices
            </CardTitle>
            <CardDescription>Key services and their contact information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {importantServices.map((service, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">{service.name}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {service.contact}
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      {service.email}
                    </p>
                    <p className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {service.location}
                    </p>
                    <p className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.hours}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500 mb-1">Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.services.map((svc, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {svc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* News Grid with Sorting */}
        <Card>
          <CardHeader>
            <CardTitle>Barangay News</CardTitle>
            <CardDescription>Latest updates and announcements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end mb-2">
              <Label className="mr-2">Sort by:</Label>
              <Select defaultValue="date">
                <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsItems.map((news, i) => (
                <Card key={i} className="bg-blue-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-1">{news.title}</h4>
                    <p className="text-xs text-gray-600 mb-1">{news.date} | {news.category}</p>
                    <p className="text-sm text-gray-700 mb-2">{news.summary}</p>
                    <Button size="sm" variant="outline">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Announcement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {announcements.map((a, i) => (
            <Card key={i} className="bg-yellow-50">
              <CardContent className="p-4">
                <h4 className="font-bold mb-1">{a.title}</h4>
                <p className="text-sm text-gray-700">{a.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContactDirectory;
