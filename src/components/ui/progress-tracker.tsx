
import { cn } from "@/lib/utils";
import { CircleCheck, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ProgressTrackerProps {
  steps: {
    id: string;
    title: string;
    completed: boolean;
    dueDate?: string;
  }[];
  className?: string;
}

export function ProgressTracker({ steps, className }: ProgressTrackerProps) {
  const completedSteps = steps.filter((step) => step.completed).length;
  const completionPercentage = Math.round((completedSteps / steps.length) * 100);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h4 className="font-heading text-sm font-medium">Progress</h4>
        <span className="text-sm font-medium">{completionPercentage}%</span>
      </div>
      <Progress value={completionPercentage} className="h-2" />
      
      <div className="mt-6 space-y-3">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className={cn(
              "flex items-start gap-3 rounded-md border p-3 transition-colors",
              step.completed 
                ? "border-green-200 bg-green-50" 
                : "border-muted bg-muted/30"
            )}
          >
            {step.completed ? (
              <CircleCheck className="h-5 w-5 text-green-500 shrink-0" />
            ) : (
              <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className={cn(
                "text-sm font-medium",
                step.completed ? "text-green-700" : "text-foreground"
              )}>
                {step.title}
              </p>
              {step.dueDate && (
                <p className="text-xs text-muted-foreground mt-1">
                  {step.completed ? "Completed" : `Due ${step.dueDate}`}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
