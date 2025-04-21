import { BookOpen, FileText, ListChecks, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ApplicationReview = () => {
  // Mock data for demo purposes
  const sections = [
    {
      id: "academics",
      title: "Academic Profile",
      icon: BookOpen,
      progress: 85,
      strengths: [
        "Strong GPA trend",
        "Rigorous course selection",
        "Excellent test scores",
      ],
      improvements: [
        "Consider taking an additional AP course",
        "Could highlight research experience more",
      ],
    },
    {
      id: "extracurriculars",
      title: "Extracurricular Activities",
      icon: ListChecks,
      progress: 70,
      strengths: [
        "Leadership in multiple clubs",
        "Consistent community service",
        "Sports participation",
      ],
      improvements: [
        "Need more depth in one activity",
        "Consider starting a new initiative",
      ],
    },
    {
      id: "essays",
      title: "Essays",
      icon: FileText,
      progress: 60,
      strengths: [
        "Strong personal voice",
        "Good storytelling",
      ],
      improvements: [
        "Need more specific examples",
        "Could better connect themes",
      ],
    },
  ];

  const overallGapAnalysis = {
    strengths: [
      "Well-rounded academic profile",
      "Demonstrated leadership",
      "Strong test scores",
    ],
    areasForImprovement: [
      "Need more depth in extracurriculars",
      "Essays need more personal reflection",
      "Could show more initiative in activities",
    ],
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold mb-2">Application Review</h1>
        <p className="text-muted-foreground">
          Comprehensive analysis of your college application profile
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overall Gap Analysis</CardTitle>
          <CardDescription>
            Key strengths and areas for improvement across your application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-medium">Strengths</h3>
              <ul className="space-y-2">
                {overallGapAnalysis.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Areas for Improvement</h3>
              <ul className="space-y-2">
                {overallGapAnalysis.areasForImprovement.map((area, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-yellow-500" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                <CardTitle>{section.title}</CardTitle>
              </div>
              <CardDescription>
                Progress and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Completion</span>
                  <span>{section.progress}%</span>
                </div>
                <Progress value={section.progress} />
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Strengths</h4>
                <ul className="space-y-1">
                  {section.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Improvements</h4>
                <ul className="space-y-1">
                  {section.improvements.map((improvement, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {improvement}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApplicationReview; 