
import { cn } from "@/lib/utils";
import { BookOpen, MapPin, Percent, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CollegeCardProps {
  college: {
    id: string;
    name: string;
    location: string;
    logo?: string;
    matchScore?: number;
    acceptanceRate?: number;
    undergraduateEnrollment?: number;
    topPrograms?: string[];
    isSaved?: boolean;
  };
  className?: string;
  onSave?: (id: string, saved: boolean) => void;
}

export function CollegeCard({ college, className, onSave }: CollegeCardProps) {
  return (
    <Card className={cn("overflow-hidden hover:shadow-md transition-shadow", className)}>
      <div className="bg-muted p-4 flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center overflow-hidden">
            {college.logo ? (
              <img 
                src={college.logo} 
                alt={college.name} 
                className="h-full w-full object-cover"
              />
            ) : (
              <BookOpen className="h-6 w-6 text-muted-foreground" />
            )}
          </div>
          <div>
            <h3 className="font-heading font-semibold leading-none">{college.name}</h3>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{college.location}</span>
            </div>
          </div>
        </div>
        {college.matchScore !== undefined && (
          <div className="text-right">
            <Badge 
              variant="outline" 
              className="bg-college-blue-500 text-white border-none"
            >
              {college.matchScore}% Match
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {college.acceptanceRate !== undefined && (
            <div className="flex items-center gap-2">
              <Percent className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Acceptance</p>
                <p className="text-sm font-medium">{college.acceptanceRate}%</p>
              </div>
            </div>
          )}
          
          {college.undergraduateEnrollment !== undefined && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Enrollment</p>
                <p className="text-sm font-medium">
                  {college.undergraduateEnrollment.toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>
        
        {college.topPrograms && college.topPrograms.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-muted-foreground mb-2">Top Programs</p>
            <div className="flex flex-wrap gap-1">
              {college.topPrograms.map((program) => (
                <Badge key={program} variant="secondary" className="text-xs">
                  {program}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button variant="outline" className="w-full">
          Details
        </Button>
        <Button 
          variant={college.isSaved ? "default" : "secondary"}
          className={cn(
            "w-full",
            college.isSaved && "bg-college-teal-500 text-white hover:bg-college-teal-500/90"
          )}
          onClick={() => onSave?.(college.id, !college.isSaved)}
        >
          {college.isSaved ? "Saved" : "Save"}
        </Button>
      </CardFooter>
    </Card>
  );
}
