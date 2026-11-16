
import Link from "next/link";

const websiteDevelopment = [
  { name: "Landing Page", price: "KES 15,000", description: "A professional single-page website for a product, service or campaign." },
  { name: "Personal / Portfolio Website", price: "KES 20,000", description: "Showcase your profile, skills, experience and achievements." },
  { name: "Business Website", price: "KES 30,000", description: "Present your business, services, products and contact information." },
  { name: "Church / Organization Website", price: "KES 30,000", description: "Share your mission, activities, events and organizational information." },
  { name: "Advanced Corporate Website", price: "KES 50,000", description: "A more comprehensive digital presence for established organizations." },
  { name: "E-commerce Website", price: "KES 70,000", description: "Showcase products and support online shopping functionality." },
];

const applicationDevelopment = [
  { name: "Simple Custom Web Application", price: "KES 100,000", description: "A tailored application designed around a specific business need." },
  { name: "Advanced Web Application", price: "Custom quote", description: "Complex applications with advanced workflows, integrations and dashboards." },
  { name: "Mobile Application", price: "KES 150,000", description: "Mobile application development based on your project requirements." },
  { name: "Multi-user / Portal System", price: "Custom quote", description: "Systems with user accounts, roles, dashboards and controlled access." },
  { name: "Database-driven Business System", price: "Custom quote", description: "Applications that manage business records, processes and information." },
];

const websiteMaintenance = [
  {
    name: "Essential",
    monthly: "KES 2,500",
    quarterly: "KES 7,500",
    hours: "Up to 1 hour per month",
    features: ["Basic website health checks", "Software and security update checks", "Backup checks where supported", "Minor text and image updates", "Basic troubleshooting"],
  },
  {
    name: "Standard",
    monthly: "KES 5,000",
    quarterly: "KES 15,000",
    hours: "Up to 3 hours per month",
    popular: true,
    features: ["Everything in Essential", "More frequent maintenance checks", "Broken-link and form checks", "Minor page and content updates", "Basic performance checks"],
  },
  {
    name: "Premium",
    monthly: "KES 10,000",
    quarterly: "KES 30,000",
    hours: "Up to 6 hours per month",
    features: ["Everything in Standard", "Performance monitoring", "Priority troubleshooting", "Content and image updates", "Monthly maintenance report"],
  },
];

const applicationMaintenance = [
  {
    name: "Essential",
    monthly: "KES 8,000",
    quarterly: "KES 24,000",
    hours: "Up to 2 hours per month",
    features: ["Application health checks", "Database backup checks", "Basic error monitoring", "Dependency update checks", "Minor bug investigation"],
  },
  {
    name: "Standard",
    monthly: "KES 15,000",
    quarterly: "KES 45,000",
    hours: "Up to 5 hours per month",
    popular: true,
    features: ["Everything in Essential", "Security and dependency update checks", "In-scope bug fixes", "Performance checks", "Integration checks"],
  },
  {
    name: "Premium",
    monthly: "KES 25,000+",
    quarterly: "KES 75,000+",
    hours: "Up to 10 hours per month",
    features: ["Everything in Standard", "Advanced troubleshooting", "Database performance checks", "Integration and API monitoring", "Monthly technical report"],
  },
];

const supportServices = [
  { name: "General Technical Assistance", price: "KES 1,500 / hour" },
  { name: "Website Troubleshooting", price: "KES 1,500 / hour" },
  { name: "Application Troubleshooting", price: "KES 2,000 / hour" },
  { name: "Database Assistance", price: "KES 2,000 / hour" },
  { name: "Technical Consultation", price: "KES 2,000 / hour" },
];

const additionalServices = [
  { name: "Website Migration", price: "From KES 5,000" },
  { name: "Website Redesign", price: "From KES 15,000" },
  { name: "Website Speed Optimization", price: "From KES 5,000" },
  { name: "Website Security Audit", price: "From KES 5,000" },
  { name: "Application Security Audit", price: "From KES 10,000" },
  { name: "Database Backup & Recovery Setup", price: "From KES 5,000" },
  { name: "Email Integration Setup", price: "From KES 3,000" },
  { name: "Third-party API Integration", price: "From KES 10,000" },
];

const advisoryServices = [
  { name: "Domain Name Consultation", price: "KES 1,000", description: "Advice on suitable domain names and extensions for your project." },
  { name: "Hosting Recommendation", price: "KES 1,500", description: "Guidance on suitable hosting providers and plans." },
  { name: "Domain & Hosting Setup Assistance", price: "KES 2,500", description: "Assistance with account setup and connecting your domain." },
  { name: "DNS Configuration", price: "KES 1,500", description: "Configuration of domain records and DNS settings." },
  { name: "Website Deployment Assistance", price: "Project quote", description: "Publishing your website to the hosting environment." },
  { name: "Application & Database Deployment", price: "From KES 5,000", description: "Deploying an application and configuring its database environment." },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function ServiceCard({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-3 text-2xl font-extrabold text-blue-700">{price}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        Enquire Now →
      </Link>
    </div>
  );
}

function MaintenanceCard({
  plan,
}: {
  plan: {
    name: string;
    monthly: string;
    quarterly: string;
    hours: string;
    features: string[];
    popular?: boolean;
  };
}) {
  return (
    <div className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${
      plan.popular ? "border-blue-600 ring-2 ring-blue-100" : "border-slate-200"
    }`}>
      {plan.popular && (
        <span className="mb-4 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
          Popular choice
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
      <div className="mt-5 space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Monthly</p>
          <p className="text-2xl font-extrabold text-blue-700">{plan.monthly}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Quarterly</p>
          <p className="text-lg font-bold text-slate-800">{plan.quarterly}</p>
        </div>
      </div>
      <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm font-semibold text-blue-900">
        {plan.hours}
      </p>
      <ul className="mt-5 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm leading-6 text-slate-600">
            <span className="font-bold text-blue-600">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-7 block rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        Choose This Plan
      </Link>
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-900">
            EPHAN<span className="text-blue-600">.</span>
            <span className="ml-1 text-xs font-semibold tracking-normal text-slate-500">TECHNOLOGIES</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <Link href="/about" className="hover:text-blue-700">About</Link>
            <Link href="/services" className="hover:text-blue-700">Services</Link>
            <Link href="/portfolio" className="hover:text-blue-700">Portfolio</Link>
            <Link href="/shop" className="font-bold text-blue-700">Shop</Link>
            <Link href="/contact" className="hover:text-blue-700">Contact</Link>
          </nav>
          <Link href="/contact" className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">
            Get a Quote
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-24 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
            Ephan Technologies Shop
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Digital solutions for ideas worth building.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            From professional websites and custom applications to ongoing
            maintenance and technical support, we help turn your vision into
            practical digital solutions.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-lg bg-white px-7 py-3.5 font-bold text-blue-900 hover:bg-blue-50">
              Start a Project
            </Link>
            <Link href="#catalogue" className="rounded-lg border border-white/40 px-7 py-3.5 font-bold text-white hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Catalogue introduction */}
      <section id="catalogue" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our service catalogue"
            title="Find the right solution for your needs"
            description="Explore our introductory prices. Every project is assessed according to its requirements, scope and complexity before a final quotation is issued."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Website Development", "Professional websites for individuals, businesses, schools, churches and organizations.", "#web-development"],
              ["02", "Application Development", "Custom web and mobile applications designed around your operations.", "#app-development"],
              ["03", "Website Maintenance", "Keep your website updated, checked and running smoothly.", "#website-maintenance"],
              ["04", "Application Maintenance", "Ongoing technical care for applications and their databases.", "#app-maintenance"],
              ["05", "Technical Support", "Practical troubleshooting, technical assistance and consultation.", "#technical-support"],
              ["06", "Domain & Hosting Advisory", "Guidance in choosing and setting up suitable domain and hosting services.", "#domain-hosting"],
            ].map(([number, title, description, href]) => (
              <a key={number} href={href} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                <span className="text-sm font-extrabold text-blue-600">{number}</span>
                <h3 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-blue-700">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-5 inline-block text-sm font-bold text-blue-700">Explore service →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Website development */}
      <section id="web-development" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="01 — Website development"
            title="Give your organization a professional online presence"
            description="We design and develop responsive websites that help you communicate, showcase your work and connect with your audience."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websiteDevelopment.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Application development */}
      <section id="app-development" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="02 — Application development"
            title="Build technology around the way you work"
            description="From business systems to customer portals, we develop applications based on your workflows, users and technical requirements."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applicationDevelopment.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Website maintenance */}
      <section id="website-maintenance" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="03 — Website maintenance"
            title="Keep your website in good shape"
            description="Choose a maintenance plan for regular checks, updates and agreed minor improvements. Select monthly or quarterly billing."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {websiteMaintenance.map((plan) => (
              <MaintenanceCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Application maintenance */}
      <section id="app-maintenance" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="04 — Application maintenance"
            title="Support your application as it grows"
            description="Ongoing maintenance helps keep applications, integrations and database environments monitored and supported."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {applicationMaintenance.map((plan) => (
              <MaintenanceCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical support */}
      <section id="technical-support" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="05 — Technical support"
            title="Get help when technology gets complicated"
            description="Hourly support is available for troubleshooting, technical assistance and consultation. One-hour minimum billing applies."
          />
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {supportServices.map((service, index) => (
              <div key={service.name} className={`flex flex-col justify-between gap-2 p-5 sm:flex-row sm:items-center ${index !== supportServices.length - 1 ? "border-b border-slate-100" : ""}`}>
                <span className="font-semibold text-slate-800">{service.name}</span>
                <span className="font-bold text-blue-700">{service.price}</span>
              </div>
            ))}
            <div className="bg-blue-50 p-5">
              <h3 className="font-bold text-blue-950">Urgent & Emergency Support</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm text-slate-600">Urgent support</p>
                  <p className="text-lg font-extrabold text-blue-800">KES 2,500/hr</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Emergency support</p>
                  <p className="text-lg font-extrabold text-blue-800">KES 3,500/hr</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Minimum emergency call-out</p>
                  <p className="text-lg font-extrabold text-blue-800">KES 5,000</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-600">
                Emergency support is subject to agreed coverage and availability.
                Response targets are not guaranteed resolution times. 24/7 support
                is not currently advertised.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="inline-flex rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white hover:bg-blue-800">
              Request Technical Support
            </Link>
          </div>
        </div>
      </section>

      {/* Domain and hosting */}
      <section id="domain-hosting" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="06 — Domain & hosting advisory"
            title="Choose the right foundation for your digital project"
            description="We help you select suitable domain names, hosting providers and infrastructure options. You remain the owner of your accounts and subscriptions."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisoryServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="font-bold text-blue-950">Our client-first hosting approach</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Clients purchase and own their domain, hosting, cloud and database
              accounts directly. Ephan Technologies provides recommendations,
              setup assistance and technical deployment support. Provider fees
              and subscriptions are separate from our service charges.
            </p>
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="07 — Additional technology services"
            title="More ways we can help"
            description="Additional services can be requested independently or as part of a larger project."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {additionalServices.map((service, index) => (
              <div key={service.name} className={`flex flex-col justify-between gap-2 p-5 sm:flex-row sm:items-center ${index !== additionalServices.length - 1 ? "border-b border-slate-100" : ""}`}>
                <span className="font-semibold text-slate-800">{service.name}</span>
                <span className="font-bold text-blue-700">{service.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/contact" className="font-bold text-blue-700 hover:text-blue-900">
              Enquire about an additional service →
            </Link>
          </div>
        </div>
      </section>

     
{/* Featured projects */}
<section className="px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="Our work"
      title="Featured projects"
      description="A look at selected projects and digital products being developed by Ephan Technologies."
    />

    <div className="grid gap-7 md:grid-cols-2">
      {/* WattMetric */}
      <div className="overflow-hidden rounded-2xl bg-blue-950 text-white shadow-lg">
        <div className="flex min-h-52 items-center justify-center bg-gradient-to-br from-blue-800 to-blue-950 p-8">
          <div className="text-center">
            <p className="text-4xl font-black tracking-tight">WattMetric</p>
            <p className="mt-2 text-sm text-blue-200">
              Smarter electricity management
            </p>
          </div>
        </div>

        <div className="p-7">
          <span className="rounded-full bg-blue-400/20 px-3 py-1 text-xs font-bold text-blue-200">
            IN DEVELOPMENT
          </span>

          <h3 className="mt-5 text-2xl font-bold">WattMetric</h3>

          <p className="mt-3 leading-7 text-blue-100">
            An electricity management platform designed to help Kenyan
            households and businesses understand consumption and costs,
            with support for prepaid and postpaid electricity meters.
          </p>

          {/* WattMetric progress bar */}
          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-blue-200">
                Development progress
              </span>
              <span className="text-lg font-extrabold text-white">
                40%
              </span>
            </div>

            <div
              className="h-3 w-full overflow-hidden rounded-full bg-blue-900"
              role="progressbar"
              aria-label="WattMetric development progress"
              aria-valuenow={40}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-blue-400 transition-all duration-1000"
                style={{ width: "40%" }}
              />
            </div>

            <p className="mt-2 text-xs text-blue-300">
              Indicative development estimate
            </p>
          </div>
        </div>
      </div>

      {/* Regenerated Breed Organization */}
      <div className="overflow-hidden rounded-2xl bg-indigo-950 text-white shadow-lg">
        <div className="flex min-h-52 items-center justify-center bg-gradient-to-br from-indigo-700 to-indigo-950 p-8">
          <div className="text-center">
            <p className="text-3xl font-black tracking-tight">
              REGENERATED BREED
            </p>
            <p className="mt-2 text-sm text-indigo-200">
              Christian Mission Team
            </p>
          </div>
        </div>

        <div className="p-7">
          <span className="rounded-full bg-indigo-400/20 px-3 py-1 text-xs font-bold text-indigo-200">
            IN DEVELOPMENT
          </span>

          <h3 className="mt-5 text-2xl font-bold">
            Regenerated Breed Organization
          </h3>

          <p className="mt-3 leading-7 text-indigo-100">
            A digital platform for a Christian mission organization,
            showcasing its mission, evangelism activities, events,
            discipleship groups and donation opportunities.
          </p>

          {/* Regenerated Breed progress bar */}
          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-indigo-200">
                Development progress
              </span>
              <span className="text-lg font-extrabold text-white">
                90%
              </span>
            </div>

            <div
              className="h-3 w-full overflow-hidden rounded-full bg-indigo-900"
              role="progressbar"
              aria-label="Regenerated Breed Organization development progress"
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-indigo-400 transition-all duration-1000"
                style={{ width: "90%" }}
              />
            </div>

            <p className="mt-2 text-xs text-indigo-300">
              Indicative development estimate
            </p>
          </div>
        </div>
      </div>
    </div>

    <p className="mt-5 text-center text-xs text-slate-500">
      Project progress figures are indicative estimates and may change as
      development continues.
    </p>

    <div className="mt-8 text-center">
      <Link
        href="/portfolio"
        className="font-bold text-blue-700 hover:text-blue-900"
      >
        Explore our portfolio →
      </Link>
    </div>
  </div>
</section>


      {/* Service terms */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Before you order"
            title="A few things to know"
            description="We believe in clear expectations and transparent project arrangements."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Introductory prices", "Published prices are starting prices. Final quotations depend on the agreed project scope."],
              ["Development payments", "Our proposed milestone structure is 50% deposit, 30% at an agreed milestone and 20% before final handover."],
              ["Maintenance hours", "Included hours cover agreed maintenance work. Unused hours do not automatically roll over."],
              ["Additional work", "Major new features, redesigns and work outside the agreed scope are quoted separately."],
              ["Third-party charges", "Domain, hosting, databases, premium software and external subscriptions are paid separately by the client."],
              ["Ownership and warranty", "Account ownership and source-code rights are defined in the project agreement. Development defect warranty is limited to the agreed terms."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Have an idea? Let's build it together.
          </h2>
          <p className="mt-5 leading-7 text-blue-100">
            Tell us what you want to achieve. We will help you identify the
            right solution and prepare a proposal for your project.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-white px-8 py-3.5 font-bold text-blue-900 hover:bg-blue-50">
            Contact Ephan Technologies
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row">
          <div>
            <Link href="/" className="text-2xl font-extrabold text-white">EPHAN<span className="text-blue-500">.</span></Link>
            <p className="mt-3 text-sm text-slate-400">
              Building the Right Product for Your Vision.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link href="/shop" className="hover:text-white">Shop</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-xs text-slate-500">
          © 2026 Ephan Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
