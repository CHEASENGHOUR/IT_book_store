import { Link, useLocation } from "react-router-dom";
import { usePages } from "../context/PageContext";


function Breadcrumbs() {
  const location = useLocation();
    const pages = usePages();

  // Split path -> [ '', 'shop', 'something' ]
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 my-4">
      <ul className="flex gap-2">
        {/* Always show Home */}
        <li>
          <Link to="/" className="hover:underline">
            {pages.find((p) => p.name === "")?.text || "Home"}
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const page = pages.find((p) => p.name === value);

          return (
            <li key={to} className="flex items-center gap-2">
              <span>/</span>
              {index === pathnames.length - 1 ? (
                <span className="font-semibold">
                  {page?.text || value}
                </span>
              ) : (
                <Link to={to} className="hover:underline">
                  {page?.text || value}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
