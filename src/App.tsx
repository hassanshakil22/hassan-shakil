import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import Index from "./components/sections/Index";
import ReactGA from "react-ga4";

const queryClient = new QueryClient();
ReactGA.initialize("G-65FGNN9MEX");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Layout>
        <Index />
      </Layout>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
