const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/silva-mateo",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mateosilva",
  },
];

const Footer = () => {
  return (
    <footer
      className="flex justify-center px-8 py-6"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="flex w-full max-w-4xl items-center justify-between gap-6 text-sm">
        <p style={{ color: "var(--text-secondary)" }}>© Mateo Silva</p>

        <nav aria-label="Social links" className="flex items-center gap-5">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
