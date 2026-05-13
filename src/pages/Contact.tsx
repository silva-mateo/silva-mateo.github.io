import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  CircleAlert,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "../context/languageContext";

const Contact = () => {
  const { t } = useLanguage();
  const email = ["mateosilva.contact", "@", "gmail.com"].join("");
  const formspreeEndpoint = "https://formspree.io/f/xlgzzknq";
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {
    if (!messageSent) return;

    const timeoutId = window.setTimeout(() => {
      setMessageSent(false);
    }, 10000);

    return () => window.clearTimeout(timeoutId);
  }, [messageSent]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setMessageSent(false);
    setMessageError(false);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      form.reset();
      setMessageSent(true);
    } catch {
      setMessageError(true);
    } finally {
      setIsSending(false);
    }
  };

  const handleFormChange = () => {
    setMessageSent(false);
    setMessageError(false);
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
            {t.contact.eyebrow}
          </p>

          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            {t.contact.title}
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
                {t.contact.informationTitle}
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
                {t.contact.currentStatusTitle}
              </h4>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} style={{ color: "var(--accent)" }} />

                <p
                  className="text-sm md:text-base font-normal leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t.contact.currentStatus}
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            onChange={handleFormChange}
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
              {t.contact.formTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder={t.contact.namePlaceholder}
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
                placeholder={t.contact.emailPlaceholder}
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
              placeholder={t.contact.subjectPlaceholder}
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
              placeholder={t.contact.messagePlaceholder}
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
              disabled={isSending}
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--bg-primary)",
              }}
            >
              {isSending ? t.contact.sendingButton : t.contact.sendButton}
              <Send size={15} />
            </button>

            {messageSent && (
              <div
                role="status"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 14%, var(--bg-secondary))",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                <CheckCircle2 size={18} style={{ color: "var(--accent)" }} />
                {t.contact.successMessage}
              </div>
            )}

            {messageError && (
              <div
                role="alert"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, #ef4444 12%, var(--bg-secondary))",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                <CircleAlert size={18} style={{ color: "#ef4444" }} />
                {t.contact.errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
