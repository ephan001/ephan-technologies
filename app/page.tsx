
import Link from "next/link";

const WHATSAPP_NUMBER = "254790694325";
const WHATSAPP_MESSAGE =
  "Hello Ephan Technologies, I would like to enquire about your services. Please assist me.";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Professional, responsive websites for businesses, schools, churches, organizations and individuals.",
    category: "WEB EXPERIENCES",
  },
  {
    number: "02",
    title: "Application Development",
    description:
      "Purpose-built web and mobile applications, business systems, dashboards and customer portals.",
    category: "DIGITAL PRODUCTS",
  },
  {
    number: "03",
    title: "Website Maintenance",
    description:
      "Ongoing website updates, troubleshooting, performance improvements and technical maintenance.",
    category: "WEBSITE CARE",
  },
  {
    number: "04",
    title: "Application Maintenance",
    description:
      "Technical support, bug fixes, database assistance and improvements for existing applications.",
    category: "APPLICATION CARE",
  },
  {
    number: "05",
    title: "Technical Support",
    description:
      "Practical technical assistance, troubleshooting and consultations for your digital products.",
    category: "TECHNICAL ASSISTANCE",
  },
  {
    number: "06",
    title: "Domain & Hosting Advisory",
    description:
      "Guidance and assistance with domain names, hosting providers, DNS configuration and deployment.",
    category: "DIGITAL INFRASTRUCTURE",
  },
];

const projects = [
  {
    number: "01",
    name: "WattMetric",
    type: "Ephan-owned digital product",
    status: "IN DEVELOPMENT",
    description:
      "An electricity management platform designed to help households and businesses understand consumption, estimate electricity costs and manage their meters.",
    style: "from-blue-950 via-blue-800 to-cyan-700",
    mark: "W",
  },
  {
    number: "02",
    name: "Regenerated Breed Organization",
    type: "Church & organization website",
    status: "IN DEVELOPMENT",
    description:
      "A digital platform for a Christian mission organization, supporting its mission, evangelism activities, events, groups and donations.",
    style: "from-indigo-950 via-blue-900 to-violet-700",
    mark: "RBO",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We listen, ask questions and understand what you want to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the right approach, features and direction for your solution.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the agreed vision into a practical digital product.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We refine the solution as your needs and opportunities grow.",
  },
];

const additionalCapabilities = [
  "Website migration and redesign",
  "Website speed optimization",
  "Website and application security audits",
  "Email integration",
  "Third-party API integration",
  "Database backup and recovery setup",
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-2xl font-bold text-white shadow-lg shadow-blue-950/15">
              E
            </div>

            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-[0.12em] text-blue-950">
                EPHAN
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                Technologies
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-slate-600 lg:flex">
            <Link href="/" className="text-blue-700">Home</Link>
            <Link href="/about" className="transition hover:text-blue-700">About</Link>
            <Link href="/services" className="transition hover:text-blue-700">Services</Link>
            <Link href="/portfolio" className="transition hover:text-blue-700">Portfolio</Link>
            <Link href="/shop" className="transition hover:text-blue-700">Shop</Link>
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-950/10 transition hover:bg-blue-800 sm:inline-flex"
          >
            Let's Talk <span className="ml-2">↗</span>
          </Link>

          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-xl text-blue-950">
              ☰
            </summary>

            <nav className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
              <Link href="/" className="rounded-lg px-4 py-3 text-sm font-semibold hover:bg-blue-50">Home</Link>
              <Link href="/about" className="rounded-lg px-4 py-3 text-sm font-semibold hover:bg-blue-50">About</Link>
              <Link href="/services" className="rounded-lg px-4 py-3 text-sm font-semibold hover:bg-blue-50">Services</Link>
              <Link href="/portfolio" className="rounded-lg px-4 py-3 text-sm font-semibold hover:bg-blue-50">Portfolio</Link>
              <Link href="/shop" className="rounded-lg px-4 py-3 text-sm font-semibold hover:bg-blue-50">Shop</Link>
              <Link href="/contact" className="rounded-lg bg-blue-950 px-4 py-3 text-sm font-semibold text-white">Let's Talk ↗</Link>
            </nav>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate bg-slate-50">
        <div className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.17em] text-blue-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Technology. Creativity. Purpose.
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.045em] text-blue-950 sm:text-6xl lg:text-[4.5rem]">
              Your Vision. Our Technology.{" "}
              <span className="text-blue-600">The Right Solution.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              We transform ideas into purposeful digital solutions. From
              professional websites to custom applications and technology
              systems, we help individuals, businesses and organizations
              build the right products for their goals.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-blue-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-950/15 transition hover:-translate-y-1 hover:bg-blue-800"
              >
                Start a Project <span className="ml-3 text-lg">↗</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-blue-950 transition hover:border-blue-500 hover:text-blue-700"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                Our promise
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                Building the Right Product for Your Vision.
              </p>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border-[20px] border-blue-100/80" />
            <div className="absolute -bottom-7 -left-7 h-32 w-32 rounded-3xl bg-cyan-100" />

            <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 p-7 shadow-2xl shadow-blue-950/25 sm:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

              <div className="relative flex items-start justify-between border-b border-white/15 pb-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.23em] text-blue-300">
                    The Ephan approach
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Ideas deserve<br />the right solution.
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-xl font-bold text-white">
                  E.
                </div>
              </div>

              <div className="relative mt-8 space-y-4">
                {[
                  ["01", "Understand the vision", "Start with the real need."],
                  ["02", "Find the right approach", "Choose technology with purpose."],
                  ["03", "Build the product", "Turn plans into practical solutions."],
                  ["04", "Create lasting value", "Make room for growth."],
                ].map((item, index) => (
                  <div
                    key={item[0]}
                    className={`flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10`}
                  >
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${index === 3 ? "bg-cyan-400 text-blue-950" : "bg-blue-800 text-blue-100"}`}>
                      {item[0]}
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">{item[1]}</p>
                      <p className="mt-1 text-xs text-blue-200">{item[2]}</p>
                    </div>

                    <span className="ml-auto text-blue-300">↗</span>
                  </div>
                ))}
              </div>

              <div className="relative mt-7 rounded-xl bg-blue-800/70 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                  Our belief
                </p>
                <p className="mt-2 text-base font-semibold leading-7 text-white">
                  The best solution is not the most complicated one. It is the one that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:px-8 md:grid-cols-3 md:gap-8">
          {[
            ["01", "Understand first", "We begin with your goals and challenges."],
            ["02", "Build with purpose", "We focus on solutions that serve a real need."],
            ["03", "Grow with you", "We consider where your idea can go next."],
          ].map((item) => (
            <div key={item[0]} className="flex gap-4">
              <span className="text-sm font-extrabold text-blue-500">{item[0]}</span>
              <div>
                <h3 className="text-sm font-bold text-blue-950">{item[1]}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">{item[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600">
              About Ephan Technologies
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              We believe every good idea deserves the right technology.
            </h2>
          </div>

          <div className="lg:pl-8">
            <p className="text-lg leading-8 text-slate-600">
              Ephan Technologies is a technology solutions company focused
              on creating websites, applications and digital products for
              individuals, businesses, institutions and organizations.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              We believe the process should begin with understanding the
              problem, not simply choosing a technology. That is how we
              work towards products that are useful, relevant and built
              around your vision.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-blue-800 hover:text-blue-600">
              Discover more about us <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600">
                What we do
              </p>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
                Technology solutions for real-world needs.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              From building new digital products to maintaining and
              supporting existing ones, we help you move forward with
              the right technology.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex min-h-[320px] flex-col rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-light tracking-tight text-blue-200">
                    {service.number}
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-2 text-[9px] font-extrabold tracking-[0.13em] text-blue-700">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-blue-950">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-800 transition group-hover:gap-4"
                >
                  Explore this service <span>→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg bg-blue-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              View All Our Services <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional capabilities */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600">
              Beyond the core services
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              More ways we can support your digital journey.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              We also offer additional technical services to help improve,
              connect and maintain your digital products.
            </p>
            <Link href="/services" className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-950">
              Explore additional services →
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {additionalCapabilities.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-700">✓</span>
                <span className="text-sm font-semibold text-blue-950">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600">
              How we work
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              A clear path from idea to solution.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Every project is different, but our approach stays grounded
              in understanding, collaboration and purposeful execution.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.number} className="relative border-t-2 border-blue-100 pt-7">
                <span className="absolute -top-[9px] left-0 h-4 w-4 rounded-full border-4 border-slate-50 bg-blue-600 ring-1 ring-blue-200" />
                <p className="text-xs font-extrabold tracking-[0.2em] text-blue-500">{step.number}</p>
                <h3 className="mt-4 text-xl font-bold text-blue-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-blue-950 py-24 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                Selected projects
              </p>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ideas taking shape through technology.
              </h2>
              <p className="mt-5 leading-8 text-blue-200">
                Explore selected projects that demonstrate our commitment
                to purposeful digital products and practical solutions.
              </p>
            </div>

            <Link href="/portfolio" className="font-semibold text-cyan-300 hover:text-white">
              Explore our portfolio →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                <div className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.style}`}>
                  <div className="absolute -right-10 -top-16 h-52 w-52 rounded-full border border-white/15" />
                  <div className="absolute -right-2 -top-8 h-36 w-36 rounded-full border border-white/15" />
                  <span className="relative text-6xl font-extrabold tracking-tight text-white/90">
                    {project.mark}
                  </span>
                  <span className="absolute bottom-4 left-5 text-xs font-bold tracking-[0.2em] text-white/70">
                    {project.number}
                  </span>
                </div>

                <div className="p-7 sm:p-8">
                  <p className="text-[10px] font-extrabold tracking-[0.16em] text-cyan-300">
                    {project.status}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-blue-300">
                    {project.type}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-blue-100/75">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link href="/portfolio" className="inline-flex rounded-lg border border-blue-300 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-900">
              View Full Portfolio <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose Ephan */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600">
              Why Ephan Technologies
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Technology should work for your vision, not the other way around.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              We focus on understanding what matters to you before
              recommending a solution. Our goal is to create digital
              products that address real needs and can grow with your
              ambitions.
            </p>
            <Link href="/about" className="mt-7 inline-flex font-bold text-blue-700 hover:text-blue-950">
              Learn more about our approach →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Client-focused", "Solutions shaped around your objectives and users."],
              ["Purpose-driven", "Technology selected to solve meaningful problems."],
              ["Collaborative", "Your ideas and feedback remain part of the process."],
              ["Growth-minded", "Solutions planned with future opportunities in mind."],
            ].map((item, index) => (
              <div key={item[0]} className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-extrabold text-blue-400">0{index + 1}</span>
                <h3 className="mt-4 font-bold text-blue-950">{item[0]}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="bg-slate-50 py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-600">
              Ephan service catalogue
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Find the right service for your next step.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Explore our website and application packages, maintenance
              plans, technical support and domain and hosting advisory
              services. Find a suitable starting point for your project.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Explore the Shop <span>↗</span>
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-blue-950/5 sm:p-9">
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Explore our offerings
                </p>
                <h3 className="mt-2 text-xl font-bold text-blue-950">
                  Services & packages
                </h3>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-800">
                ↗
              </span>
            </div>

            {[
              ["Website development", "Websites for different needs"],
              ["Application development", "Custom digital applications"],
              ["Maintenance plans", "Ongoing website and app care"],
              ["Technical support", "Assistance when you need it"],
              ["Domain & hosting advisory", "Guidance and setup assistance"],
            ].map((item, index) => (
              <Link
                href="/shop"
                key={item[0]}
                className="flex items-center gap-4 border-b border-slate-100 py-5 last:border-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-blue-800">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-blue-950">{item[0]}</p>
                  <p className="mt-1 text-xs text-slate-500">{item[1]}</p>
                </div>
                <span className="ml-auto text-slate-400">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact call to action */}
      <section id="contact" className="px-5 py-24 sm:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-950 px-7 py-16 text-center sm:px-14 sm:py-20">
          <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-20 -bottom-40 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300">
              Your vision starts here
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Have an idea? Let's build the right product for it.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-8 text-blue-200">
              Tell us what you want to create, improve or achieve.
              Let's explore the right technology solution together.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-7 py-4 text-sm font-bold text-blue-950 transition hover:bg-cyan-100"
              >
                Contact Our Team <span className="ml-3">↗</span>
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-blue-300 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-900"
              >
                WhatsApp Us
              </a>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              WhatsApp: +254 790 694325
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl font-bold text-blue-950">
                E
              </div>
              <div>
                <p className="font-extrabold tracking-[0.12em]">EPHAN</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-300">
                  Technologies
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm font-semibold leading-7 text-white">
              Building the Right Product for Your Vision.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
              Purposeful technology. Practical solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/about" className="hover:text-white">About us</Link>
              <Link href="/services" className="hover:text-white">Our services</Link>
              <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
              <Link href="/shop" className="hover:text-white">Shop</Link>
              <Link href="/contact" className="hover:text-white">Contact us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Get in touch</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp: +254 790 694325
              </a>
              <Link href="/contact" className="hover:text-white">Start a project</Link>
              <Link href="/contact" className="hover:text-white">Request support</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-8">
            <p>© 2026 Ephan Technologies. All rights reserved.</p>
            <p>Building the Right Product for Your Vision.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
