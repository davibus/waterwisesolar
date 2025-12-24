import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-cta">
                        <h2>Let's Get Moving</h2>
                        <p>
                            We seek collaboration with water boards for bathymetric data, utility application support, and public outreach.
                        </p>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Information</h3>
                        <p><strong>James P. Andersen</strong></p>
                        <p>Phone: <a href="tel:8016471007">(801) 647-1007</a></p>
                        <p>Email: <a href="mailto:jamespandersen@gmail.com">jamespandersen@gmail.com</a></p>
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
