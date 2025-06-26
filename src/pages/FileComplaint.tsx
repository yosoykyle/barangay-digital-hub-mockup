
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FileComplaint = () => {
  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">File Complaint</h1>
          <p className="text-gray-600">Submit and track your complaints</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Complaint Form</CardTitle>
            <CardDescription>This is a prototype - complaint form would be implemented here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Form components and status timeline would be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FileComplaint;
