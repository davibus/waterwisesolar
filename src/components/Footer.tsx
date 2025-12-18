export default function Footer() {
    return (
        <footer className="footer">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p>&copy; {new Date().getFullYear()} Water Wise Solar Solutions - All Rights Reserved.</p>
                <p style={{ fontSize: '0.8rem' }}>
                    powered by
                </p>
            </div>
        </footer>
    );
}
