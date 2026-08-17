import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="section section-light" style={{ minHeight: '100vh', padding: '4rem 0', textAlign: 'left' }}>
            <div className="container">
                {/* Main Page Title */}
                <h1 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    marginBottom: '3rem',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    color: '#1a1a1a',
                    textAlign: 'left'
                }}>
                    About Us
                </h1>

                <div>
                    {/* Team */}
                    <div style={{ textAlign: 'left' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700', fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>Team</h2>

                        {/* Team Member 1: Jim */}
                        <div style={{ marginBottom: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'normal', fontFamily: 'DM Sans, sans-serif', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <a href="https://www.linkedin.com/in/jamespwaterwise/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <strong>Jim Andersen</strong>
                                    <a href="mailto:jim@waterwisesolar.com" style={{ color: 'inherit', textDecoration: 'none', fontStyle: 'italic', opacity: 0.8 }}> (jim@waterwisesolar.com)</a>
                                </h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', fontSize: '1rem', textAlign: 'left' }}>
                                    <strong>Co-Founder</strong>, Water Wise Solar, LLC, Site Development and Technology
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2: Lee */}
                        <div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'normal', fontFamily: 'DM Sans, sans-serif', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <a href="https://www.linkedin.com/in/leeaddams/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <strong>Lee Addams</strong>
                                    <a href="mailto:lee@waterwisesolar.com" style={{ color: '#0284c7', textDecoration: 'underline', fontStyle: 'italic' }}> (lee@waterwisesolar.com)</a>
                                </h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', fontSize: '1rem', textAlign: 'left' }}>
                                    <strong>Founder</strong>, Open Trail Ventures<br />
                                    <strong>Co-founder</strong>, Water Wise Solar, LLC, Operations and Corp Development
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
