
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SupportTickets = () => {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Support Review</h1>
          <p className="text-gray-600">Manage support tickets</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Support Management</CardTitle>
            <CardDescription>This is a prototype - ticket management would be implemented here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Support ticket table and action log would be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SupportTickets;
