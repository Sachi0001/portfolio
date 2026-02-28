import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (
      !accessKey ||
      accessKey === "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE"
    ) {
      setStatus({
        type: "error",
        message:
          "Contact form is not configured. Add your real VITE_WEB3FORMS_ACCESS_KEY in .env and restart the dev server.",
      });
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      access_key: accessKey,
      subject: "New Portfolio Contact Message",
      from_name: formData.get("name"),
      replyto: formData.get("email"),
      message: formData.get("message"),
    };

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully. I will get back to you soon.",
        });
        event.currentTarget.reset();
      } else {
        setStatus({
          type: "error",
          message:
            data?.message ||
            "Unable to send your message right now. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-8 sm:py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Let&apos;s Work Together</h2>
      <p className="text-[#5a627f] max-w-2xl mb-8">
        I am open to frontend, backend, and fullstack developer roles,
        freelance projects, and collaboration opportunities. If you have an
        idea or an opening, feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-xl border border-[#cfd6e6] bg-white/70 p-5 shadow-sm">
            <p className="text-sm text-[#5a627f]">Email</p>
            <a
              href="mailto:sachin.sachi.c@gmail.com"
              className="text-lg font-medium hover:text-[#1f2947] transition"
            >
              sachin.sachi.c@gmail.com
            </a>
          </div>

          <div className="rounded-xl border border-[#cfd6e6] bg-white/70 p-5 shadow-sm">
            <p className="text-sm text-[#5a627f]">Mobile</p>
            <a
              href="tel:+919072981486"
              className="text-lg font-medium hover:text-[#1f2947] transition"
            >
              +91 90729 81486
            </a>
          </div>

          <div className="rounded-xl border border-[#cfd6e6] bg-white/70 p-5 shadow-sm">
            <p className="text-sm text-[#5a627f]">Location</p>
            <p className="text-lg font-medium">India</p>
          </div>

          <div className="rounded-xl border border-[#cfd6e6] bg-white/70 p-5 shadow-sm">
            <p className="text-sm text-[#5a627f] mb-2">Find me on</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/sachin-chandran-767b43198"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1f2947] text-white hover:bg-[#16203b] transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Sachi0001"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white border border-[#cfd6e6] hover:bg-[#f3f5fa] transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <form
          className="rounded-xl border border-[#cfd6e6] bg-white/70 p-5 space-y-4 shadow-sm"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold">Send a Message</h3>

          <div>
            <label htmlFor="name" className="block text-sm text-[#5a627f] mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-lg bg-white border border-[#cfd6e6] px-4 py-2 outline-none focus:border-[#1f2947]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-[#5a627f] mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg bg-white border border-[#cfd6e6] px-4 py-2 outline-none focus:border-[#1f2947]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-[#5a627f] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full rounded-lg bg-white border border-[#cfd6e6] px-4 py-2 outline-none focus:border-[#1f2947]"
            />
          </div>

          {status.message && (
            <p
              className={
                status.type === "success"
                  ? "text-green-400 text-sm"
                  : "text-red-400 text-sm"
              }
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#1f2947] text-white py-2.5 font-medium hover:bg-[#16203b] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
