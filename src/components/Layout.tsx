import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex min-h-dvh flex-col">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-brand-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-800 text-sm font-bold text-white">
              CF
            </span>
            <span>ChannelForge</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-800 [&.active]:text-brand-800 [&.active]:font-semibold"
                activeProps={{ className: "text-brand-800 font-semibold" }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-brand-800 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-800 [&.active]:bg-brand-50 [&.active]:text-brand-800"
                  activeProps={{ className: "bg-brand-50 text-brand-800" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 text-center text-sm"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ─── Main Content ─── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 text-lg font-bold text-brand-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-800 text-xs font-bold text-white">
                  CF
                </span>
                ChannelForge
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Strategy, content, and measurement — end to end, across every
                channel. No fluff. Just campaigns that ship.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-brand-900">Services</h4>
              <ul className="mt-4 space-y-3">
                <li><Link to="/services" className="text-sm text-gray-500 transition-colors hover:text-brand-700">Marketing Strategy</Link></li>
                <li><Link to="/services" className="text-sm text-gray-500 transition-colors hover:text-brand-700">Content Creation</Link></li>
                <li><Link to="/services" className="text-sm text-gray-500 transition-colors hover:text-brand-700">Campaign Management</Link></li>
                <li><Link to="/services" className="text-sm text-gray-500 transition-colors hover:text-brand-700">Analytics & Reporting</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-brand-900">Company</h4>
              <ul className="mt-4 space-y-3">
                <li><Link to="/about" className="text-sm text-gray-500 transition-colors hover:text-brand-700">About Us</Link></li>
                <li><Link to="/blog" className="text-sm text-gray-500 transition-colors hover:text-brand-700">Blog</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-500 transition-colors hover:text-brand-700">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-brand-900">Get in Touch</h4>
              <ul className="mt-4 space-y-3">
                <li className="text-sm text-gray-500">hello@channelforge.io</li>
                <li className="text-sm text-gray-500">1-800-CHANNEL</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ChannelForge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}