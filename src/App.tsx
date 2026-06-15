import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalendarPage from "./pages/CalendarPage";
import Learn from "./pages/Learn";
import Booking from "./pages/Booking";
import Classes from "./pages/Classes";
import WellnessAI from "./pages/WellnessAI";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import MyEvents from "./pages/MyEvents";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/wellness-ai" element={<WellnessAI />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<About />} />

      {/* Admin-only routes (kept; not surfaced in nav) */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/my-events" element={<MyEvents />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/event/:id/edit" element={<EditEvent />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

export default App;
