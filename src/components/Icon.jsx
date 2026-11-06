export const ICON_PATHS = {
  menu: "M4 7h16M4 12h16M4 17h16",
  x: "M6 6l12 12M18 6L6 18",
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 12.5l4.5 4.5L19 7.5",
  shield: "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z M9 12l2 2 4-4",
  laptop: "M4 6h16v10H4z M2 19h20",
  bank: "M3 10l9-6 9 6 M5 10v8 M9.5 10v8 M14.5 10v8 M19 10v8 M3 20h18",
  book: "M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z M4 19a2 2 0 012-2h13",
  users:
    "M16 19v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1 M9.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7z M21 19v-1a4 4 0 00-3-3.87 M15.5 3.13a3.5 3.5 0 010 6.74",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18z M12 7v5l3 2",
  lock: "M6 11h12v9H6z M8.5 11V8a3.5 3.5 0 017 0v3",
  file: "M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h6",
  phone:
    "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2",
  mail: "M3 6h18v12H3z M3 7l9 6 9-6",
  pin: "M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  briefcase: "M4 8h16v11H4z M9 8V5h6v3 M4 13h16",
  chart: "M4 20V10 M10 20V4 M16 20v-7 M22 20H2",
  scale:
    "M12 4v16 M7 20h10 M5 8h14 M5 8l-3 6a3 3 0 006 0L5 8z M19 8l-3 6a3 3 0 006 0l-3-6z",
  megaphone:
    "M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1z M15 8a5 5 0 010 8 M18 5a9 9 0 010 14",
  umbrella: "M12 3a9 9 0 019 9H3a9 9 0 019-9z M12 12v6a2 2 0 004 0",
  building:
    "M5 21V5l7-2v18 M12 8h7v13 M8 8h1 M8 12h1 M8 16h1 M15 12h1 M15 16h1 M3 21h18",
  id: "M3 5h18v14H3z M8 10.5a2 2 0 100-4 2 2 0 000 4z M5 16c.5-2 1.7-3 3-3s2.5 1 3 3 M14 9h4 M14 13h4",
  wallet: "M3 7h16v12H3z M3 7l12-3v3 M16 13h2",
  info: "M12 21a9 9 0 100-18 9 9 0 000 18z M12 11v5 M12 8h.01",
  alert: "M12 3l9 16H3l9-16z M12 10v4 M12 17h.01",
  spark:
    "M12 3v4 M12 17v4 M3 12h4 M17 12h4 M6 6l2.5 2.5 M15.5 15.5L18 18 M6 18l2.5-2.5 M15.5 8.5L18 6",
  send: "M4 12l16-8-6 16-2-6-8-2z",
  calc: "M6 3h12v18H6z M9 7h6 M9 11h.01 M12 11h.01 M15 11h.01 M9 14h.01 M12 14h.01 M15 14h.01 M9 17h.01 M12 17h3",
  external: "M14 4h6v6 M20 4l-9 9 M18 14v6H4V6h6",
  plus: "M12 5v14M5 12h14",
};
export function Icon({
  name: e,
  className: t = "h-5 w-5",
  strokeWidth: n = 1.9,
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={t}
      fill="none"
      stroke="currentColor"
      strokeWidth={n}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICON_PATHS[e] || ICON_PATHS.info} />
    </svg>
  );
}
