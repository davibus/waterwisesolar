"use client";

import Link from 'next/link';
import { getAllPages } from '@/lib/data';

function extractDate(markdown: string): string | null {
  const match = markdown.match(/([A-Z][a-z]+ \d{1,2}, \d{4})/);
  return match ? match[1] : null;
}

export default function LearnMore() {
  const allPages = getAllPages();

  // Filter for article pages (exclude home and xml)
  const articles = allPages.filter(p => {
    const url = p.metadata.url;
    return url &&
      !url.endsWith('/') &&
      !url.endsWith('waterwisesolar.com') &&
      !url.endsWith('.xml');
  }).map(p => {
    // Extract excerpt from markdown (first paragraph after the date)
    const lines = p.markdown.split('\n');
    let excerpt = '';
    let foundDate = false;
    for (const line of lines) {
      if (line.match(/[A-Z][a-z]+ \d{1,2}, \d{4}/)) {
        foundDate = true;
        continue;
      }
      if (foundDate && line.trim().length > 20) {
        excerpt = line.trim();
        break;
      }
    }

    // Extract slug from URL (e.g., "/f/introduction" from "https://waterwisesolar.com/f/introduction")
    const urlPath = p.metadata.url.replace('https://waterwisesolar.com', '').replace('http://waterwisesolar.com', '');
    const slug = urlPath.startsWith('/') ? urlPath.substring(1) : urlPath;

    return {
      title: p.metadata.title || 'Untitled Article',
      date: extractDate(p.markdown),
      url: p.metadata.url,
      slug: slug,
      excerpt: excerpt,
      image: p.metadata.og_image || null
    };
  });

  return (
    <div>
      {/* Political & Regulatory Section */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)', color: 'black' }}>Political, Social, Economic, and Regulatory Considerations</h2>
          <p className="overview-intro" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem', color: 'black' }}>
            Successful FPV deployment requires navigating complex political landscapes while balancing stakeholder interests and building community support.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🗳️</div>
              <h3>Growing Political Awareness</h3>
              <p>Political landscape reflects increasing recognition of interconnected challenges: water scarcity, energy reliability, and climate resilience driving renewable advocacy.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤔</div>
              <h3>Lingering Skepticism</h3>
              <p>Despite momentum, skepticism toward renewable energy persists in certain regions requiring strategic stakeholder engagement and local buy-in.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Multi-Stakeholder Balance</h3>
              <p>FPV development must coordinate with municipalities, water conservancy districts, recreational users, and grid operators for sustainable implementation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎣</div>
              <h3>Public Access Preservation</h3>
              <p>FPV arrays must maintain open corridors for boating, fishing, shoreline camping, and other existing recreational uses on dual-purpose reservoirs.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💼</div>
              <h3>Economic Co-Benefits</h3>
              <p>FPV development provides long-term employment, property tax revenue, and infrastructure investment while addressing water security simultaneously.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📋</div>
              <h3>Adaptive Regulatory Framework</h3>
              <p>Phased development allows communities to validate technical and political viability of each site before full build-out, building local confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>

      {/* International FPV Arrays Section */}
      <section className="section section-dark section-with-video">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>Notable International FPV Arrays with Local Application</h2>
          <p className="overview-intro" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem' }}>
            Global FPV deployments demonstrate proven technical viability and provide valuable lessons for American Southwest implementation.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌏</div>
              <h3>Global Success Models</h3>
              <p>International FPV systems (particularly Asia) demonstrate viability through large-scale deployments paired with hydroelectric generation and aquaculture operations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏞️</div>
              <h3>Land Use Maximization</h3>
              <p>Successful international projects show FPV integration with fish farms, aquaculture ponds, and hydroelectric systems creating hybrid revenue streams.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Industrial Remediation</h3>
              <p>FPV has converted environmental liabilities (industrial holding ponds, mine tailings basins) into energy-generating assets with dual environmental benefit.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✅</div>
              <h3>Proven Operational Patterns</h3>
              <p>International experience validates FPV performance in varied climates, water conditions, and co-location scenarios applicable to American Southwest.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📐</div>
              <h3>Scalability Demonstrations</h3>
              <p>Large international arrays show that multi-megawatt systems are technically feasible, operationally sound, and economically competitive.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔄</div>
              <h3>Local Adaptation Potential</h3>
              <p>U.S. can leverage international lessons while adapting to unique Western water challenges, recreational demand, and grid infrastructure constraints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>

      {/* Environmental & Permitting Section */}
      <section className="section section-light section-with-video">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>Environmental, Recreational and Permitting Factors</h2>
          <p className="overview-intro" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem' }}>
            Deploying FPV systems requires careful consideration of environmental impacts, recreational access, and regulatory compliance to ensure community acceptance.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⛰️</div>
              <h3>Topographic Constraints</h3>
              <p>Reservoirs with broad stable surfaces and gradual underwater slopes offer cost-effective deployment; steep embankments increase anchoring complexity and costs.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌊</div>
              <h3>Seasonal Variability Management</h3>
              <p>FPV arrays must accommodate seasonal drawdowns and fluctuating water levels; systems engineered to tolerate dry slopes up to 15 degrees maximum.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚤</div>
              <h3>Recreational Use Balance</h3>
              <p>Many reservoirs serve dual water storage and recreation purposes; FPV placement must avoid high-use shorelines, boat ramps, and scenic areas.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">☀️</div>
              <h3>Summer Accessibility Solutions</h3>
              <p>Moving floating solar islands or maintained corridors preserve summer watercraft activity while enabling year-round energy generation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📜</div>
              <h3>Permitting Complexity</h3>
              <p>Multi-use water bodies require stakeholder coordination, environmental review, and phased approval processes across federal, state, and local agencies.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🗣️</div>
              <h3>Community Engagement Essential</h3>
              <p>Stakeholder input balances community recreation priorities with energy production goals requiring transparent communication and adaptive design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>

      {/* Articles Section */}
      {articles.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Articles & Insights</h2>
            <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0', textAlign: 'left' }}>
              {articles.map((article, index) => (
                <li key={index} style={{ marginBottom: '1rem' }}>
                  <Link href={`/${article.slug}`} style={{ fontSize: '1.25rem', textDecoration: 'none', color: 'var(--primary)' }}>
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
