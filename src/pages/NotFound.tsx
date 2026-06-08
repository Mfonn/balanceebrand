import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mark } from "@/components/balance/Mark";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-ink px-6 text-center">
    <Helmet>
      <title>Not found — balance_ee</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Mark className="w-24 h-24 animate-wiggle" />
    <h1 className="font-display text-7xl mt-6">404</h1>
    <p className="text-ink/70 mt-2 text-lg">This page wandered off on a long walk.</p>
    <Link to="/" className="mt-8 rounded-full bg-terracotta text-cream font-medium px-6 py-3 hover:bg-ink transition-colors">
      Take me home
    </Link>
  </div>
);

export default NotFound;
