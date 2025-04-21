import { useState } from "react";
import { FileText, History, MessageSquare, Save, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const EssaySupport = () => {
  const [essayText, setEssayText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<typeof mockFeedback>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  // Mock data for demo purposes
  const revisions = [
    {
      id: "1",
      date: "Oct 1, 2023",
      changes: "Initial draft with personal statement",
      content: `Growing up in a small town in Ohio, I never imagined that a simple robotics club would change the trajectory of my life. It all started when my high school received a grant to start a robotics program, and I found myself captivated by the challenge of building something that could move, think, and solve problems.

The first robot we built was far from perfect - it could barely move in a straight line. But that initial failure taught me more than any success could have. I learned the value of persistence, the importance of teamwork, and the thrill of seeing an idea come to life through code and mechanics.

As I spent more time in the robotics lab, I discovered my passion for computer science and engineering. I began teaching myself programming languages, staying up late to debug code, and working with my team to improve our robots. The more I learned, the more I realized how technology could be used to solve real-world problems.

This journey has led me to pursue a degree in Computer Science, with a focus on artificial intelligence and robotics. I want to be part of the next generation of innovators who use technology to make a positive impact on society. My experiences in robotics have shown me that with dedication and creativity, we can build solutions to some of the world's most pressing challenges.`,
    },
    {
      id: "2",
      date: "Oct 5, 2023",
      changes: "Added more specific examples",
      content: `Growing up in a small town in Ohio, I never imagined that a simple robotics club would change the trajectory of my life. It all started when my high school received a grant to start a robotics program, and I found myself captivated by the challenge of building something that could move, think, and solve problems.

The first robot we built was far from perfect - it could barely move in a straight line. But that initial failure taught me more than any success could have. I learned the value of persistence, the importance of teamwork, and the thrill of seeing an idea come to life through code and mechanics.

As I spent more time in the robotics lab, I discovered my passion for computer science and engineering. I began teaching myself programming languages, staying up late to debug code, and working with my team to improve our robots. The more I learned, the more I realized how technology could be used to solve real-world problems.

This journey has led me to pursue a degree in Computer Science, with a focus on artificial intelligence and robotics. I want to be part of the next generation of innovators who use technology to make a positive impact on society. My experiences in robotics have shown me that with dedication and creativity, we can build solutions to some of the world's most pressing challenges.`,
    },
    {
      id: "3",
      date: "Oct 8, 2023",
      changes: "Improved conclusion and transitions",
      content: `Growing up in a small town in Ohio, I never imagined that a simple robotics club would change the trajectory of my life. It all started when my high school received a grant to start a robotics program, and I found myself captivated by the challenge of building something that could move, think, and solve problems.

The first robot we built was far from perfect - it could barely move in a straight line. But that initial failure taught me more than any success could have. I learned the value of persistence, the importance of teamwork, and the thrill of seeing an idea come to life through code and mechanics.

As I spent more time in the robotics lab, I discovered my passion for computer science and engineering. I began teaching myself programming languages, staying up late to debug code, and working with my team to improve our robots. The more I learned, the more I realized how technology could be used to solve real-world problems.

This journey has led me to pursue a degree in Computer Science, with a focus on artificial intelligence and robotics. I want to be part of the next generation of innovators who use technology to make a positive impact on society. My experiences in robotics have shown me that with dedication and creativity, we can build solutions to some of the world's most pressing challenges.`,
    },
  ];

  const mockFeedback = [
    {
      id: "1",
      type: "strength",
      text: "Strong personal voice and authentic storytelling",
    },
    {
      id: "2",
      type: "improvement",
      text: "Consider adding more specific examples in the second paragraph",
    },
    {
      id: "3",
      type: "suggestion",
      text: "The conclusion could better tie back to your opening theme",
    },
  ];

  const handleGetFeedback = () => {
    setIsLoading(true);
    // Simulate AI processing delay
    setTimeout(() => {
      setFeedback(mockFeedback);
      setShowFeedback(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleSaveDraft = () => {
    // In a real app, this would save to a backend
    console.log("Saving draft:", essayText);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold mb-2">Essay Support</h1>
        <p className="text-muted-foreground">
          Upload and refine your college essays with AI-powered feedback
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Essay Editor</CardTitle>
            <CardDescription>
              Write or paste your essay draft below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="editor">
              <TabsList>
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="editor" className="mt-4">
                <Textarea
                  className="min-h-[400px] font-mono"
                  placeholder="Start writing your essay here..."
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                />
                <div className="mt-4 flex justify-end gap-2">
                  <Button variant="outline" onClick={handleSaveDraft}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button onClick={handleGetFeedback} disabled={isLoading || !essayText}>
                    {isLoading ? (
                      "Processing..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Get Feedback
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="preview" className="mt-4">
                <div className="prose max-w-none">
                  {essayText || "No content to preview"}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {showFeedback && (
            <Card>
              <CardHeader>
                <CardTitle>AI Feedback</CardTitle>
                <CardDescription>
                  Personalized suggestions for improvement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feedback.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 rounded-lg border p-3"
                    >
                      <div className="mt-0.5">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Revision History</CardTitle>
              <CardDescription>
                Track changes to your essay
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {revisions.map((revision) => (
                  <div
                    key={revision.id}
                    className="flex gap-3 rounded-lg border p-3"
                  >
                    <div className="mt-0.5">
                      <History className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{revision.date}</p>
                      <p className="text-sm text-muted-foreground">
                        {revision.changes}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-xs"
                        onClick={() => setEssayText(revision.content)}
                      >
                        View Content
                      </Button>
                    </div>
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

export default EssaySupport; 