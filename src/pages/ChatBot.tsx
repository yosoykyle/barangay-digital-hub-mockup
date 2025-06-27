
import { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Mic, MicOff, Bot, User, Clock, FileText, Calendar, Users, AlertCircle } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "suggestion" | "quick_action";
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your Barangay Digital Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(Date.now() - 30000),
    },
    {
      id: "2", 
      content: "How do I request a barangay clearance?",
      sender: "user",
      timestamp: new Date(Date.now() - 25000),
    },
    {
      id: "3",
      content: "I can help you with that! To request a barangay clearance, you'll need to:\n\n1. Go to 'Request Document' section\n2. Select 'Barangay Clearance'\n3. Fill out the required information\n4. Upload necessary documents\n5. Submit your request\n\nWould you like me to guide you there directly?",
      sender: "bot", 
      timestamp: new Date(Date.now() - 20000),
    },
    {
      id: "4",
      content: "What documents do I need?",
      sender: "user",
      timestamp: new Date(Date.now() - 15000),
    },
    {
      id: "5",
      content: "For a Barangay Clearance, you typically need:\n\n📄 **Required Documents:**\n• Valid Government ID (original and photocopy)\n• Cedula/Community Tax Certificate\n• Recent 2x2 ID Photo\n• Proof of Residency (utility bill, lease contract, etc.)\n\n💰 **Fee:** ₱50.00\n⏱️ **Processing Time:** 2-3 business days\n\nIs there anything specific you'd like to know about the process?",
      sender: "bot",
      timestamp: new Date(Date.now() - 10000),
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    {
      text: "Track my request",
      icon: FileText,
      action: "track_request"
    },
    {
      text: "Schedule appointment", 
      icon: Calendar,
      action: "schedule_appointment"
    },
    {
      text: "Contact officials",
      icon: Users,
      action: "contact_officials"
    },
    {
      text: "File a complaint",
      icon: AlertCircle,
      action: "file_complaint"
    },
    {
      text: "What services are available?",
      icon: Bot,
      action: "available_services"
    },
    {
      text: "Office hours and location",
      icon: Clock,
      action: "office_info"
    }
  ];

  const quickResponses = {
    track_request: "I can help you track your requests. You currently have 2 active requests:\n\n1. **Barangay Certificate** - Processing (BR-2024-001)\n2. **Business Permit** - Under Review (BR-2024-002)\n\nWould you like details on any of these?",
    schedule_appointment: "I can help you schedule an appointment. What type of service do you need?\n\n• Document pickup\n• Consultation with officials\n• Business permit application\n• Community service registration",
    contact_officials: "Here are the key contacts:\n\n**Barangay Captain:** Juan Dela Cruz\n📞 (02) 123-4567\n📧 captain@barangay.gov.ph\n\n**Secretary:** Maria Santos\n📞 (02) 123-4568\n📧 secretary@barangay.gov.ph\n\nOffice Hours: Mon-Fri, 8AM-5PM",
    file_complaint: "I can guide you through filing a complaint. What type of issue would you like to report?\n\n• Noise complaints\n• Public safety concerns\n• Infrastructure issues\n• Neighborhood disputes\n• Other concerns",
    available_services: "Here are our available digital services:\n\n🏛️ **Document Services:**\n• Barangay Certificate/Clearance\n• Certificate of Indigency\n• Business Permits\n\n📅 **Appointment Services:**\n• Official consultations\n• Document pickup\n\n📞 **Support Services:**\n• Complaint filing\n• Information requests\n• Community updates",
    office_info: "**Barangay San Isidro Office Information:**\n\n📍 **Address:**\nBarangay Hall, San Isidro Street\nQuezon City, Metro Manila\n\n🕒 **Office Hours:**\nMonday - Friday: 8:00 AM - 5:00 PM\nSaturday: 8:00 AM - 12:00 PM\nSunday: Closed\n\n📞 **Hotline:** (02) 123-BRGAY\n📧 **Email:** info@sanisidro.gov.ph"
  };

  const conversationHistory = [
    { date: "Today", count: 5 },
    { date: "Yesterday", count: 3 },
    { date: "June 25", count: 2 },
    { date: "June 24", count: 1 },
    { date: "June 20", count: 4 }
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(content),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('certificate') || input.includes('clearance')) {
      return "I can help you with certificates and clearances! Here are the most common ones:\n\n• **Barangay Certificate** - General purpose (₱30)\n• **Barangay Clearance** - Business/employment (₱50)\n• **Certificate of Indigency** - Financial assistance (₱20)\n\nWhich one do you need? I can guide you through the application process.";
    }
    
    if (input.includes('business') || input.includes('permit')) {
      return "For business permits, you'll need:\n\n📋 **Requirements:**\n• Barangay Clearance\n• Valid ID\n• Business registration documents\n• Location sketch/map\n\n💰 **Fee:** ₱200-500 (depending on business type)\n⏱️ **Processing:** 5-7 business days\n\nWould you like to start the application process?";
    }
    
    if (input.includes('schedule') || input.includes('appointment')) {
      return "I can help you schedule an appointment! Available slots:\n\n📅 **This Week:**\n• Tomorrow, 2:00 PM - 4:00 PM\n• Friday, 9:00 AM - 11:00 AM\n\n📅 **Next Week:**\n• Monday, 10:00 AM - 12:00 PM\n• Wednesday, 1:00 PM - 3:00 PM\n\nWhat type of appointment do you need?";
    }
    
    if (input.includes('track') || input.includes('status')) {
      return "Let me check your request status. You have:\n\n📄 **Active Requests:**\n• BR-2024-001: Barangay Certificate - Ready for pickup!\n• BR-2024-002: Business Permit - Under review\n\n✅ **Completed:**\n• BR-2024-000: Barangay Clearance - Picked up June 20\n\nWould you like details on any specific request?";
    }
    
    if (input.includes('complaint') || input.includes('report')) {
      return "I can help you file a complaint. What type of issue are you reporting?\n\n🔊 **Noise Complaints**\n🚨 **Safety Concerns** \n🛣️ **Road/Infrastructure Issues**\n🏠 **Neighbor Disputes**\n💡 **Utilities Problems**\n\nPlease select a category or describe your concern.";
    }
    
    return "I understand you're asking about '" + userInput + "'. Let me help you with that! Here are some things I can assist you with:\n\n• Document requests and applications\n• Appointment scheduling\n• Request tracking\n• Filing complaints\n• Contact information\n• Service information\n\nCould you be more specific about what you need help with?";
  };

  const handleSuggestedPrompt = (action: string, text: string) => {
    const response = quickResponses[action as keyof typeof quickResponses];
    if (response) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: text,
        sender: "user",
        timestamp: new Date(),
      };
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage, botMessage]);
    }
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input simulation - in real app, this would use Web Speech API
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputMessage("How do I renew my business permit?");
      }, 3000);
    }
  };

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <Bot className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Barangay Assistant</h1>
              <p className="text-blue-100 mt-2">Get instant help with barangay services and information</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Window */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <span>Chat Assistant</span>
                  {isListening && <Badge variant="destructive" className="animate-pulse">Listening...</Badge>}
                </CardTitle>
                <CardDescription>Ask me anything about barangay services</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col space-y-4">
                {/* Messages */}
                <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex items-start space-x-3 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                          {message.sender === 'user' ? 
                            <User className="h-4 w-4 text-white" /> : 
                            <Bot className="h-4 w-4 text-white" />
                          }
                        </div>
                        <div className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                          <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                          <div className={`text-xs mt-2 opacity-70 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-full bg-gray-600">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Suggested Prompts */}
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Quick actions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedPrompts.slice(0, 4).map((prompt, index) => {
                      const Icon = prompt.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => handleSuggestedPrompt(prompt.action, prompt.text)}
                        >
                          <Icon className="h-3 w-3 mr-1" />
                          {prompt.text}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Input Area */}
                <div className="flex space-x-2">
                  <Button
                    variant={isListening ? "destructive" : "outline"}
                    size="icon"
                    onClick={toggleVoiceInput}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                    className="flex-1"
                  />
                  <Button onClick={() => sendMessage(inputMessage)} disabled={!inputMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* All Suggested Prompts */}
            <Card>
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
                <CardDescription>Click to get quick answers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {suggestedPrompts.map((prompt, index) => {
                  const Icon = prompt.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => handleSuggestedPrompt(prompt.action, prompt.text)}
                    >
                      <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{prompt.text}</span>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Conversation History */}
            <Card>
              <CardHeader>
                <CardTitle>Chat History</CardTitle>
                <CardDescription>Previous conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {conversationHistory.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">{session.date}</p>
                        <p className="text-xs text-gray-500">{session.count} messages</p>
                      </div>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active Requests</span>
                    <Badge>2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pending Pickups</span>
                    <Badge variant="secondary">1</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Appointments</span>
                    <Badge variant="outline">0</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatBot;
