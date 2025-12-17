import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="container" style={{ textAlign: 'center' }}>
                <nav style={{ justifyContent: 'center' }}>
                    <Link href="/" className="logo">
                        Water Wise Solar Solutions
                    </Link>
                </nav>
            </div>
        </header>
    );
}

