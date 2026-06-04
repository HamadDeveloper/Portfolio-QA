'use client';

import { useMemo, useState } from 'react';
import { Mail, Send } from 'lucide-react';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const mailto = useMemo(() => {
    const subject = form.subject || 'Portfolio inquiry for Hamad Ur Rehman';
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n');

    return `mailto:rehmanbangash946@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="group">
          <span className="mb-2 block text-sm font-medium text-slate-300">Full name</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="field"
          />
        </label>
        <label className="group">
          <span className="mb-2 block text-sm font-medium text-slate-300">Email address</span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="field"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-slate-300">Subject</span>
        <input
          required
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="QA role, project testing, or collaboration"
          className="field"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Write your message here..."
          className="field resize-none"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-sm text-slate-400">
          <Mail size={16} className="text-cyan-200" /> Sends through your email app
        </p>
        <button type="submit" className="btn-primary justify-center">
          Send Message <Send size={17} />
        </button>
      </div>

      {submitted ? (
        <p className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
          Your email app has been opened with the message prepared.
        </p>
      ) : null}
    </form>
  );
}
