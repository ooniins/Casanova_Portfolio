const paths = {
  mail: (
    <path d="M3 5h18v14H3V5Zm0 0 9 7 9-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  github: (
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      fill="currentColor"
    />
  ),
  linkedin: (
    <path
      d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.53 4.78 5.82V21h-4v-5.98c0-1.43-.03-3.26-2.02-3.26-2.02 0-2.33 1.53-2.33 3.16V21h-4V9Z"
      fill="currentColor"
    />
  ),
  x: (
    <path
      d="m3 3 7.5 9.5L3.4 21H6l6-6.6L17 21h4l-8-9.9L20.3 3H18l-5.6 6.2L7 3H3Z"
      fill="currentColor"
    />
  ),
  external: (
    <path d="M7 17 17 7M17 7H9M17 7v8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  arrowDown: (
    <path d="M12 4v16m0 0-6-6m6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  menu: (
    <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  ),
  close: (
    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  ),
};

export default function Icon({ name, size = 18, className = "" }) {
  const path = paths[name];
  if (!path) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      {path}
    </svg>
  );
}