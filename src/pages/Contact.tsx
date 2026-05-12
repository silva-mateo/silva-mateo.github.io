import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const email = ["mateosilva.contact", "@", "gmail.com"].join("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const senderEmail = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const body = [`Name: ${name}`, `Email: ${senderEmail}`, "", message].join(
      "\n",
    );

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/mateosilva",
      href: "https://linkedin.com/in/mateosilva",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "github.com/silva-mateo",
      href: "https://github.com/silva-mateo",
    },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm md:text-base outline-none transition-all duration-200";

  return (
    <section
      id="contact"
      className="flex justify-center px-8 py-32"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl w-full flex flex-col gap-16">
        <div>
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </p>

          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Get in touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-4 md:gap-6">
          <div
            className="p-6 md:p-7 rounded-2xl flex flex-col justify-between gap-10"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex flex-col gap-8">
              <h3
                className="text-xl font-bold tracking-tight"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Contact information
              </h3>

              <div className="flex flex-col gap-6">
                {contactLinks.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-4"
                  >
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-105"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--accent) 12%, var(--bg-secondary))",
                        color: "var(--accent)",
                      }}
                    >
                      {icon}
                    </span>

                    <span className="flex flex-col gap-1">
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {label}
                      </span>

                      <span
                        className="text-sm md:text-base font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <h4
                className="text-lg font-semibold mb-4"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Current status
              </h4>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} style={{ color: "var(--accent)" }} />

                <p
                  className="text-sm md:text-base font-normal leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Available for local and remote opportunities.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-7 rounded-2xl flex flex-col gap-5"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-xl font-bold tracking-tight"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              Send me a message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className={inputClass}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />

              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className={inputClass}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className={inputClass}
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={6}
              className={`${inputClass} resize-none`}
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--bg-primary)",
              }}
            >
              Send Message
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
