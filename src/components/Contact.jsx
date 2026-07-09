import { useState } from "react";
import Icon from "./Icon";
import { profile, socials } from "../data/portfolioData";
import "../styles/shared.css";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailEntry = socials.find((s) => s.icon === "mail");
    const to = emailEntry ? emailEntry.value : "";
    const subject = encodeURIComponent(form.subject || `Message from ${form.name || "your site"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || "Anonymous"} (${form.email || "no email given"})`
    );
    // Opens Gmail's web compose window directly (in a new tab), addressed to you,
    // instead of relying on the visitor's OS having a default mail app configured.
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section section--last">
      <div className="container">
        <div className="section-eyebrow">CONTACT</div>
        <h2 className="section-title">Get in touch</h2>

        <div className="contact-grid">
          <div className="contact-cards">
            {socials.map((s) => {
              // For the email card specifically, use a Gmail compose link instead of
              // a bare mailto: — mailto opens a blank tab with nothing in it if the
              // visitor's OS has no default mail app configured.
              const cardHref = s.icon === "mail" ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(s.value)}` : s.href;
              return (
                <a className="contact-card" href={cardHref} target="_blank" rel="noreferrer" key={s.label}>
                  <span className="contact-card__icon">
                    <Icon name={s.icon} size={18} />
                  </span>
                  <span>
                    <span className="contact-card__label">{s.label}</span>
                    <span className="contact-card__value">{s.value}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <label>
                Name
                <input type="text" placeholder="your name" value={form.name} onChange={update("name")} required />
              </label>
              <label>
                Email
                <input type="email" placeholder="your@email.com" value={form.email} onChange={update("email")} required />
              </label>
            </div>
            <label>
              Subject
              <input type="text" placeholder="what's this about?" value={form.subject} onChange={update("subject")} />
            </label>
            <label>
              Message
              <textarea
                rows={5}
                placeholder="what's on your mind?"
                value={form.message}
                onChange={update("message")}
                required
              />
            </label>
            <div className="contact-form__footer">
              <span>opens Gmail in a new tab</span>
              <button className="btn btn--primary" type="submit">
                Send message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}