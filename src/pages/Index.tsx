
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("email");
  const [highContrast, setHighContrast] = useState(false);
  const [largeFonts, setLargeFonts] = useState(false);

  const handleLogin = (userType: "citizen" | "admin") => {
    if (userType === "citizen") {
      navigate("/citizen/dashboard");
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4 ${highContrast ? 'contrast-125' : ''} ${largeFonts ? 'text-lg' : ''}`}>
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-between items-center mb-4">
            <Select defaultValue="en">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fil">Filipino</SelectItem>
                <SelectItem value="dialect">Dialect</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <h1 className="text-3xl font-bold text-blue-900">Barangay Digital Services</h1>
          <p className="text-blue-700">Makipag-ugnayan sa inyong barangay</p>
        </div>

        {/* Accessibility Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Accessibility Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="contrast">High Contrast</Label>
              <Switch 
                id="contrast" 
                checked={highContrast}
                onCheckedChange={setHighContrast}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="fonts">Large Fonts</Label>
              <Switch 
                id="fonts"
                checked={largeFonts}
                onCheckedChange={setLargeFonts}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="speech">Text-to-Speech</Label>
              <Switch id="speech" />
            </div>
          </CardContent>
        </Card>

        {/* Login Card */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to access barangay services</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={loginType} onValueChange={setLoginType}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email Login</TabsTrigger>
                <TabsTrigger value="qr">QR Login</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="juan@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    onClick={() => handleLogin("citizen")}
                  >
                    Login as Citizen
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => handleLogin("admin")}
                  >
                    Admin Login
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="qr" className="space-y-4 mt-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">QR Code Scanner</p>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Point your camera at the QR code to login
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleLogin("citizen")}
                  >
                    Scan QR Code
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Access */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">Need help accessing your account?</p>
              <Button variant="link" className="text-blue-600">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
