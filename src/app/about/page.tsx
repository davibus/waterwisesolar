import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div>
            {/* About Us Section - Styled like Political Section */}
            <section className="section section-light section-with-video" style={{
                backgroundImage: 'url(/images/AdobeStock_1500691155_Preview.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '8rem', // Account for fixed header
                paddingBottom: '8rem'
            }}>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}>About Us</h1>
                    <p className="overview-intro" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem', color: 'white' }}>
                        We are dedicated to pioneering sustainable water and energy solutions for the American Southwest.
                    </p>

                    <div className="values-grid">
                        {/* Team Member / Content Placeholders */}
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="value-card">
                                {/* Image Placeholder */}
                                <div style={{
                                    width: '100%',
                                    height: '240px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    marginBottom: '1.5rem',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px dashed rgba(255,255,255,0.3)'
                                }}>
                                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Image Placeholder</span>
                                </div>

                                <h3>Member Name {item}</h3>
                                <p>Position Title</p>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
                                    Brief bio or description of role. Specialized expertise in renewable energy and water conservation.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
