
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Eye, Share2, ToggleLeft, ToggleRight, Upload, BarChart3 } from "lucide-react";
import { useState } from "react";

const ManageAnnouncements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState<number | null>(null);
  const [showAnalytics, setShowAnalytics] = useState<number | null>(null);

  const announcements = [
    {
      id: 1,
      title: "Water Interruption Notice",
      date: "2025-06-26",
      content: "Scheduled water interruption on June 28, 2025 from 8:00 AM to 5:00 PM for pipe maintenance.",
      status: "Published",
      views: 145,
      shares: 23,
      reactions: 45,
      visibility: true,
      attachment: "water-notice.pdf"
    },
    {
      id: 2,
      title: "Barangay Assembly Meeting",
      date: "2025-06-25",
      content: "Monthly barangay assembly meeting scheduled for July 1, 2025 at 7:00 PM at the Barangay Hall.",
      status: "Published",
      views: 89,
      shares: 12,
      reactions: 28,
      visibility: true,
      attachment: null
    },
    {
      id: 3,
      title: "COVID-19 Vaccination Schedule",
      date: "2025-06-24",
      content: "Free COVID-19 vaccination available every Monday and Wednesday at the Health Center.",
      status: "Draft",
      views: 0,
      shares: 0,
      reactions: 0,
      visibility: false,
      attachment: "vaccination-schedule.pdf"
    },
    {
      id: 4,
      title: "Garbage Collection Schedule Update",
      date: "2025-06-23",
      content: "New garbage collection schedule effective July 1, 2025. Collection days are now Tuesday and Friday.",
      status: "Published",
      views: 234,
      shares: 56,
      reactions: 78,
      visibility: true,
      attachment: null
    },
    {
      id: 5,
      title: "Fiesta Celebration 2025",
      date: "2025-06-22",
      content: "Annual barangay fiesta celebration on August 15, 2025. Join us for food, games, and entertainment!",
      status: "Scheduled",
      views: 67,
      shares: 34,
      reactions: 92,
      visibility: true,
      attachment: "fiesta-program.pdf"
    }
  ];

  const [announcementStatus, setAnnouncementStatus] = useState(
    announcements.map(a => ({ ...a }))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-100 text-green-800";
      case "Draft": return "bg-gray-100 text-gray-800";
      case "Scheduled": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const toggleVisibility = (id: number) => {
    setAnnouncementStatus(prev => 
      prev.map(ann => 
        ann.id === id ? { ...ann, visibility: !ann.visibility } : ann
      )
    );
  };

  const generateShareLink = (id: number) => {
    const link = `${window.location.origin}/announcements/${id}`;
    navigator.clipboard.writeText(link);
    alert(`Share link copied: ${link}`);
  };

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Announcements</h1>
            <p className="text-gray-600">Create and manage community announcements</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowAddModal(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Announcement
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Announcements</p>
                  <p className="text-2xl font-bold text-gray-900">{announcements.length}</p>
                </div>
                <div className="text-sm text-blue-600">Active</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {announcements.reduce((sum, ann) => sum + ann.views, 0)}
                  </p>
                </div>
                <div className="text-sm text-green-600">+15%</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Shares</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {announcements.reduce((sum, ann) => sum + ann.shares, 0)}
                  </p>
                </div>
                <div className="text-sm text-purple-600">+8%</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Engagement</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {announcements.reduce((sum, ann) => sum + ann.reactions, 0)}
                  </p>
                </div>
                <div className="text-sm text-orange-600">+12%</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>Announcements</CardTitle>
                <CardDescription>Manage and track announcement performance</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search announcements..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title & Content</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Visibility</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {announcementStatus.map((announcement) => (
                  <TableRow key={announcement.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{announcement.title}</div>
                        <div className="text-sm text-gray-600 max-w-md truncate">
                          {announcement.content}
                        </div>
                        {announcement.attachment && (
                          <div className="text-xs text-blue-600 flex items-center">
                            <Upload className="h-3 w-3 mr-1" />
                            {announcement.attachment}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{announcement.date}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(announcement.status)}>
                        {announcement.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        <div>Views: {announcement.views}</div>
                        <div>Shares: {announcement.shares}</div>
                        <div>Reactions: {announcement.reactions}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => toggleVisibility(announcement.id)}
                      >
                        {announcement.visibility ? (
                          <ToggleRight className="h-4 w-4 text-green-600" />
                        ) : (
                          <ToggleLeft className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setShowEditModal(announcement.id)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => generateShareLink(announcement.id)}>
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setShowAnalytics(announcement.id)}>
                          <BarChart3 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Announcement Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 max-w-md">
              <h3 className="font-bold mb-4">Add New Announcement</h3>
              <div className="space-y-4">
                <input className="w-full border rounded p-2" placeholder="Title" />
                <input className="w-full border rounded p-2" type="date" />
                <textarea className="w-full border rounded p-2" rows={4} placeholder="Content"></textarea>
                <input className="w-full border rounded p-2" type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
                <select className="w-full border rounded p-2">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                </select>
              </div>
              <div className="flex gap-2 justify-end mt-6">
                <Button size="sm" onClick={() => setShowAddModal(false)}>Save</Button>
                <Button size="sm" variant="outline" onClick={() => setShowAddModal(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 max-w-md">
              <h3 className="font-bold mb-4">Edit Announcement</h3>
              <div className="space-y-4">
                <input className="w-full border rounded p-2" defaultValue="Water Interruption Notice" />
                <input className="w-full border rounded p-2" type="date" defaultValue="2025-06-26" />
                <textarea className="w-full border rounded p-2" rows={4} defaultValue="Scheduled water interruption..."></textarea>
                <input className="w-full border rounded p-2" type="file" />
                <select className="w-full border rounded p-2" defaultValue="Published">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                </select>
              </div>
              <div className="flex gap-2 justify-end mt-6">
                <Button size="sm" onClick={() => setShowEditModal(null)}>Update</Button>
                <Button size="sm" variant="outline" onClick={() => setShowEditModal(null)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Modal */}
        {showAnalytics && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 max-w-md">
              <h3 className="font-bold mb-4">Engagement Analytics</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded">
                  <div className="text-2xl font-bold">145</div>
                  <div className="text-sm text-gray-600">Total Views</div>
                </div>
                <div className="p-4 bg-green-50 rounded">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-sm text-gray-600">Shares</div>
                </div>
                <div className="p-4 bg-purple-50 rounded">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm text-gray-600">Reactions</div>
                </div>
                <div className="text-sm text-gray-500">
                  Performance: +12% vs last announcement
                </div>
              </div>
              <div className="flex gap-2 justify-end mt-6">
                <Button size="sm" variant="outline" onClick={() => setShowAnalytics(null)}>Close</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ManageAnnouncements;
