import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/hero-login.svg"; // Add a hero illustration (place your SVG in src/assets/)
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
const Index = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("email");
  const [highContrast, setHighContrast] = useState(false);
  const [largeFonts, setLargeFonts] = useState(false);
  const [showOtpPrompt, setShowOtpPrompt] = useState(false);
  const [emailInput, setEmailInput] = useState("user@example.com");
  const [otpInput, setOtpInput] = useState("");
  // Track which role is logging in
  const [loginRole, setLoginRole] = useState<"citizen" | "admin">("citizen");

  const handleLogin = (userType: "citizen" | "admin") => {
    if (userType === "citizen") {
      navigate("/citizen/dashboard");
    } else {
      navigate("/admin/dashboard");
    }
  };
  return <div className={`min-h-screen h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-stretch justify-center p-0 md:p-12 ${highContrast ? 'contrast-125' : ''} ${largeFonts ? 'text-lg' : ''}`} style={{
    minHeight: '100vh',
    height: '100vh',
    overflow: 'hidden'
  }}>
      <div className="w-full max-w-7xl flex flex-col md:flex-row bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-blue-100 h-full">
        {/* Left: Illustration/Branding */}
        <div className="hidden md:flex flex-col justify-center items-center flex-1 bg-gradient-to-br from-blue-100 to-blue-200 h-full p-0">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img src={heroImg} alt="Welcome" className="w-[420px] h-[420px] object-contain mb-10 drop-shadow-2xl" />
            <h2 className="text-5xl font-extrabold text-blue-900 mb-4">Barangay Digital Hub</h2>
            <p className="text-2xl text-blue-700 text-center max-w-lg">Empowering communities with seamless digital services and accessibility for all.</p>
          </div>
        </div>
        {/* Right: Login Form */}
        <div className="flex-1 flex flex-col justify-start items-center p-6 md:p-8 space-y-4 h-full">
          {/* Header - always visible */}
          <div className="text-center space-y-2 w-full pt-2">
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

          {/* Scrollable Form Section */}
          <div className="w-full flex-1 flex flex-col items-center space-y-4 overflow-y-auto pb-4">
            {/* Accessibility Panel as Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full mb-2">Accessibility Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem asChild>
                  <div className="flex items-center justify-between w-full">
                    <Label htmlFor="contrast">High Contrast</Label>
                    <Switch id="contrast" checked={highContrast} onCheckedChange={setHighContrast} />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <div className="flex items-center justify-between w-full">
                    <Label htmlFor="fonts">Large Fonts</Label>
                    <Switch id="fonts" checked={largeFonts} onCheckedChange={setLargeFonts} />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <div className="flex items-center justify-between w-full">
                    <Label htmlFor="speech">Text-to-Speech</Label>
                    <Switch id="speech" />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Card */}
            <Card className="w-full">
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
                      <Input id="email" type="email" placeholder="user@example.com" value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <div className="flex justify-between items-center">
                      <Button variant="link" className="p-0 text-blue-600" onClick={() => navigate("/forgot-password")}>Forgot Password?</Button>
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => { setShowOtpPrompt(true); setLoginRole("citizen"); }}>
                        Login as Citizen
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => { setShowOtpPrompt(true); setLoginRole("admin"); }}>
                        Admin Login
                      </Button>
                    </div>
                    {showOtpPrompt && <div className="space-y-2 mt-4 border-t pt-4">
                        <Label htmlFor="otp">Enter OTP</Label>
                        <Input id="otp" type="text" placeholder="123456" value={otpInput} onChange={e => setOtpInput(e.target.value)} />
                        <div className="text-xs text-gray-500">Sample OTP code: 123456</div>
                        <Button onClick={() => handleLogin(loginRole)} className="w-full mt-2 bg-blue-700 hover:bg-blue-600">Submit OTP</Button>
                      </div>}
                  </TabsContent>
                  <TabsContent value="qr" className="space-y-4 mt-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">QR scan prompt: Point your camera at the QR code to login</p>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => { setShowOtpPrompt(true); setLoginRole("citizen"); }}>
                        Scan QR Code
                      </Button>
                    </div>
                    {showOtpPrompt && <div className="space-y-2 mt-4 border-t pt-4">
                        <Label htmlFor="otp-qr">Enter OTP</Label>
                        <Input id="otp-qr" type="text" placeholder="123456" value={otpInput} onChange={e => setOtpInput(e.target.value)} />
                        <div className="text-xs text-gray-500">Sample OTP code: 123456</div>
                        <Button className="w-full mt-2" onClick={() => handleLogin(loginRole)}>Submit OTP</Button>
                      </div>}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Quick Access */}
            <Card className="w-full">
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
      </div>
    </div>;
};
export default Index;