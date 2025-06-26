
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactDirectory = () => {
  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Directory</h1>
          <p className="text-gray-600">Find officials and services</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Directory</CardTitle>
            <CardDescription>This is a prototype - contact directory would be implemented here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Search bar, contact cards, and announcements would be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ContactDirectory;
