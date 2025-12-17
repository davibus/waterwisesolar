export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Water Wise Solar Solutions. All rights reserved.</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                    Advocating for Floating Solar in the Colorado River Basin and beyond.
                </p>
            </div>
        </footer>
    );
}
