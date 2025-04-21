
import { useState } from "react";
import { Search, SlidersHorizontal, HeartIcon, Heart } from "lucide-react";
import { CollegeCard } from "@/components/ui/college-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";

const CollegeMatching = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [savedColleges, setSavedColleges] = useState<string[]>([]);
  
  // Mock college data
  const colleges = [
    {
      id: "1",
      name: "Stanford University",
      location: "Stanford, CA",
      matchScore: 87,
      acceptanceRate: 4.3,
      undergraduateEnrollment: 7645,
      topPrograms: ["Computer Science", "Engineering", "Business"],
    },
    {
      id: "2",
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      matchScore: 92,
      acceptanceRate: 20.2,
      undergraduateEnrollment: 31329,
      topPrograms: ["Business", "Psychology", "Economics"],
    },
    {
      id: "3",
      name: "NYU",
      location: "New York, NY",
      matchScore: 78,
      acceptanceRate: 12.8,
      undergraduateEnrollment: 27444,
      topPrograms: ["Business", "Visual Arts", "Journalism"],
    },
    {
      id: "4",
      name: "UCLA",
      location: "Los Angeles, CA",
      matchScore: 84,
      acceptanceRate: 11.2,
      undergraduateEnrollment: 31577,
      topPrograms: ["Biology", "Psychology", "Economics"],
    },
    {
      id: "5",
      name: "Boston College",
      location: "Boston, MA",
      matchScore: 89,
      acceptanceRate: 17.5,
      undergraduateEnrollment: 9377,
      topPrograms: ["Finance", "Economics", "Biology"],
    },
    {
      id: "6",
      name: "University of Texas",
      location: "Austin, TX",
      matchScore: 73,
      acceptanceRate: 28.7,
      undergraduateEnrollment: 40048,
      topPrograms: ["Engineering", "Business", "Computer Science"],
    },
  ];
  
  const handleSaveCollege = (id: string, saved: boolean) => {
    if (saved) {
      setSavedColleges([...savedColleges, id]);
    } else {
      setSavedColleges(savedColleges.filter((collegeId) => collegeId !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold mb-2">College Matching</h1>
        <p className="text-muted-foreground">
          Find your best-fit colleges based on your profile and preferences
        </p>
      </div>
      
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Your College Match Score</CardTitle>
          <CardDescription className="text-primary-foreground/70">
            Our AI has analyzed your profile and generated these matches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Academic Strength</p>
                <p className="text-sm font-medium">8/10</p>
              </div>
              <Progress value={80} className="h-2 mt-2" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Extracurricular Depth</p>
                <p className="text-sm font-medium">7/10</p>
              </div>
              <Progress value={70} className="h-2 mt-2" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Profile Completeness</p>
                <p className="text-sm font-medium">9/10</p>
              </div>
              <Progress value={90} className="h-2 mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search colleges..."
            className="pl-9"
          />
        </div>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          <Heart className="h-4 w-4 mr-2" />
          Saved ({savedColleges.length})
        </Button>
      </div>
      
      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle>Filter Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <div className="space-y-1">
                  {["Northeast", "Midwest", "South", "West"].map((region) => (
                    <div key={region} className="flex items-center space-x-2">
                      <Checkbox id={region.toLowerCase()} />
                      <label
                        htmlFor={region.toLowerCase()}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {region}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>School Size</Label>
                <RadioGroup defaultValue="any">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="any" id="any-size" />
                    <Label htmlFor="any-size">Any</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="small" />
                    <Label htmlFor="small">Small (&lt;5,000)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium (5,000-15,000)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large">Large (&gt;15,000)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>Acceptance Rate</Label>
                <div className="pt-4">
                  <Slider defaultValue={[0, 100]} min={0} max={100} step={1} />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">0%</span>
                    <span className="text-sm">100%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Major</Label>
                <Input placeholder="e.g., Computer Science" />
                <div className="pt-2 flex flex-wrap gap-2">
                  <Button variant="secondary" size="sm" className="h-auto py-1 px-2 text-xs">
                    Business
                  </Button>
                  <Button variant="secondary" size="sm" className="h-auto py-1 px-2 text-xs">
                    Engineering
                  </Button>
                  <Button variant="outline" size="sm" className="h-auto py-1 px-2 text-xs">
                    Add Major
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 gap-2">
              <Button variant="outline">Reset</Button>
              <Button>Apply Filters</Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={{
              ...college,
              isSaved: savedColleges.includes(college.id)
            }}
            onSave={handleSaveCollege}
          />
        ))}
      </div>
    </div>
  );
};

export default CollegeMatching;
