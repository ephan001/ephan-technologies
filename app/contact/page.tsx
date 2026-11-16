
"use client";

import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "254790694325";

function sendToWhatsApp(
  event: FormEvent<HTMLFormElement>,
  enquiryType: string
) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const subject = formData.get("subject");
  const category = formData.get("category");
  const description = formData.get("description");

  const message = `
Hello Ephan Technologies,

I would like to submit a ${enquiryType}.

Name: ${name}
Email: ${email}
Phone: ${phone}
${subject ? `Subject: ${subject}` : ""}
${category ? `Category: ${category}` : ""}

Details:
${description}

Thank you.
  `.trim();

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
  form.reset();
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-extrabold tracking-tight text-blue-950">
            EPHAN<span className="text-blue-600">.</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <a href="/portfolio" className="hover:text-blue-600">Portfolio</a>
            <a href="/shop" className="hover:text-blue-600">Shop</a>
            <a href="/contact" className="font-bold text-blue-700">Contact</a>
          </nav>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Talk to Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
            Get in Touch
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Let's Build Something Great Together.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Have a project in mind, need technical assistance, or simply have
            a question? We are ready to hear from you.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              💬
            </div>
            <h2 className="text-lg font-bold text-blue-950">WhatsApp</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Contact us directly for questions, discussions and project enquiries.
            </p>
            <p className="mt-4 font-semibold text-slate-900">
              +254 790 694325
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-700"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              🚀
            </div>
            <h2 className="text-lg font-bold text-blue-950">New Projects</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Looking for a website, application or custom digital solution?
              Tell us about your idea.
            </p>
            <a
              href="#project-enquiry"
              className="mt-5 inline-block font-bold text-blue-700 hover:text-blue-900"
            >
              Submit a project enquiry →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              🛠️
            </div>
            <h2 className="text-lg font-bold text-blue-950">Client Support</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Already working with us? Report a technical issue, ask a question
              or request assistance.
            </p>
            <a
              href="#client-support"
              className="mt-5 inline-block font-bold text-blue-700 hover:text-blue-900"
            >
              Submit a support inquiry →
            </a>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">

          {/* New project enquiry */}
          <div id="project-enquiry" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Start a Project
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-blue-950">
              New Project Enquiry
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Tell us what you want to build. We will be happy to discuss
              your requirements.
            </p>

            <form
              onSubmit={(event) => sendToWhatsApp(event, "New Project Enquiry")}
              className="mt-7 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold">Full Name *</label>
                <input name="name" required placeholder="Your full name" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Email Address *</label>
                <input name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Phone Number *</label>
                <input name="phone" type="tel" required placeholder="Your phone number" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Service Required *</label>
                <select name="category" required defaultValue="" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600">
                  <option value="" disabled>Select a service</option>
                  <option>Website Development</option>
                  <option>Application Development</option>
                  <option>Digital Products</option>
                  <option>Software Development</option>
                  <option>Custom Technology Solutions</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Tell Us About Your Project *</label>
                <textarea name="description" required rows={5} placeholder="Describe your idea, requirements or project..." className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <button type="submit" className="w-full rounded-full bg-blue-950 px-6 py-3.5 font-bold text-white transition hover:bg-blue-800">
                Submit Project Enquiry →
              </button>
            </form>
          </div>

          {/* Client support */}
          <div id="client-support" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              We Are Here to Help
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-blue-950">
              Client Support & Inquiries
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Are you an existing client? Use this form to report an issue,
              request assistance or follow up on your project.
            </p>

            <form
              onSubmit={(event) => sendToWhatsApp(event, "Client Support Inquiry")}
              className="mt-7 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold">Client Name *</label>
                <input name="name" required placeholder="Your full name" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Email Address *</label>
                <input name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Phone Number *</label>
                <input name="phone" type="tel" required placeholder="Your phone number" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Project or Product *</label>
                <input name="subject" required placeholder="e.g. Company website, mobile app..." className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Inquiry Category *</label>
                <select name="category" required defaultValue="" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600">
                  <option value="" disabled>Select inquiry category</option>
                  <option>Technical Issue / Bug Report</option>
                  <option>Website or Application Maintenance</option>
                  <option>Project Progress Follow-up</option>
                  <option>Account or Access Problem</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Describe Your Inquiry *</label>
                <textarea name="description" required rows={5} placeholder="Explain the issue or assistance you need..." className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
              </div>

              <button type="submit" className="w-full rounded-full bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700">
                Submit Support Inquiry →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-blue-950 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Building the Right Product for Your Vision.
          </h2>
          <p className="mt-4 leading-7 text-blue-100">
            Whatever your technology needs, let's discuss how Ephan Technologies
            can help bring your ideas to life.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-bold text-blue-950 hover:bg-blue-100"
          >
            Chat with Ephan Technologies
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        <p className="font-bold text-white">EPHAN TECHNOLOGIES</p>
        <p className="mt-2">Building the Right Product for Your Vision.</p>
        <p className="mt-4">© 2026 Ephan Technologies. All rights reserved.</p>
      </footer>
    </main>
  );
}
