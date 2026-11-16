
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Digital Product",
    title: "WattMetric",
    status: "IN DEVELOPMENT",
    description:
      "An electricity management platform designed to help households and businesses understand, monitor and manage their electricity consumption and costs.",
    capabilities: [
      "Electricity usage tracking",
      "Prepaid and postpaid meter support",
      "Consumption and cost estimates",
      "Electricity management tools",
    ],
    color: "bg-blue-950",
  },
  {
    number: "02",
    category: "Church & Organization Website",
    title: "Regenerated Breed Organization",
    status: "IN DEVELOPMENT",
    description:
      "A digital platform for Regenerated Breed Organization Christian Mission Team, designed to communicate its mission, showcase evangelism activities, connect members and supporters, and support its outreach across Kenya.",
    capabilities: [
      "Organization profile and mission information",
      "Missions and events presentation",
      "Church and discipleship group information",
      "Local and international donation information",
      "Contact and engagement channels",
    ],
    color: "bg-indigo-950",
  },
  {
    number: "03",
    category: "Website Development",
    title: "Business & Corporate Websites",
    status: "OUR CAPABILITY",
    description:
      "Professional online experiences designed to help businesses establish their identity, communicate their services and connect with customers.",
    capabilities: [
      "Corporate websites",
      "Service and product showcases",
      "Responsive website experiences",
    ],
    color: "bg-slate-800",
  },
  {
    number: "04",
    category: "Application Development",
    title: "Custom Digital Applications",
    status: "OUR CAPABILITY",
    description:
      "Purpose-built application concepts designed around business needs, customer experiences and everyday operational challenges.",
    capabilities: [
      "Web applications",
      "Customer dashboards and portals",
      "Digital workflow solutions",
    ],
    color: "bg-blue-800",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-blue-950"
          >
            EPHAN<span className="text-blue-600">.</span>
            <span className="ml-2 text-sm font-medium text-slate-500">
              Technologies
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/portfolio" className="text-blue-600">Portfolio</Link>
            <Link href="/shop" className="hover:text-blue-600">Shop</Link>
            <Link
              href="/contact"
              className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-blue-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Our Portfolio
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Ideas taking shape. Solutions creating impact.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">
            Explore selected digital products and the solutions we are
            equipped to create. This portfolio will grow as our projects
            develop and new work is completed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Selected Work & Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">
            Turning ideas into digital experiences.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our portfolio includes products under development and examples
            of the types of digital solutions we aim to deliver.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >
              <div className={`${project.color} p-8 text-white md:p-10`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-blue-200">
                    {project.category}
                  </span>

                  <span className="rounded-full border border-white/30 px-3 py-2 text-xs font-bold tracking-wide">
                    {project.status}
                  </span>
                </div>

                <div className="mt-12">
                  <p className="text-sm font-semibold text-blue-200">
                    PROJECT {project.number}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="leading-8 text-slate-600">
                  {project.description}
                </p>

                <h4 className="mt-7 font-bold text-blue-950">
                  Key focus areas
                </h4>

                <ul className="mt-4 space-y-3">
                  {project.capabilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <span className="font-bold text-blue-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Growing With Purpose
            </p>

            <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">
              Every great product starts with an idea.
            </h2>
          </div>

          <p className="leading-8 text-slate-600">
            We are building a portfolio of useful digital products and
            solutions. As projects reach completion, this page will feature
            more detailed showcases of the work, the challenges addressed
            and the value created.
          </p>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your idea could be our next project.
          </h2>

          <p className="mt-5 leading-7 text-blue-100">
            Let's discuss what you want to build and find the right way to
            bring your vision to life.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-950 hover:bg-blue-50"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © {2026} Ephan Technologies. All rights reserved.
          </p>

          <Link
            href="/"
            className="font-medium text-blue-700 hover:text-blue-900"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
