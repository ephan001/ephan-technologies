
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We explore practical and creative ways to solve problems through technology.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "We aim to deliver reliable, thoughtful and well-crafted digital products.",
  },
  {
    number: "03",
    title: "Partnership",
    description:
      "We work closely with our clients, understanding their needs and goals.",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "We believe technology should create meaningful value for people and businesses.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-950">
            EPHAN<span className="text-blue-600">.</span>
            <span className="ml-2 text-sm font-medium text-slate-500">
              Technologies
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
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

      <section className="bg-blue-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            About Ephan Technologies
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Technology built around your vision.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">
            We help individuals, businesses and organizations turn ideas into
            practical digital solutions that support growth and create impact.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
            Who We Are
          </p>
          <h2 className="text-3xl font-bold leading-tight text-blue-950 md:text-4xl">
            Your ideas deserve the right technology.
          </h2>
          <p className="mt-6 leading-8 text-slate-600">
            Ephan Technologies is a technology solutions company focused on
            building websites, applications and custom digital products.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Our approach begins with understanding your vision. We then work
            towards creating a solution that fits your objectives, serves your
            audience and can grow with your needs.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-8 md:p-12">
          <div className="rounded-2xl bg-blue-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Our guiding principle
            </p>
            <p className="mt-6 text-3xl font-bold leading-snug">
              Building the Right Product for Your Vision.
            </p>
            <div className="mt-8 h-1 w-20 rounded-full bg-blue-500" />
            <p className="mt-6 leading-7 text-blue-100">
              The right solution starts with understanding the right problem.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Direction
            </p>
            <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">
              What drives us forward
            </h2>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-bold text-blue-950">Our Mission</h3>
              <p className="mt-4 leading-8 text-slate-600">
                To deliver practical, innovative and accessible technology
                solutions that help people and organizations achieve their goals.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-bold text-blue-950">Our Vision</h3>
              <p className="mt-4 leading-8 text-slate-600">
                To become a trusted technology partner, creating digital
                solutions that make a meaningful difference in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Our Values
          </p>
          <h2 className="mt-4 text-3xl font-bold text-blue-950 md:text-4xl">
            The principles behind our work
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.number} className="border-t-2 border-blue-600 pt-6">
              <p className="text-sm font-bold text-blue-600">{value.number}</p>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                {value.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Have an idea you want to bring to life?
          </h2>
          <p className="mt-5 leading-7 text-blue-100">
            Let's explore the right digital solution for your vision.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-4 font-semibold text-blue-950 hover:bg-blue-50"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© {2026} Ephan Technologies. All rights reserved.</p>
          <Link href="/" className="font-medium text-blue-700 hover:text-blue-900">
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
