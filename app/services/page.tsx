
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "We design and develop professional, responsive websites that establish your online presence, communicate your brand and help you connect with your audience.",
    features: [
      "Business and corporate websites",
      "School and educational institution websites",
      "Church and ministry websites",
      "Personal and portfolio websites",
      "E-commerce websites and online stores",
      "Website redesign and modernization",
    ],
  },
  {
    number: "02",
    title: "Application Development",
    description:
      "We build purposeful web and mobile applications that help businesses and organizations manage operations, serve customers and turn ideas into working digital products.",
    features: [
      "Custom web application development",
      "Business management systems",
      "Customer portals and dashboards",
      "Multi-user platforms and applications",
      "Workflow and productivity applications",
      "Database-driven applications",
      "Mobile application development",
    ],
  },
  {
    number: "03",
    title: "Website Maintenance",
    description:
      "We help keep your website updated, functional and reliable through ongoing maintenance and improvements.",
    features: [
      "Website content and information updates",
      "Page and image updates",
      "Routine website checks",
      "Broken link and display issue corrections",
      "Website performance improvements",
      "Technical maintenance and troubleshooting",
    ],
  },
  {
    number: "04",
    title: "Application Maintenance",
    description:
      "We provide ongoing technical care for web applications and digital systems to help maintain functionality, reliability and usability.",
    features: [
      "Application bug fixes and troubleshooting",
      "Feature updates and improvements",
      "Database maintenance assistance",
      "Application performance optimization",
      "User interface improvements",
      "Routine technical checks",
    ],
  },
  {
    number: "05",
    title: "Technical Support",
    description:
      "We provide technical assistance to help individuals, businesses and organizations resolve website, application and related technology challenges.",
    features: [
      "Website troubleshooting",
      "Application error investigation",
      "Database assistance",
      "Technical consultations",
      "Website and application support",
      "Urgent and emergency technical assistance",
    ],
  },
  {
    number: "06",
    title: "Domain & Hosting Advisory",
    description:
      "We help clients make informed decisions about domain names, hosting providers and the infrastructure needed to run their digital products.",
    features: [
      "Domain name consultation",
      "Hosting provider and plan recommendations",
      "Domain and hosting setup assistance",
      "DNS configuration",
      "Website deployment assistance",
      "Application and database deployment assistance",
    ],
  },
];

const additionalServices = [
  {
    title: "Website Migration",
    description:
      "Move an existing website to a new hosting provider or platform with appropriate migration planning and testing.",
  },
  {
    title: "Website Redesign",
    description:
      "Refresh an existing website's appearance, structure and user experience to better reflect your organization.",
  },
  {
    title: "Speed Optimization",
    description:
      "Identify and address performance issues to improve website loading and user experience.",
  },
  {
    title: "Security Audits",
    description:
      "Review website or application security configurations and identify areas that need attention.",
  },
  {
    title: "Email Integration",
    description:
      "Connect supported email services and configure relevant website or application email functionality.",
  },
  {
    title: "Third-Party API Integration",
    description:
      "Connect applications with external platforms and services to support additional functionality.",
  },
  {
    title: "Database Backup & Recovery Setup",
    description:
      "Assist with backup planning and recovery arrangements for supported application databases.",
  },
];

export default function ServicesPage() {
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
            <Link href="/services" className="text-blue-600">Services</Link>
            <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 px-6 py-24 text-white md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-800/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            What We Do
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Technology solutions built around your vision.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">
            From professional websites to custom applications and ongoing
            technical support, we help individuals, businesses and
            organizations turn ideas into purposeful digital solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-7 py-4 font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/shop"
              className="rounded-lg border border-blue-300 px-7 py-4 font-semibold text-white transition hover:bg-blue-900"
            >
              Explore Our Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">
            The right solution starts with the right understanding.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every project has a different purpose. We take time to understand
            your objectives, identify what you need and recommend an
            appropriate solution. Whether you are starting from scratch or
            improving an existing digital product, we aim to build around
            your actual requirements.
          </p>
        </div>

        {/* Main services */}
        <div className="mt-14 space-y-8">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-8 rounded-3xl border border-slate-200 p-8 transition hover:border-blue-200 hover:shadow-lg md:grid-cols-2 md:p-12"
            >
              <div>
                <p className="text-sm font-bold tracking-widest text-blue-600">
                  SERVICE {service.number}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-blue-950 md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex font-semibold text-blue-700 hover:text-blue-950"
                >
                  Discuss this service →
                </Link>
              </div>

              <div className="rounded-2xl bg-slate-50 p-7">
                <h4 className="font-bold text-blue-950">
                  What this can include
                </h4>

                <ul className="mt-5 space-y-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <span className="mt-1 font-bold text-blue-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Additional technical services */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              More Ways We Can Help
            </p>

            <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">
              Additional technical services.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Beyond our core services, we offer additional technical
              assistance to improve, extend and support existing digital
              products.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-700">
                  +
                </div>

                <h3 className="text-lg font-bold text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/shop"
              className="font-semibold text-blue-700 hover:text-blue-950"
            >
              View service packages and starting prices →
            </Link>
          </div>
        </div>
      </section>

      {/* Domain and hosting approach */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Domain & Hosting
            </p>

            <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">
              Your digital assets. Your ownership. Our technical guidance.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We help clients choose suitable domain names, hosting providers
              and infrastructure for their websites and applications. Our
              approach is designed to give clients ownership and control of
              their digital assets.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Get Domain & Hosting Advice
            </Link>
          </div>

          <div className="rounded-3xl bg-blue-950 p-8 text-white md:p-10">
            <h3 className="text-xl font-bold">
              How the arrangement works
            </h3>

            <ul className="mt-7 space-y-6">
              {[
                {
                  title: "Client ownership",
                  description:
                    "The domain, hosting and database accounts are registered and owned by the client.",
                },
                {
                  title: "Independent payments",
                  description:
                    "Clients pay domain and hosting providers directly for their subscriptions and renewals.",
                },
                {
                  title: "Ephan's assistance",
                  description:
                    "We advise, assist with setup and configuration, and help deploy and test the digital product.",
                },
                {
                  title: "Ongoing support",
                  description:
                    "Additional technical management and support can be arranged under a separate agreement.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">
              Not just building products. Building the right products.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-slate-600">
              We believe successful technology begins with a clear purpose.
              We take time to understand your objectives, plan the solution,
              develop the product and refine it around your needs.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {["Discover", "Plan", "Build", "Improve"].map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-bold text-blue-600">
                    0{index + 1}
                  </p>
                  <p className="mt-2 font-bold text-blue-950">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Let's Build Something Meaningful
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mt-5 leading-7 text-blue-100">
            Tell us what you want to achieve. Let's explore the right
            technology solution for your vision.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-7 py-4 font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Start a Conversation
            </Link>

            <Link
              href="/shop"
              className="rounded-lg border border-blue-300 px-7 py-4 font-semibold text-white transition hover:bg-blue-900"
            >
              View Our Shop
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Ephan Technologies. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link href="/services" className="font-medium text-blue-700 hover:text-blue-900">
              Services
            </Link>
            <Link href="/shop" className="font-medium text-blue-700 hover:text-blue-900">
              Shop
            </Link>
            <Link href="/contact" className="font-medium text-blue-700 hover:text-blue-900">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
