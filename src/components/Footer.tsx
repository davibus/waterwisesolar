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
                            alt="Water Wise Solar Solutions Logo"
                            width={180}
                            height={180}
                            className="logo-image"
                        />
                    </div>
                    <div className="footer-cta">
                        <h2>Save Water. Conserve Land. Create Energy.</h2>
                        <p>
                            We seek collaboration with water boards for bathymetric data, utility application support, and public outreach.
                        </p>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Information</h3>
                        <p><strong>James P. Andersen</strong></p>
                        <p>Phone: <a href="tel:8016471007">(801) 647-1007</a></p>
                        <p>Email: <a href="mailto:jim@waterwisesolar.com">jim@waterwisesolar.com</a></p>
                        <p>Website: <Link href="/">Waterwisesolar.com</Link></p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Water Wise Solar Solutions - All Rights Reserved.</p>
                    <p className="footer-note">Based on research from NREL, Pacificorp OATT, and Utah FPV Feasibility Studies.</p>
                </div>
            </div>
        </footer>
    );
}
