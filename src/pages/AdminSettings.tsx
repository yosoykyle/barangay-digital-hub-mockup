
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminSettings = () => {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Settings</h1>
          <p className="text-gray-600">System and account settings</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Administrator Settings</CardTitle>
            <CardDescription>This is a prototype - admin settings would be implemented here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Profile editor, security settings, and system preferences would be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminSettings;
