// src/pages/Register.jsx
import { useState } from "react";
import PageTemplate from "./PageTemplate";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered: ${form.name} (${form.email})`);
    setForm({ name: "", email: "" });
  };

  return (
    <PageTemplate title="Register Now">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-2 border rounded"
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>
    </PageTemplate>
  );
}