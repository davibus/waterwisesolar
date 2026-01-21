import Link from 'next/link';
import Image from 'next/image';

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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>

                    {/* Left Column: Current Status */}
                    <div style={{
                        backgroundColor: '#e3e8c1', // Approximate light green from screenshot
                        padding: '2.5rem',
                        borderRadius: '0',
                        height: '100%',
                        textAlign: 'left'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700', fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>Current status</h2>

                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                            <li style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', lineHeight: '1', marginTop: '-0.2rem' }}>•</span>
                                <span style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>
                                    Active relationships with floating solar <strong>technology providers, academic researchers, and financial partners</strong>
                                </span>
                            </li>
                            <li style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', lineHeight: '1', marginTop: '-0.2rem' }}>•</span>
                                <span style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>
                                    Active discussions with <strong>pilot-scale projects and stakeholders in Utah</strong>, including those that could launch before investment tax credits expire
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', lineHeight: '1', marginTop: '-0.2rem' }}>•</span>
                                <span style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>
                                    Currently expanding <strong>relationships with energy, water, and economic development policy makers</strong> (executive and legislative branches)
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Team */}
                    <div style={{ paddingLeft: '2rem', borderLeft: '1px solid #ccc', textAlign: 'left' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700', fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>Team</h2>

                        {/* Team Member 1: Jim */}
                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
                            {/* Image */}
                            <div style={{
                                width: '180px',
                                height: '180px',
                                flexShrink: 0,
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <Image
                                    src="/images/jimmy-anderson.png"
                                    alt="Jim Anderson"
                                    width={180}
                                    height={180}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'normal', fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>
                                    <strong>Jim Anderson</strong>
                                    <a href="mailto:jim@waterwisesolar.com" style={{ color: 'inherit', textDecoration: 'none', fontStyle: 'italic', opacity: 0.8 }}> (jim@waterwisesolar.com)</a>
                                </h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', fontSize: '1rem', textAlign: 'left' }}>
                                    Founder and Chief Developer - Water Wise Solar Solutions
                                </p>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', margin: 0, fontSize: '0.95rem', lineHeight: '1.5', textAlign: 'left' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Extensive energy project development experience and relationships</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Special expertise in complex EPC / delivery</li>
                                    <li>Univ. Portland (MBA, Energy/ Environment focus); Arizona State University (B.S. Supply Chain Management)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Team Member 2: Lee */}
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            {/* Image */}
                            <div style={{
                                width: '180px',
                                height: '180px',
                                flexShrink: 0,
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <Image
                                    src="/images/lee-addams.jpg"
                                    alt="Lee Addams"
                                    width={180}
                                    height={180}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'normal', fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>
                                    <strong>Lee Addams</strong>
                                    <a href="mailto:addams@opentrailventures.com" style={{ color: '#0284c7', textDecoration: 'underline' }}> (addams@opentrailventures.com)</a>
                                </h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', fontSize: '1rem', textAlign: 'left' }}>
                                    Founder, Open Trail Ventures, LLC; Head of Strategy and Growth, WaterWise Solar
                                </p>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', margin: 0, fontSize: '0.95rem', lineHeight: '1.5', textAlign: 'left' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Former public company management team (Valmont Industries); irrigation technology company CEO</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Advisory experience - McKinsey & Company, EY-Parthenon</li>
                                    <li>Stanford University (Ph.D Earth Sciences / Hydrology); Brigham Young University (B.Sc. Applied Physics)</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
