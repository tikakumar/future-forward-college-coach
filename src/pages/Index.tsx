import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to onboarding page
    navigate("/onboarding");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-heading mb-4">Future Forward College Coach</h1>
        <p className="text-xl text-muted-foreground">Loading your college planning experience...</p>
      </div>
    </div>
  );
};

export default Index;
