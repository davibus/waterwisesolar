import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
                    <div className="nav-links">
                        <Link href="/technology">Learn More</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/about">About Us</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

