// src/pages/Events.jsx
import PageTemplate from "./PageTemplate";

export default function Events() {
  return (
    <PageTemplate title="Our Events">
      <ul className="space-y-2">
        <li>📌 Tech Talks</li>
        <li>📌 Coding Challenges</li>
        <li>📌 Workshops & Hackathons</li>
        <li>📌 Networking Sessions</li>
      </ul>
    </PageTemplate>
  );
}