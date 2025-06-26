
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, User, Phone, CheckCircle, AlertCircle } from "lucide-react";

const ScheduleService = () => {
  const availableServices = [
    {
      id: "medical-checkup",
      name: "Medical Check-up",
      description: "Free medical consultation and basic health screening",
      duration: "30 minutes",
      availability: "Tue, Thu - 8:00 AM to 12:00 PM",
      location: "Barangay Health Center",
      requirements: "Valid ID, Barangay Certificate"
    },
    {
      id: "legal-consultation",
      name: "Legal Consultation",
      description: "Free legal advice for residents",
      duration: "45 minutes", 
      availability: "Mon, Wed, Fri - 1:00 PM to 5:00 PM",
      location: "Barangay Hall - Conference Room",
      requirements: "Valid ID, relevant documents"
    },
    {
      id: "senior-assistance",
      name: "Senior Citizen Services",
      description: "Assistance and consultation for senior citizens",
      duration: "20 minutes",
      availability: "Daily - 9:00 AM to 11:00 AM",
      location: "Senior Citizens Center",
      requirements: "Senior Citizen ID"
    },
    {
      id: "business-consultation", 
      name: "Business Permit Consultation",
      description: "Guidance for business permit applications",
      duration: "60 minutes",
      availability: "Mon-Fri - 8:00 AM to 4:00 PM",
      location: "Business Permits Office",
      requirements: "Business documents, Valid ID"
    }
  ];

  const upcomingAppointments = [
    {
      id: "APPT-001",
      service: "Medical Check-up",
      date: "2024-07-05",
      time: "9:00 AM",
      status: "Confirmed",
      location: "Barangay Health Center",
      notes: "Bring previous medical records if available"
    },
    {
      id: "APPT-002",
      service: "Legal Consultation", 
      date: "2024-07-08",
      time: "2:00 PM",
      status: "Pending Confirmation",
      location: "Barangay Hall",
      notes: "Property dispute consultation"
    }
  ];

  const recentAppointments = [
    {
      id: "APPT-003",
      service: "Business Permit Consultation",
      date: "2024-06-20",
      time: "10:00 AM", 
      status: "Completed",
      location: "Business Permits Office",
      rating: 5,
      feedback: "Very helpful staff, clear instructions provided"
    },
    {
      id: "APPT-004",
      service: "Senior Citizen Services",
      date: "2024-06-15",
      time: "9:30 AM",
      status: "Completed", 
      location: "Senior Citizens Center",
      rating: 4,
      feedback: "Good service, but waiting time was a bit long"
    }
  ];

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Book Service</h1>
          <p className="text-gray-600">Schedule appointments for barangay services</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Booking Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule New Appointment
              </CardTitle>
              <CardDescription>Select a service and preferred time slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="client-name">Full Name</Label>
                  <Input id="client-name" placeholder="Juan dela Cruz" />
                </div>
                <div>
                  <Label htmlFor="contact-number">Contact Number</Label>
                  <Input id="contact-number" placeholder="+63 912 345 6789" />
                </div>
              </div>

              <div>
                <Label>Service Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableServices.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferred-date">Preferred Date</Label>
                  <Input id="preferred-date" type="date" />
                </div>
                <div>
                  <Label>Preferred Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="purpose">Purpose/Notes</Label>
                <Textarea 
                  id="purpose" 
                  placeholder="Brief description of your concern or purpose for the appointment"
                  className="min-h-20"
                />
              </div>

              <Button className="w-full">
                Schedule Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Available Services */}
          <Card>
            <CardHeader>
              <CardTitle>Available Services</CardTitle>
              <CardDescription>Choose from our service offerings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableServices.slice(0, 3).map((service) => (
                <div key={service.id} className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">{service.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration}
                    </p>
                    <p className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {service.availability}
                    </p>
                    <p className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {service.location}
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Services
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* My Appointments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your scheduled appointments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-sm">{appointment.service}</h4>
                        <Badge 
                          variant={appointment.status === "Confirmed" ? "default" : "secondary"}
                          className={appointment.status === "Confirmed" ? "bg-green-600" : "bg-yellow-600"}
                        >
                          {appointment.status === "Confirmed" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {appointment.status === "Pending Confirmation" && <AlertCircle className="mr-1 h-3 w-3" />}
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {appointment.date} at {appointment.time}
                        </p>
                        <p className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {appointment.location}
                        </p>
                        <p>ID: #{appointment.id}</p>
                        {appointment.notes && <p className="text-blue-600">Note: {appointment.notes}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline">Reschedule</Button>
                    <Button size="sm" variant="destructive">Cancel</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Recent Appointments
              </CardTitle>
              <CardDescription>Your appointment history</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-sm">{appointment.service}</h4>
                        <Badge variant="default" className="bg-green-600">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {appointment.date} at {appointment.time}
                        </p>
                        <p className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {appointment.location}
                        </p>
                        <p>Rating: {"★".repeat(appointment.rating)}{"☆".repeat(5-appointment.rating)}</p>
                        {appointment.feedback && <p className="text-green-600">"{appointment.feedback}"</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All History
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScheduleService;
