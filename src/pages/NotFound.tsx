import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-ink px-6 text-center">
    <Helmet>
      <title>Not found — balance_ee</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <p className="font-display text-2xl lowercase tracking-tight">balance<span className="text-terracotta">_ee</span></p>
    <h1 className="font-display text-7xl mt-6">404</h1>

    <p className="text-ink/70 mt-2 text-lg">This page isn't here.</p>
    <Link to="/" className="mt-8 rounded-full bg-terracotta text-cream font-medium px-6 py-3 hover:bg-ink transition-colors">
      Take me home
    </Link>
  </div>
);

export default NotFound;
