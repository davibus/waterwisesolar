import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Image
                            src="/images/waterwise-logo.png"
                            alt="Water Wise Solar Logo"
                            width={180}
                            height={180}
                            className="logo-image"
                        />
                    </div>
                    <div className="footer-cta">
                        <h2>Save Water. Conserve Land. Create Energy.</h2>
                    </div>
                    <div className="footer-contact">
                        <Link href="/about" style={{ fontSize: '1.25rem', color: 'inherit', textDecoration: 'underline' }}>Contact</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Water Wise Solar - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
