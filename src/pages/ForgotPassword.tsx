import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@example.com");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>Reset your password securely</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          {!otpSent && (
            <Button className="w-full" onClick={() => setOtpSent(true)}>
              Send OTP
            </Button>
          )}
          {otpSent && (
            <>
              <div>
                <Label htmlFor="otp">OTP</Label>
                <Input id="otp" type="text" value={otp} onChange={e => setOtp(e.target.value)} placeholder="123456" />
                <div className="text-xs text-gray-500 mt-1">OTP sent to: {email}</div>
              </div>
              <div>
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="********" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="********" />
              </div>
              <Button className="w-full">Submit</Button>
            </>
          )}
          <Button variant="link" className="w-full mt-2" onClick={() => navigate("/")}>Back to Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
