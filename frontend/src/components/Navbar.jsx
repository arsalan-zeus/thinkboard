import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10 relative z-50">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            ThinkBoard
          </h1>

          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/create" className="flex items-center gap-1">
                  <PlusIcon className="size-4" />
                  New Note
                </Link>
              </li>
              <li>
                <details className="relative z-50">
                  <summary>Menu</summary>
                  <ul className="bg-base-100 rounded-t-none p-2 z-50">
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
