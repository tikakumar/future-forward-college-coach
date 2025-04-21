import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import CollegeMatching from "./pages/CollegeMatching";
import EssaySupport from "./pages/EssaySupport";
import ApplicationReview from "./pages/ApplicationReview";
import ActivitiesTracker from "./pages/ActivitiesTracker";
import CollegeResearch from "./pages/CollegeResearch";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />
          
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/matching" element={<CollegeMatching />} />
            <Route path="/essay" element={<EssaySupport />} />
            <Route path="/review" element={<ApplicationReview />} />
            <Route path="/activities" element={<ActivitiesTracker />} />
            <Route path="/research" element={<CollegeResearch />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
