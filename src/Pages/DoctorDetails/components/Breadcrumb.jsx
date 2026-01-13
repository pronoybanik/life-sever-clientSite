import React, { memo } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = memo(({ firstName, lastName }) => {
  return (
    <nav className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li>
          <Link to="/ourDoctors" className="hover:text-blue-600 transition-colors">
            Doctors
          </Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li className="text-blue-600 font-medium">
          Dr. {firstName} {lastName}
        </li>
      </ol>
    </nav>
  );
});

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
