import Link from 'next/link';

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
                    <h2 style={headerStyle}>Floating solar is a proven technology (1 / 2)</h2>

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
                                    <div style={imagePlaceholderStyle}>[Healdsburg Image]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Healdsburg, CA 4.7 MW</li>
                                        <li>Gray water storage pond</li>
                                    </ul>
                                </div>
                                {/* Image 2 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Windsor Image]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Windsor, CA 1.8 MW..</li>
                                        <li>"Recycled" water pond</li>
                                    </ul>
                                </div>
                                {/* Image 3 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Park City Image]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Park City, UT 0.6 MW</li>
                                        <li>Raw Water Storage Pond</li>
                                    </ul>
                                </div>
                                {/* Image 4 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Sayreville Image]</div>
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
                    <h2 style={headerStyle}>Floating solar is a proven technology (2 / 2)</h2>

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
                                    <div style={imagePlaceholderStyle}>[Example Image 1]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Location 1, 2.5 MW</li>
                                        <li>Irrigation Reservoir</li>
                                    </ul>
                                </div>
                                {/* Image 2 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Example Image 2]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Location 2, 5.0 MW</li>
                                        <li>Hydroelectric Basin</li>
                                    </ul>
                                </div>
                                {/* Image 3 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Example Image 3]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Location 3, 1.2 MW</li>
                                        <li>Wastewater Treatment</li>
                                    </ul>
                                </div>
                                {/* Image 4 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Example Image 4]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Location 4, 3.8 MW</li>
                                        <li>Industrial Cooling Pond</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Placeholder Duplicate */}
            <section style={{ ...sectionStyle, borderBottom: 'none' }}>
                <div style={containerStyle}>
                    <h2 style={headerStyle}>Future Capabilities & Scale</h2>

                    <div style={gridStyle}>
                        {/* Left Column */}
                        <div style={leftColStyle}>
                            <h3 style={subHeaderStyle}>Projected growth</h3>
                            <ul style={listStyle}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>GW-scale potential</strong> in the American Southwest
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>Hybridization</strong> with existing hydro infrastructure
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong>Grid resilience</strong> through distributed generation assets
                                </li>
                                <li>
                                    <strong>Economic development</strong> through local green energy jobs
                                </li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div>
                            <h3 style={subHeaderStyle}>Future Concept Concepts</h3>
                            <div style={imageGridStyle}>
                                {/* Image 1 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Concept Image 1]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Future Site A</li>
                                        <li>Evaluation Phase</li>
                                    </ul>
                                </div>
                                {/* Image 2 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Concept Image 2]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Future Site B</li>
                                        <li>Planning Phase</li>
                                    </ul>
                                </div>
                                {/* Image 3 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Concept Image 3]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Future Site C</li>
                                        <li>Design Phase</li>
                                    </ul>
                                </div>
                                {/* Image 4 */}
                                <div>
                                    <div style={imagePlaceholderStyle}>[Concept Image 4]</div>
                                    <ul style={{ ...listStyle, fontWeight: 'bold' }}>
                                        <li>Future Site D</li>
                                        <li>Permitting Phase</li>
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
