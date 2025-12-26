import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link href="/" className="logo">
                        Water Wise Solar Solutions
                    </Link>
                    <div className="nav-links">
                        <Link href="/">Home</Link>
                        <Link href="/problem-solution">The Problem & Solution</Link>
                        <Link href="/technology">Technology</Link>
                        <Link href="/priority-sites">Priority Sites</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

