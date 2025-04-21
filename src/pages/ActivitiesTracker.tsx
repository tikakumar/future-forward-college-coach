import { Activity, Award, Clock, Plus, Target } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ActivitiesTracker = () => {
  // Mock data for demo purposes
  const activities = [
    {
      id: "1",
      title: "Student Council President",
      category: "Leadership",
      hours: 200,
      years: 2,
      description: "Led weekly meetings, organized school events, and represented student body",
      achievements: ["Increased student participation by 40%", "Implemented new recycling program"],
    },
    {
      id: "2",
      title: "Varsity Soccer Team",
      category: "Sports",
      hours: 300,
      years: 3,
      description: "Starting midfielder, team captain senior year",
      achievements: ["Regional champions 2022", "All-State selection 2023"],
    },
    {
      id: "3",
      title: "Science Research Club",
      category: "Academic",
      hours: 150,
      years: 2,
      description: "Conducted independent research on renewable energy",
      achievements: ["Science fair winner", "Published in school journal"],
    },
  ];

  const suggestions = [
    "Consider adding a community service activity",
    "Could highlight more leadership experiences",
    "Research opportunities would strengthen academic profile",
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold mb-2">Activities Tracker</h1>
        <p className="text-muted-foreground">
          Track and manage your extracurricular activities and achievements
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Activities</CardTitle>
                <CardDescription>
                  Add and manage your extracurricular activities
                </CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Activity
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activities.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {activity.category} • {activity.years} years
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{activity.hours} hours</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm">{activity.description}</p>
                    <div className="mt-3">
                      <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {activity.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Activity</CardTitle>
              <CardDescription>
                Enter details about your activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Activity Title</Label>
                <Input id="title" placeholder="e.g., Student Council President" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leadership">Leadership</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="community">Community Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hours">Hours per Week</Label>
                  <Input id="hours" type="number" placeholder="e.g., 5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="years">Years of Participation</Label>
                  <Input id="years" type="number" placeholder="e.g., 2" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your role and responsibilities..."
                />
              </div>
              <Button className="w-full">Save Activity</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Suggestions</CardTitle>
              <CardDescription>
                Ways to strengthen your profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex gap-3 rounded-lg border p-3"
                  >
                    <div className="mt-0.5">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm">{suggestion}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesTracker; 