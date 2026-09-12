
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-base-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <img
              src={Logo}
              alt="DevStack Logo"
              className="w-32"
            />

            <p className="text-sm text-base-content/60 max-w-sm leading-6">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <ul className="flex gap-5 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4">
              PRODUCT
            </h4>

            <ul className="space-y-3 text-sm text-base-content/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">
              COMPANY
            </h4>

            <ul className="space-y-3 text-sm text-base-content/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">
              LEGAL
            </h4>

            <ul className="space-y-3 text-sm text-base-content/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-base-200 mt-10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-sm text-base-content/50">
              © 2026 DevStack. All rights reserved.
            </p>

            {/* Bottom Links */}
            <ul className="flex gap-6 text-sm text-base-content/50">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Privacy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
