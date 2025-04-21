import { Bell, BookOpen, Calendar, Mail, Plus, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const Profile = () => {
  // Mock data for demo purposes
  const userProfile = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    graduationYear: 2024,
    gpa: 3.8,
    testScores: {
      sat: 1450,
      act: 32,
    },
    interests: ["Computer Science", "Robotics", "Environmental Science"],
    bio: "High school senior passionate about technology and innovation. Looking to pursue a degree in Computer Science with a focus on artificial intelligence.",
  };

  const notificationSettings = [
    {
      id: "application-deadlines",
      title: "Application Deadlines",
      description: "Get reminders for upcoming application deadlines",
      enabled: true,
    },
    {
      id: "essay-feedback",
      title: "Essay Feedback",
      description: "Receive notifications when AI feedback is ready",
      enabled: true,
    },
    {
      id: "college-updates",
      title: "College Updates",
      description: "Stay informed about changes to your target schools",
      enabled: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold mb-2">Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your profile details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="flex gap-2">
                <Input id="name" defaultValue={userProfile.name} />
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Input id="email" type="email" defaultValue={userProfile.email} />
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="graduation">Graduation Year</Label>
              <div className="flex gap-2">
                <Input
                  id="graduation"
                  type="number"
                  defaultValue={userProfile.graduationYear}
                />
                <Button variant="outline" size="icon">
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                defaultValue={userProfile.bio}
                className="min-h-[100px]"
              />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Profile</CardTitle>
            <CardDescription>
              Your academic achievements and interests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA</Label>
                <Input id="gpa" type="number" step="0.1" defaultValue={userProfile.gpa} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sat">SAT Score</Label>
                <Input
                  id="sat"
                  type="number"
                  defaultValue={userProfile.testScores.sat}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="act">ACT Score</Label>
              <Input
                id="act"
                type="number"
                defaultValue={userProfile.testScores.act}
              />
            </div>
            <div className="space-y-2">
              <Label>Academic Interests</Label>
              <div className="flex flex-wrap gap-2">
                {userProfile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm"
                  >
                    {interest}
                  </span>
                ))}
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Interest
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Manage your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {notificationSettings.map((setting) => (
              <div
                key={setting.id}
                className="flex items-center justify-between"
              >
                <div className="space-y-1">
                  <Label>{setting.title}</Label>
                  <p className="text-sm text-muted-foreground">
                    {setting.description}
                  </p>
                </div>
                <Switch
                  defaultChecked={setting.enabled}
                  id={setting.id}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your account preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              <Settings className="mr-2 h-4 w-4" />
              Change Password
            </Button>
            <Button variant="outline" className="w-full">
              <Bell className="mr-2 h-4 w-4" />
              Notification Preferences
            </Button>
            <Button variant="outline" className="w-full">
              <BookOpen className="mr-2 h-4 w-4" />
              Privacy Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile; 