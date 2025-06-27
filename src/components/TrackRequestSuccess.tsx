
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Download, Bell } from "lucide-react";

interface TrackRequestSuccessProps {
  onBack: () => void;
  trackingNumber: string;
}

const TrackRequestSuccess = ({ onBack, trackingNumber }: TrackRequestSuccessProps) => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
            <h2 className="text-2xl font-bold text-green-800">Request Submitted Successfully!</h2>
            <p className="text-green-700">
              Your document request has been submitted and is now being processed.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Request Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Tracking Number</p>
              <p className="font-semibold text-lg">{trackingNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-semibold text-blue-600">Submitted</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Submitted Date</p>
              <p className="font-semibold">{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Processing</p>
              <p className="font-semibold">3-5 business days</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What's Next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold">Track Your Request</p>
                <p className="text-sm text-gray-600">
                  Use your tracking number to monitor the progress of your request
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Download className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold">Download When Ready</p>
                <p className="text-sm text-gray-600">
                  You'll be notified when your document is ready for download
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button onClick={onBack} variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Track Request
        </Button>
      </div>
    </div>
  );
};

export default TrackRequestSuccess;
