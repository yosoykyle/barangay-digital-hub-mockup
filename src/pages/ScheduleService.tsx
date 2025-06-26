
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ScheduleService = () => {
  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Book Service</h1>
          <p className="text-gray-600">Schedule appointments and services</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Service Booking</CardTitle>
            <CardDescription>This is a prototype - booking calendar would be implemented here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Calendar view and booking forms would be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ScheduleService;
