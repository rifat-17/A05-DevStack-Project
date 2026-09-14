
import Logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    return (
        <header className="border-b border-base-200 sticky top-0 z-50 bg-base-100">
            <nav className="max-w-7xl mx-auto px-4 py-4 ">

                <div className="grid grid-cols-3 items-center">

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden justify-self-start text-2xl"
                        aria-label="Open menu"
                    >
                        <RxHamburgerMenu />
                    </button>

                    {/* Logo */}
                    <a href="/" className="justify-self-center md:justify-self-start">
                        <img
                            src={Logo}
                            alt="DevStack Logo"
                            className="w-28"
                        />
                    </a>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center justify-center gap-6 text-sm font-medium">
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary transition-colors"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-primary transition-colors"
                            >
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-primary transition-colors"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-primary transition-colors"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-primary transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Authentication Buttons */}
                    <div className="hidden md:flex items-center gap-2 justify-self-end">
                        <button className="btn btn-soft">
                            Sign In
                        </button>

                        <button className="btn btn-secondary">
                            Sign Up
                        </button>
                    </div>

                </div>

            </nav>
        </header>
    );
};

export default Nav;
