import { BarChart, LineChart, PieChart, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Analytics = () => {
  // Mock data for demo purposes
  const applicationProgress = {
    total: 8,
    completed: 3,
    inProgress: 2,
    remaining: 3,
  };

  const timelineData = [
    { month: "Sep", applications: 1 },
    { month: "Oct", applications: 2 },
    { month: "Nov", applications: 3 },
    { month: "Dec", applications: 2 },
  ];

  const schoolTypes = [
    { type: "Reach", count: 3, color: "bg-red-500" },
    { type: "Target", count: 4, color: "bg-yellow-500" },
    { type: "Safety", count: 1, color: "bg-green-500" },
  ];

  const insights = [
    {
      title: "Application Timeline",
      description: "You're on track with your application schedule",
      icon: LineChart,
      trend: "positive",
    },
    {
      title: "Essay Quality",
      description: "Your essays show strong personal voice and storytelling",
      icon: BarChart,
      trend: "positive",
    },
    {
      title: "Profile Balance",
      description: "Consider adding more leadership experiences",
      icon: Target,
      trend: "neutral",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">
          Track your application progress and get insights
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applications
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applicationProgress.total}</div>
            <p className="text-xs text-muted-foreground">
              Target: 8-12 applications
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applicationProgress.completed}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((applicationProgress.completed / applicationProgress.total) * 100)}% complete
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              In Progress
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applicationProgress.inProgress}</div>
            <p className="text-xs text-muted-foreground">
              Active applications
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Remaining
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applicationProgress.remaining}</div>
            <p className="text-xs text-muted-foreground">
              Applications to start
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Application Timeline</CardTitle>
            <CardDescription>
              Track your application progress over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-end justify-between">
              {timelineData.map((data) => (
                <div key={data.month} className="flex flex-col items-center">
                  <div
                    className="w-8 bg-primary rounded-t"
                    style={{ height: `${(data.applications / 3) * 100}px` }}
                  />
                  <span className="text-xs mt-2">{data.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>School Types</CardTitle>
            <CardDescription>
              Distribution of your target schools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schoolTypes.map((type) => (
                <div key={type.type} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{type.type}</span>
                    <span className="text-sm text-muted-foreground">
                      {type.count} schools
                    </span>
                  </div>
                  <Progress
                    value={(type.count / applicationProgress.total) * 100}
                    className={type.color}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {insights.map((insight) => (
          <Card key={insight.title}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <insight.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{insight.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {insight.description}
              </p>
              <Button variant="link" className="p-0 h-auto mt-2">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Analytics; 