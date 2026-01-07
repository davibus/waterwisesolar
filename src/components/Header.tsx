'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <Link href="/" className="logo">
                        <Image
                            src="/images/header-logo.jpg"
                            alt="Water Wise Solar Solutions"
                            width={50}
                            height={50}
                            className="header-logo-image"
                        />
                        <span>Water Wise Solar Solutions</span>
                    </Link>

                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                    </button>

                    <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <Link href="/technology" onClick={closeMobileMenu}>Learn More</Link>
                        <Link href="/gallery" onClick={closeMobileMenu}>Gallery</Link>
                        <Link href="/about" onClick={closeMobileMenu}>About Us</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

