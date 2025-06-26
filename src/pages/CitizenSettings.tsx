
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Bell, Shield, Eye, Palette, Globe, Calendar, Edit, Save } from "lucide-react";

const CitizenSettings = () => {
  const userProfile = {
    firstName: "Juan",
    lastName: "dela Cruz", 
    middleName: "Santos",
    email: "juan.delacruz@email.com",
    phone: "+63 912 345 6789",
    address: "123 Mabini Street, Barangay San Isidro",
    dateOfBirth: "1985-03-15",
    civilStatus: "Married",
    occupation: "Teacher",
    emergencyContact: {
      name: "Maria dela Cruz",
      relationship: "Spouse",
      phone: "+63 912 345 6790"
    },
    registrationDate: "2023-01-15",
    lastLogin: "2024-06-26 09:30 AM"
  };

  const notificationPreferences = [
    {
      category: "Document Updates",
      description: "Get notified when your document requests are processed",
      email: true,
      sms: true,
      push: true
    },
    {
      category: "Appointment Reminders", 
      description: "Receive reminders for upcoming appointments",
      email: true,
      sms: true,
      push: true
    },
    {
      category: "Community Announcements",
      description: "Stay updated with barangay news and events",
      email: true,
      sms: false,
      push: true
    },
    {
      category: "Emergency Alerts",
      description: "Important safety and security notifications",
      email: true,
      sms: true,
      push: true
    },
    {
      category: "System Updates",
      description: "Technical updates and maintenance notices",
      email: false,
      sms: false,
      push: true
    }
  ];

  const accessibilitySettings = [
    {
      setting: "High Contrast Mode",
      description: "Increase color contrast for better visibility",
      enabled: false
    },
    {
      setting: "Large Text",
      description: "Increase font size throughout the application",
      enabled: false
    },
    {
      setting: "Screen Reader Support",
      description: "Enable compatibility with screen reading software",  
      enabled: false
    },
    {
      setting: "Reduced Motion",
      description: "Minimize animations and transitions",
      enabled: false
    }
  ];

  const privacySettings = [
    {
      setting: "Profile Visibility",
      description: "Control who can see your profile information",
      options: ["Public", "Barangay Officials Only", "Private"],
      current: "Barangay Officials Only"
    },
    {
      setting: "Contact Information Sharing",
      description: "Allow sharing of contact info for emergencies",
      enabled: true
    },
    {
      setting: "Activity Tracking",
      description: "Track usage for service improvement",
      enabled: true
    },
    {
      setting: "Data Export",
      description: "Download your personal data",
      enabled: true
    }
  ];

  const securityLog = [
    {
      activity: "Password Changed",
      date: "2024-06-20 10:30 AM",
      device: "Mobile Browser", 
      location: "Barangay San Isidro"
    },
    {
      activity: "Successful Login",
      date: "2024-06-26 09:30 AM",
      device: "Desktop Browser",
      location: "Barangay San Isidro"
    },
    {
      activity: "Email Updated",
      date: "2024-06-15 02:15 PM",
      device: "Mobile App",
      location: "Barangay San Isidro"
    }
  ];

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600">Manage your profile, preferences, and security settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal information and contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Change Photo
                  </Button>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue={userProfile.firstName} />
                </div>
                <div>
                  <Label htmlFor="middleName">Middle Name</Label>
                  <Input id="middleName" defaultValue={userProfile.middleName} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue={userProfile.lastName} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue={userProfile.email} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue={userProfile.phone} />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Complete Address</Label>
                <Textarea id="address" defaultValue={userProfile.address} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="birthDate">Date of Birth</Label>
                  <Input id="birthDate" type="date" defaultValue={userProfile.dateOfBirth} />
                </div>
                <div>
                  <Label>Civil Status</Label>
                  <Select defaultValue={userProfile.civilStatus.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input id="occupation" defaultValue={userProfile.occupation} />
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Emergency Contact</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="emergencyName">Full Name</Label>
                    <Input id="emergencyName" defaultValue={userProfile.emergencyContact.name} />
                  </div>
                  <div>
                    <Label htmlFor="relationship">Relationship</Label>
                    <Input id="relationship" defaultValue={userProfile.emergencyContact.relationship} />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Phone Number</Label>
                    <Input id="emergencyPhone" defaultValue={userProfile.emergencyContact.phone} />
                  </div>
                </div>
              </div>

              <Button className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Save Profile Changes
              </Button>
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card>
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Account Status</span>
                  <Badge className="bg-green-600">Verified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Resident Status</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Member Since</span>
                  <span className="text-sm text-gray-600">{userProfile.registrationDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Last Login</span>
                  <span className="text-sm text-gray-600">{userProfile.lastLogin}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Quick Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Documents Requested</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Services Booked</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complaints Filed</span>
                    <span className="font-medium">3</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Security & Privacy
            </CardTitle>
            <CardDescription>Manage your account security and privacy preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Password & Authentication</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Setup Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    View Active Sessions
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Privacy Controls</h4>
                <div className="space-y-3">
                  {privacySettings.map((setting, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{setting.setting}</p>
                        <p className="text-xs text-gray-600">{setting.description}</p>
                      </div>
                      {setting.options ? (
                        <Select defaultValue={setting.current?.toLowerCase().replace(/ /g, '-')}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {setting.options.map((option) => (
                              <SelectItem key={option} value={option.toLowerCase().replace(/ /g, '-')}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Switch defaultChecked={setting.enabled} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Choose how you want to receive notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div></div>
                <div className="text-center text-sm font-medium">Email</div>
                <div className="text-center text-sm font-medium">SMS</div>
                <div className="text-center text-sm font-medium">Push</div>
              </div>
              {notificationPreferences.map((pref, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{pref.category}</p>
                    <p className="text-xs text-gray-600">{pref.description}</p>
                  </div>
                  <div className="text-center">
                    <Switch defaultChecked={pref.email} />
                  </div>
                  <div className="text-center">
                    <Switch defaultChecked={pref.sms} />
                  </div>
                  <div className="text-center">
                    <Switch defaultChecked={pref.push} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Accessibility & Language */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5" />
                Accessibility Settings
              </CardTitle>
              <CardDescription>Customize the interface for your needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {accessibilitySettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{setting.setting}</p>
                    <p className="text-xs text-gray-600">{setting.description}</p>
                  </div>
                  <Switch defaultChecked={setting.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Language & Region
              </CardTitle>
              <CardDescription>Set your preferred language and region</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Primary Language</Label>
                <Select defaultValue="english">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="filipino">Filipino</SelectItem>
                    <SelectItem value="tagalog">Tagalog</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Date Format</Label>
                <Select defaultValue="mm-dd-yyyy">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Time Zone</Label>
                <Select defaultValue="manila">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manila">Manila (GMT+8)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Recent Security Activity
            </CardTitle>
            <CardDescription>Monitor your account security</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {securityLog.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{activity.activity}</p>
                    <p className="text-xs text-gray-600">{activity.device} • {activity.location}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.date}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Full Security Log
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CitizenSettings;
