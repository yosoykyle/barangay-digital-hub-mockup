import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, MessageSquare, FileText, Phone, Mail, Clock, CheckCircle, AlertCircle, Search } from "lucide-react";
import { useState } from "react";

const HelpSupport = () => {
  const [faqSearch, setFaqSearch] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<{cat: number, idx: number} | null>(null);
  const [ticketConsent, setTicketConsent] = useState(false);

  const faqCategories = [
    {
      category: "Document Requests",
      questions: [
        {
          question: "How long does it take to process a barangay certificate?",
          answer: "Barangay certificates are typically processed within 1-2 working days. For rush requests, same-day processing is available with additional fees."
        },
        {
          question: "What are the requirements for barangay clearance?",
          answer: "You need a valid government ID, proof of residency (utility bill or lease contract), and completed application form. Fee is ₱50."
        },
        {
          question: "Can I request documents online?",
          answer: "Yes! You can submit document requests through our digital portal. Payment can be made online or upon pickup."
        }
      ]
    },
    {
      category: "Services & Appointments",
      questions: [
        {
          question: "How do I schedule a medical check-up?",
          answer: "Visit the 'Book Service' section, select Medical Check-up, and choose your preferred date and time. Bring valid ID and barangay certificate."
        },
        {
          question: "What services are available for senior citizens?",
          answer: "We offer medical assistance, social services, recreational activities, and ID processing for senior citizens. Visit our Senior Citizens Center."
        },
        {
          question: "Can I reschedule my appointment?",
          answer: "Yes, you can reschedule up to 24 hours before your appointment through your dashboard or by calling our office."
        }
      ]
    },
    {
      category: "Complaints & Issues",
      questions: [
        {
          question: "How do I file a complaint?",
          answer: "Use the 'File Complaint' section in your dashboard. Provide detailed information and supporting evidence if available."
        },
        {
          question: "How long does complaint resolution take?",
          answer: "Most complaints are resolved within 7 working days. Emergency issues are addressed within 24 hours."
        },
        {
          question: "Can I track my complaint status?",
          answer: "Yes, you can track your complaint status in real-time through your dashboard. You'll also receive SMS and email updates."
        }
      ]
    }
  ];

  const supportTickets = [
    {
      id: "TICK-001",
      subject: "Cannot access document request form",
      category: "Technical Issue",
      status: "Resolved",
      priority: "Medium",
      dateCreated: "2024-06-20",
      dateResolved: "2024-06-21", 
      response: "Issue has been fixed. Please clear your browser cache and try again."
    },
    {
      id: "TICK-002", 
      subject: "Payment not reflecting in system",
      category: "Payment Issue",
      status: "In Progress",
      priority: "High",
      dateCreated: "2024-06-25",
      dateResolved: null,
      response: "We are investigating the payment issue. Please provide your transaction reference number."
    }
  ];

  const helpResources = [
    {
      title: "Getting Started Guide",
      description: "Complete guide for new users on how to use the digital portal",
      type: "PDF Guide",
      downloadSize: "2.5 MB",
      lastUpdated: "June 2024"
    },
    {
      title: "Document Requirements Checklist",
      description: "Complete list of requirements for all barangay documents",
      type: "PDF Checklist", 
      downloadSize: "1.2 MB",
      lastUpdated: "June 2024"
    },
    {
      title: "Service Booking Tutorial",
      description: "Step-by-step video tutorial on booking appointments",
      type: "Video Tutorial",
      downloadSize: "15 MB",
      lastUpdated: "May 2024"
    },
    {
      title: "Complaint Filing Guide",
      description: "How to properly file and track complaints",
      type: "Interactive Guide",
      downloadSize: "Online",
      lastUpdated: "June 2024"
    }
  ];

  const contactOptions = [
    {
      method: "Phone Support",
      contact: "+63 912 345 6789",
      availability: "Mon-Fri 8:00 AM - 5:00 PM",
      description: "Immediate assistance for urgent matters",
      icon: Phone
    },
    {
      method: "Email Support",
      contact: "support@barangaysanisidro.gov.ph",
      availability: "24/7 (Response within 24 hours)",
      description: "For detailed inquiries and documentation",
      icon: Mail
    },
    {
      method: "Walk-in Support",
      contact: "Barangay Hall - Information Desk",
      availability: "Mon-Fri 8:00 AM - 5:00 PM",
      description: "Face-to-face assistance and guidance",
      icon: HelpCircle
    }
  ];

  return (
    <DashboardLayout userType="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-600">Get assistance, guides, and support for all barangay services</p>
        </div>

        {/* Search Help (FAQs Search) */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search for help topics, guides, or frequently asked questions..." 
                className="pl-10"
                value={faqSearch}
                onChange={e => setFaqSearch(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Submit Support Ticket */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Submit Support Ticket
              </CardTitle>
              <CardDescription>Can't find what you're looking for? Get personalized help</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="your-name">Your Name</Label>
                  <Input id="your-name" placeholder="Juan dela Cruz" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="juan@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Issue Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="payment">Payment Problem</SelectItem>
                      <SelectItem value="document">Document Request</SelectItem>
                      <SelectItem value="appointment">Appointment Issue</SelectItem>
                      <SelectItem value="complaint">Complaint Follow-up</SelectItem>
                      <SelectItem value="booking">Booking Assistance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Priority Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>

              <div>
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Please provide as much detail as possible about your issue, including steps you've already tried..."
                  className="min-h-24"
                />
              </div>

              {/* Upload and Consent */}
              <div className="space-y-2">
                <Label>Upload Screenshot/Document (optional)</Label>
                <Input type="file" />
              </div>
              <div className="flex items-center space-x-2">
                <input id="ticket-consent" type="checkbox" checked={ticketConsent} onChange={e => setTicketConsent(e.target.checked)} />
                <Label htmlFor="ticket-consent" className="text-sm">I consent to the processing of my data for support purposes.</Label>
              </div>
              <Button className="w-full" disabled={!ticketConsent}>
                Submit Support Ticket
              </Button>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Multiple ways to reach us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="h-4 w-4 text-blue-600" />
                      <h4 className="font-medium text-sm">{option.method}</h4>
                    </div>
                    <p className="text-sm font-medium text-blue-600">{option.contact}</p>
                    <p className="text-xs text-gray-600 mt-1">{option.description}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {option.availability}
                    </Badge>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section: Expandable Accordion, Searchable */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="mr-2 h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>Find quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-lg font-semibold mb-4 text-blue-700">{category.category}</h3>
                  <div className="space-y-4">
                    {category.questions.filter(faq => faq.question.toLowerCase().includes(faqSearch.toLowerCase())).map((faq, faqIndex) => (
                      <div key={faqIndex} className="p-4 bg-gray-50 rounded-lg">
                        <button
                          className="w-full text-left font-medium mb-2 flex justify-between items-center"
                          onClick={() => setExpandedFaq(expandedFaq && expandedFaq.cat === categoryIndex && expandedFaq.idx === faqIndex ? null : {cat: categoryIndex, idx: faqIndex})}
                        >
                          {faq.question}
                          <span>{expandedFaq && expandedFaq.cat === categoryIndex && expandedFaq.idx === faqIndex ? "▲" : "▼"}</span>
                        </button>
                        {expandedFaq && expandedFaq.cat === categoryIndex && expandedFaq.idx === faqIndex && (
                          <div>
                            <p className="text-sm text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Support Ticket History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Your Support Tickets
              </CardTitle>
              <CardDescription>Track your support requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-sm">{ticket.subject}</h4>
                        <Badge 
                          variant={ticket.status === "Resolved" ? "default" : "secondary"}
                          className={ticket.status === "Resolved" ? "bg-green-600" : "bg-blue-600"}
                        >
                          {ticket.status === "Resolved" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {ticket.status === "In Progress" && <AlertCircle className="mr-1 h-3 w-3" />}
                          {ticket.status}
                        </Badge>
                        <Badge variant="outline">{ticket.priority}</Badge>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p>Ticket ID: #{ticket.id}</p>
                        <p>Category: {ticket.category}</p>
                        <p>Created: {ticket.dateCreated}</p>
                        {ticket.dateResolved && <p>Resolved: {ticket.dateResolved}</p>}
                        {ticket.response && (
                          <p className="text-green-600 font-medium mt-2">Response: {ticket.response}</p>
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="ml-2">Reply</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Help Resources: Downloadable PDF + Audio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Help Resources
              </CardTitle>
              <CardDescription>Guides, tutorials, and documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {helpResources.map((resource, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{resource.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Badge variant="outline">{resource.type}</Badge>
                        <span>{resource.downloadSize}</span>
                        <span>Updated: {resource.lastUpdated}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-3">
                    <FileText className="h-3 w-3 mr-1" />
                    Download/View
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpSupport;
