import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="font-semibold text-3xl">CRUD Next</h3>
        <ul className="flex gap-5 text-lg">
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-200">
              Tasks
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-200">
              New
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
