import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPage() {
    // Shared styles
    const sectionStyle = {
        padding: '4rem 0',
        borderBottom: '1px solid #e5e7eb',
        textAlign: 'left' as const, // Force left align
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
    };

    const headerStyle = {
        fontSize: '2rem',
        fontStyle: 'italic',
        color: '#333',
        marginBottom: '2rem',
        fontWeight: 'normal',
        fontFamily: 'DM Sans, sans-serif',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '3rem',
        alignItems: 'start',
    };

    const leftColStyle = {
        backgroundColor: '#e3e8c1', // Light green from screenshot
        padding: '2rem',
        height: '100%',
    };

    const subHeaderStyle = {
        color: '#0047AB', // Cobalt blueish
        fontWeight: '700',
        fontSize: '1.25rem',
        marginBottom: '1.5rem',
    };

    const listStyle = {
        listStyle: 'disc',
        paddingLeft: '1.2rem',
        margin: 0,
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#1a1a1a',
    };

    const imageGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
    };

    const imagePlaceholderStyle = {
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#cccccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        marginBottom: '1rem',
        borderRadius: '4px',
    };

    const captionStyle = {
        fontSize: '0.9rem',
        lineHeight: '1.4',
        color: '#000',
        fontWeight: '600',
    };

    return (
        <div className="section-light" style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', paddingBottom: '4rem' }}>

            {/* Section 1 - Exact replication of Screenshot */}
            <section style={sectionStyle}>
                <div style={containerStyle}>
                    <h2 style={headerStyle}>Notable US Installations</h2>

                    <div style={gridStyle}>
                        {/* Left Column */}
                        <div style={leftColStyle}>
                            <h3 style={subHeaderStyle}>Key characteristics</h3>
                            <ul style={listStyle}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>Uses standard solar panels</strong> and infrastructure
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>Runs more efficiently</strong> than land-based due to temperature buffering effects
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>No land ownership / leasing costs</strong> (land constraints often a key driver in SE Asia)
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>Provides higher energy density</strong> (1.75-2.25 acres/MW FPV vs. 5-10 acres/MW land-based)
                                </li>
                                <li>
                                    <strong>Often integrated with baseload</strong> generation (e.g. hydro, natural gas, coal)
                                </li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div>
                            <h3 style={subHeaderStyle}>Examples (US)</h3>
                            <div style={imageGridStyle}>
                                {/* Image 1 */}
                                <div>
                                    <div style={{ ...imagePlaceholderStyle, backgroundColor: 'transparent', padding: 0 }}>
                                        <Image
                                            src="/images/healdsburg pic.jpeg"
                                            alt="Healdsburg, CA floating solar installation"
                                            width={600}
                                            height={338}
                                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Healdsburg, CA 4.7 MW</li>
                                        <li>Gray water storage pond</li>
                                    </ul>
                                </div>
                                {/* Image 2 */}
                                <div>
                                    <div style={{ ...imagePlaceholderStyle, backgroundColor: 'transparent', padding: 0 }}>
                                        <Image
                                            src="/images/1x2-windsor-CA.jpg"
                                            alt="Windsor, CA floating solar installation"
                                            width={600}
                                            height={338}
                                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Windsor, CA 1.8 MW..</li>
                                        <li>"Recycled" water pond</li>
                                    </ul>
                                </div>
                                {/* Image 3 */}
                                <div>
                                    <div style={{ ...imagePlaceholderStyle, backgroundColor: 'transparent', padding: 0 }}>
                                        <Image
                                            src="/images/2x1-park-city-UT.jpg"
                                            alt="Park City, UT floating solar installation"
                                            width={600}
                                            height={338}
                                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Park City, UT 0.6 MW</li>
                                        <li>Raw Water Storage Pond</li>
                                    </ul>
                                </div>
                                {/* Image 4 */}
                                <div>
                                    <div style={{ ...imagePlaceholderStyle, backgroundColor: 'transparent', padding: 0 }}>
                                        <Image
                                            src="/images/2x2-sayreville-NJ.jpg"
                                            alt="Sayreville, NJ floating solar installation"
                                            width={600}
                                            height={338}
                                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Sayreville, NJ, 4.4 MW</li>
                                        <li>Raw water storage pond</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 - Placeholder Duplicate */}
            <section style={sectionStyle}>
                <div style={containerStyle}>
                    <h2 style={headerStyle}>Larger International Installations</h2>

                    <div style={gridStyle}>
                        {/* Left Column */}
                        <div style={leftColStyle}>
                            <h3 style={subHeaderStyle}>Additional characteristics</h3>
                            <ul style={listStyle}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>Reduced evaporation</strong> saves critical water resources in arid regions
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>Algae growth mitigation</strong> improves water quality and lowers treatment costs
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>Scalable design</strong> allows for phased implementation and expansion
                                </li>
                                <li>
                                    <strong>Quick deployment</strong> relative to complex land-based civil engineering projects
                                </li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div>
                            <h3 style={subHeaderStyle}>Additional Examples</h3>
                            <div style={imageGridStyle}>
                                {/* Image 1 */}
                                <div>
                                    <div style={{ ...imagePlaceholderStyle, backgroundColor: 'transparent', padding: 0 }}>
                                        <Image
                                            src="/images/2-1x1-west-java-indonesia.jpg"
                                            alt="West Java, Indonesia floating solar installation"
                                            width={600}
                                            height={338}
                                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>West Java, Indonesia, 192 MW</li>
                                        <li>Hydroelectric Reservoir</li>
                                    </ul>
                                </div>
                                {/* Image 2 */}
                                <div>
                                    <div style={{ ...imagePlaceholderStyle, backgroundColor: 'transparent', padding: 0 }}>
                                        <Image
                                            src="/images/2-1x2-three-gorges-new-energy-china.jpg"
                                            alt="Three Gorges New Energy, China floating solar installation"
                                            width={600}
                                            height={338}
                                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Three Gorges New Energy, China, 70 MW</li>
                                        <li>Hydroelectric Basin</li>
                                    </ul>
                                </div>
                                {/* Image 3 */}
                                <div>
                                    <div style={{ ...imagePlaceholderStyle, backgroundColor: 'transparent', padding: 0 }}>
                                        <Image
                                            src="/images/2-2x1-china.jpg"
                                            alt="China floating solar installation"
                                            width={600}
                                            height={338}
                                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>China, 150 MW</li>
                                        <li>Aquaculture Integration</li>
                                    </ul>
                                </div>
                                {/* Image 4 */}
                                <div>
                                    <div style={{ ...imagePlaceholderStyle, backgroundColor: 'transparent', padding: 0 }}>
                                        <Image
                                            src="/images/2-2x2-zhejiang-china.jpg"
                                            alt="Zhejiang, China floating solar installation"
                                            width={600}
                                            height={338}
                                            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Zhejiang, China, 200 MW</li>
                                        <li>Aquaculture Integration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
