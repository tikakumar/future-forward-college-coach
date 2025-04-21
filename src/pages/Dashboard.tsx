
import { BarChart, BookOpen, FileText, ListChecks, Zap } from "lucide-react";
import { CardStats } from "@/components/ui/card-stats";
import { ProgressTracker } from "@/components/ui/progress-tracker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  // Mock data for demo purposes
  const tasks = [
    {
      id: "1",
      title: "Complete personal essay draft",
      completed: true,
      dueDate: "Sep 15",
    },
    {
      id: "2",
      title: "Schedule campus tour at UC Berkeley",
      completed: false,
      dueDate: "Oct 1",
    },
    {
      id: "3",
      title: "Request teacher recommendation letters",
      completed: false,
      dueDate: "Oct 15",
    },
    {
      id: "4",
      title: "Take SAT practice test",
      completed: true,
      dueDate: "Sep 10",
    },
    {
      id: "5",
      title: "Register for SAT exam",
      completed: true,
      dueDate: "Sep 5",
    },
  ];

  const insights = [
    {
      title: "Essay Progress",
      description: "Your essay is showing strong personal voice, but could use more specific examples.",
      action: "Review Feedback",
      icon: FileText,
    },
    {
      title: "College Match Alert",
      description: "Based on your profile updates, we've found 3 new college matches for you.",
      action: "View Matches",
      icon: Zap,
    },
    {
      title: "Activity Suggestion",
      description: "Consider adding a leadership experience to strengthen your extracurricular profile.",
      action: "Explore Ideas",
      icon: ListChecks,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold mb-2">Welcome, Alex</h1>
        <p className="text-muted-foreground">
          Here's your college application progress overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardStats
          title="Days Remaining"
          value="45"
          description="Until early applications"
          icon={BarChart}
        />
        <CardStats
          title="Applications"
          value="3/8"
          description="Started/planned"
          icon={FileText}
          variant="primary"
        />
        <CardStats
          title="Essays"
          value="2"
          description="Drafts in progress"
          icon={FileText}
        />
        <CardStats
          title="College Research"
          value="12"
          description="Schools explored"
          icon={BookOpen}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Application Timeline</CardTitle>
            <CardDescription>
              Track your progress toward key deadlines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProgressTracker steps={tasks} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>
                Personalized suggestions for your applications
              </CardDescription>
            </div>
            <Button variant="secondary" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border p-4"
                >
                  <div className="mt-0.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <insight.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto">
                      {insight.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Suggested next steps to progress your applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <Button className="h-auto flex-col gap-2 p-4">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Work on Essays</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <ListChecks className="h-6 w-6" />
              <span className="text-sm">Update Activities</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <BarChart className="h-6 w-6" />
              <span className="text-sm">Review Progress</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <BookOpen className="h-6 w-6" />
              <span className="text-sm">Research Colleges</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
