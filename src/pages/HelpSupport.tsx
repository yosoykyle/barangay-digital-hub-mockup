
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HelpSupport = () => {
  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-600">Get assistance and support</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Support Center</CardTitle>
            <CardDescription>This is a prototype - help resources would be implemented here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">FAQs, guides, and support ticket system would be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HelpSupport;
