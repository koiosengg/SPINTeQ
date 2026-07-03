import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";

function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | SPINTeQ"
        description="The page you are looking for does not exist."
      />
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "80px", fontWeight: 800 }}>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
