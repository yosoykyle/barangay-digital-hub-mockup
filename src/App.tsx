
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CitizenDashboard from "./pages/CitizenDashboard";
import RequestDocument from "./pages/RequestDocument";
import TrackRequest from "./pages/TrackRequest";
import FileComplaint from "./pages/FileComplaint";
import ScheduleService from "./pages/ScheduleService";
import ContactDirectory from "./pages/ContactDirectory";
import HelpSupport from "./pages/HelpSupport";
import CitizenSettings from "./pages/CitizenSettings";
import ChatBot from "./pages/ChatBot";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import Analytics from "./pages/Analytics";
import DirectoryManagement from "./pages/DirectoryManagement";
import SupportTickets from "./pages/SupportTickets";
import AdminSettings from "./pages/AdminSettings";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
          <Route path="/citizen/request-document" element={<RequestDocument />} />
          <Route path="/citizen/track-request" element={<TrackRequest />} />
          <Route path="/citizen/file-complaint" element={<FileComplaint />} />
          <Route path="/citizen/schedule-service" element={<ScheduleService />} />
          <Route path="/citizen/contact-directory" element={<ContactDirectory />} />
          <Route path="/citizen/help-support" element={<HelpSupport />} />
          <Route path="/citizen/settings" element={<CitizenSettings />} />
          <Route path="/citizen/chatbot" element={<ChatBot />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/directory" element={<DirectoryManagement />} />
          <Route path="/admin/support-tickets" element={<SupportTickets />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
