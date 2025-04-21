import { BookOpen, Heart, MapPin, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CollegeResearch = () => {
  // Mock data for demo purposes
  const colleges = [
    {
      id: "1",
      name: "Stanford University",
      location: "Stanford, CA",
      acceptanceRate: "4%",
      popularMajors: ["Computer Science", "Engineering", "Biology"],
      ranking: 3,
      image: "https://example.com/stanford.jpg",
      isFavorite: true,
    },
    {
      id: "2",
      name: "Harvard University",
      location: "Cambridge, MA",
      acceptanceRate: "5%",
      popularMajors: ["Economics", "Government", "Computer Science"],
      ranking: 2,
      image: "https://example.com/harvard.jpg",
      isFavorite: false,
    },
    {
      id: "3",
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      acceptanceRate: "7%",
      popularMajors: ["Computer Science", "Engineering", "Mathematics"],
      ranking: 1,
      image: "https://example.com/mit.jpg",
      isFavorite: true,
    },
  ];

  const filters = {
    location: ["All", "West Coast", "East Coast", "Midwest", "South"],
    size: ["All", "Small (<5,000)", "Medium (5,000-15,000)", "Large (>15,000)"],
    type: ["All", "Public", "Private"],
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold mb-2">College Research</h1>
        <p className="text-muted-foreground">
          Explore and compare colleges that match your profile
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search colleges..."
                className="pl-9"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {filters.location.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase()}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  {filters.size.map((size) => (
                    <SelectItem key={size} value={size.toLowerCase()}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {filters.type.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <Card key={college.id}>
            <CardHeader className="relative">
              <div className="absolute right-4 top-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className={college.isFavorite ? "text-red-500" : ""}
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <CardTitle>{college.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {college.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Ranked #{college.ranking} in National Universities</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Acceptance Rate</h4>
                <p className="text-sm text-muted-foreground">
                  {college.acceptanceRate}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Popular Majors</h4>
                <div className="flex flex-wrap gap-2">
                  {college.popularMajors.map((major) => (
                    <span
                      key={major}
                      className="rounded-full bg-primary/10 px-2 py-1 text-xs"
                    >
                      {major}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compare Colleges</CardTitle>
          <CardDescription>
            Select up to 3 colleges to compare side by side
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 rounded-lg border border-dashed p-8 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Select colleges to compare
              </p>
            </div>
            <div className="flex-1 rounded-lg border border-dashed p-8 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Select colleges to compare
              </p>
            </div>
            <div className="flex-1 rounded-lg border border-dashed p-8 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Select colleges to compare
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CollegeResearch; 