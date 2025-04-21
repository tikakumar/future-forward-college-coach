
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ChevronRight, Lightbulb, School, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Complete onboarding and redirect to dashboard
      navigate("/dashboard");
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-muted/50 to-background p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            {step === 1 && <User className="h-6 w-6" />}
            {step === 2 && <School className="h-6 w-6" />}
            {step === 3 && <Lightbulb className="h-6 w-6" />}
            {step === 4 && <CheckCircle2 className="h-6 w-6" />}
          </div>
          <CardTitle className="font-heading text-2xl">
            {step === 1 && "Welcome! Let's Get Started"}
            {step === 2 && "Academic Background"}
            {step === 3 && "Goals & Interests"}
            {step === 4 && "Final Steps"}
          </CardTitle>
          <div className="mt-4">
            <Progress value={(step / totalSteps) * 100} className="h-2" />
            <p className="mt-2 text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 pt-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label>What best describes you?</Label>
                <RadioGroup defaultValue="student">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parent" id="parent" />
                    <Label htmlFor="parent">Parent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="counselor" id="counselor" />
                    <Label htmlFor="counselor">Counselor</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>What grade are you in?</Label>
                <RadioGroup defaultValue="junior">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="freshman" id="freshman" />
                    <Label htmlFor="freshman">Freshman (9th)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sophomore" id="sophomore" />
                    <Label htmlFor="sophomore">Sophomore (10th)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="junior" id="junior" />
                    <Label htmlFor="junior">Junior (11th)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="senior" id="senior" />
                    <Label htmlFor="senior">Senior (12th)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gpa">Current GPA (if known)</Label>
                <Input id="gpa" placeholder="e.g., 3.8" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="test-scores">Standardized Test Scores (if any)</Label>
                <Input id="test-scores" placeholder="e.g., SAT: 1350, ACT: 29" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="courses">Highlight Advanced Courses</Label>
                <Textarea
                  id="courses"
                  placeholder="List any AP, IB, Honors classes you're taking"
                  rows={3}
                />
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="major-interests">Potential Major Interests</Label>
                <Textarea
                  id="major-interests"
                  placeholder="What subjects or fields are you interested in studying?"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="career-goals">Career Goals</Label>
                <Textarea
                  id="career-goals"
                  placeholder="What career paths are you considering?"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="college-preferences">College Preferences</Label>
                <Textarea
                  id="college-preferences"
                  placeholder="Location, size, environment, etc."
                  rows={3}
                />
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="space-y-6">
              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="font-medium mb-2">Based on your profile, we recommend focusing on:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Building a strong extracurricular profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Researching colleges that match your interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Planning your standardized test preparation</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">You're all set!</h3>
                <p className="text-muted-foreground">
                  Your personalized dashboard is ready. Let's start your college journey!
                </p>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
          >
            Back
          </Button>
          <Button onClick={nextStep}>
            {step === totalSteps ? "Complete Setup" : "Continue"} 
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Onboarding;
