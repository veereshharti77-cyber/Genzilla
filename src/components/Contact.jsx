import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    brand: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_ieqhc5b",
        "template_3wtk04e",
        {
          name: form.name,
          brand: form.brand,
          email: form.email,
          budget: form.budget,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "Y76OB4TrXFA82_YgQ"
      );

      setSent(true);

      setForm({
        name: "",
        brand: "",
        email: "",
        budget: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact">
      <div className="contact-wrap">
        {/* Left Side */}
        <div>
          <div className="section-eyebrow pink reveal">
            Start a Conversation
          </div>

          <div className="contact-big reveal">
            LET'S
            <br />
            BUILD
            <br />
            <span>SOME</span>
            <span className="p">THING</span>
            <br />
            VIRAL.
          </div>

          <div className="contact-items reveal">
            <div className="contact-item">
              <div className="c-icon">✉</div>
              <span className="c-val">genzillablr@gmail.com</span>
            </div>

            <div className="contact-item">
              <div className="c-icon">✆</div>
              <span className="c-val">+91 9008824184</span>
            </div>

            <div className="contact-item">
              <div className="c-icon">⌖</div>
              <span className="c-val">Banglore, Karnataka</span>
            </div>
          </div>

          <div className="social-row reveal">
            <a className="soc-link" href="#">
              Instagram
            </a>

            <a className="soc-link" href="#">
              LinkedIn
            </a>

            <a className="soc-link" href="#">
              Twitter/X
            </a>

            <a className="soc-link" href="#">
              YouTube
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="form-box reveal">
          <div className="form-title">Send Us a Brief</div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>

              <input
                className="form-input"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Brand / Company</label>

              <input
                className="form-input"
                type="text"
                placeholder="Brand name"
                value={form.brand}
                onChange={handleChange("brand")}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address *</label>

            <input
              className="form-input"
              type="email"
              placeholder="you@brand.com"
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Monthly Budget</label>

            <input
              className="form-input"
              type="text"
              placeholder="₹50,000 – ₹2,00,000"
              value={form.budget}
              onChange={handleChange("budget")}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Tell us about your project *
            </label>

            <textarea
              className="form-textarea"
              placeholder="What are you building? What's the goal?"
              value={form.message}
              onChange={handleChange("message")}
            ></textarea>
          </div>

          <button
            type="button"
            className="form-submit"
            onClick={handleSubmit}
            disabled={loading || sent}
            style={
              sent
                ? {
                    background: "transparent",
                    border: "1.5px solid var(--green)",
                    color: "var(--green)",
                  }
                : {}
            }
          >
            {loading
              ? "SENDING..."
              : sent
              ? "BRIEF SENT ✓"
              : "SEND BRIEF →"}
          </button>
        </div>
      </div>
    </section>
  );
}