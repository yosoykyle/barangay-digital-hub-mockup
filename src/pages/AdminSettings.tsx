import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { User, Shield, Bell, Database, Globe, Mail, Lock, Settings, Save, RefreshCw } from "lucide-react";
import { useState } from "react";

const AdminSettings = () => {
  const [profileData, setProfileData] = useState({
    name: "Administrator",
    email: "admin@barangay-hillside.gov.ph",
    phone: "+63 912 345 6789",
    position: "System Administrator",
    lastLogin: "2024-06-26 08:30 AM"
  });

  const [systemSettings, setSystemSettings] = useState({
    emailNotifications: true,
    smsAlerts: false,
    maintenanceMode: false,
    autoBackup: true,
    publicRegistration: true,
    documentApproval: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordPolicy: "strong",
    loginAttempts: "5"
  });

  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [showDeactivate, setShowDeactivate] = useState(false);

  const systemStatus = [
    { label: "System Status", value: "Online", status: "success", icon: Globe },
    { label: "Database", value: "Connected", status: "success", icon: Database },
    { label: "Email Service", value: "Active", status: "success", icon: Mail },
    { label: "Backup Status", value: "Completed", status: "success", icon: RefreshCw },
  ];

  const recentActivities = [
    { action: "System backup completed", time: "2024-06-26 03:00 AM", type: "system" },
    { action: "User password policy updated", time: "2024-06-25 02:15 PM", type: "security" },
    { action: "Email template modified", time: "2024-06-25 10:30 AM", type: "content" },
    { action: "Database maintenance performed", time: "2024-06-24 11:45 PM", type: "system" },
    { action: "New user role created", time: "2024-06-24 04:20 PM", type: "user" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "text-green-600";
      case "warning": return "text-yellow-600";
      case "error": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "system": return Database;
      case "security": return Shield;
      case "user": return User;
      case "content": return Settings;
      default: return Settings;
    }
  };

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Settings</h1>
            <p className="text-gray-600">System and account settings</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {systemStatus.map((status, index) => {
            const Icon = status.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Icon className={`h-6 w-6 ${getStatusColor(status.status)}`} />
                    <div>
                      <p className="text-sm font-medium text-gray-600">{status.label}</p>
                      <p className={`font-semibold ${getStatusColor(status.status)}`}>{status.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Profile Settings
              </CardTitle>
              <CardDescription>Manage your administrator profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Position</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={profileData.position}
                  onChange={(e) => setProfileData({...profileData, position: e.target.value})}
                />
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-600">Last Login: {profileData.lastLogin}</p>
              </div>
              <Button variant="outline" className="w-full" onClick={() => setShowPasswordReset(true)}>
                <Lock className="h-4 w-4 mr-2" />
                Reset Password
              </Button>
              {showPasswordReset && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded shadow-lg w-96">
                    <h3 className="font-bold mb-2">Reset Password (mock)</h3>
                    <input className="mb-2 w-full border rounded p-1" type="password" placeholder="New Password" />
                    <input className="mb-2 w-full border rounded p-1" type="password" placeholder="Confirm New Password" />
                    <div className="flex gap-2 justify-end mt-2">
                      <Button size="sm" onClick={() => setShowPasswordReset(false)}>Save</Button>
                      <Button size="sm" variant="outline" onClick={() => setShowPasswordReset(false)}>Cancel</Button>
                    </div>
                  </div>
                </div>
              )}
              <Button variant="destructive" className="w-full" onClick={() => setShowDeactivate(true)}>
                Deactivate Account
              </Button>
              {showDeactivate && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded shadow-lg w-96">
                    <h3 className="font-bold mb-2 text-red-700">Deactivate Account</h3>
                    <p className="mb-4 text-sm">Are you sure you want to deactivate your admin account? This action cannot be undone.</p>
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="destructive" onClick={() => setShowDeactivate(false)}>Confirm</Button>
                      <Button size="sm" variant="outline" onClick={() => setShowDeactivate(false)}>Cancel</Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <Switch
                  checked={securitySettings.twoFactorAuth}
                  onCheckedChange={(checked) => 
                    setSecuritySettings({...securitySettings, twoFactorAuth: checked})
                  }
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Session Timeout (minutes)</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={securitySettings.sessionTimeout}
                  onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: e.target.value})}
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="120">2 hours</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password Policy</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={securitySettings.passwordPolicy}
                  onChange={(e) => setSecuritySettings({...securitySettings, passwordPolicy: e.target.value})}
                >
                  <option value="basic">Basic (8+ characters)</option>
                  <option value="strong">Strong (8+ chars, mixed case, numbers)</option>
                  <option value="complex">Complex (Strong + special characters)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Max Login Attempts</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={securitySettings.loginAttempts}
                  onChange={(e) => setSecuritySettings({...securitySettings, loginAttempts: e.target.value})}
                >
                  <option value="3">3 attempts</option>
                  <option value="5">5 attempts</option>
                  <option value="10">10 attempts</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              System Configuration
            </CardTitle>
            <CardDescription>Configure system-wide settings and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive system notifications via email</p>
                  </div>
                  <Switch
                    checked={systemSettings.emailNotifications}
                    onCheckedChange={(checked) => 
                      setSystemSettings({...systemSettings, emailNotifications: checked})
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Alerts</p>
                    <p className="text-sm text-gray-600">Critical alerts via SMS</p>
                  </div>
                  <Switch
                    checked={systemSettings.smsAlerts}
                    onCheckedChange={(checked) => 
                      setSystemSettings({...systemSettings, smsAlerts: checked})
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Maintenance Mode</p>
                    <p className="text-sm text-gray-600">Disable public access temporarily</p>
                  </div>
                  <Switch
                    checked={systemSettings.maintenanceMode}
                    onCheckedChange={(checked) => 
                      setSystemSettings({...systemSettings, maintenanceMode: checked})
                    }
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Automatic Backup</p>
                    <p className="text-sm text-gray-600">Daily system backups</p>
                  </div>
                  <Switch
                    checked={systemSettings.autoBackup}
                    onCheckedChange={(checked) => 
                      setSystemSettings({...systemSettings, autoBackup: checked})
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Public Registration</p>
                    <p className="text-sm text-gray-600">Allow new user registrations</p>
                  </div>
                  <Switch
                    checked={systemSettings.publicRegistration}
                    onCheckedChange={(checked) => 
                      setSystemSettings({...systemSettings, publicRegistration: checked})
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto Document Approval</p>
                    <p className="text-sm text-gray-600">Automatically approve certain documents</p>
                  </div>
                  <Switch
                    checked={systemSettings.documentApproval}
                    onCheckedChange={(checked) => 
                      setSystemSettings({...systemSettings, documentApproval: checked})
                    }
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Administrative Activity</CardTitle>
            <CardDescription>Track recent system changes and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon className="h-5 w-5 text-gray-600" />
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {activity.type}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminSettings;
