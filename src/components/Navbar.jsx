// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Symposium 2025</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
