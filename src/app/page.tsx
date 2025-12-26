import Link from 'next/link';
import Image from 'next/image';
import { getHomePage, getAllPages, PageData } from '@/lib/data';
import HeroVideo from '@/components/HeroVideo';
import SectionVideo from '@/components/SectionVideo';

function extractDate(markdown: string): string | null {
  const match = markdown.match(/([A-Z][a-z]+ \d{1,2}, \d{4})/);
  return match ? match[1] : null;
}

function generateAltText(title: string): string {
  // Create SEO-friendly alt text based on article title
  const altTextMap: { [key: string]: string } = {
    'Introduction': 'Floating solar panels on reservoir - water-wise renewable energy solution',
    'Solar:  Land vs. Water': 'Large-scale solar farm aerial view - ground-mounted photovoltaic installation',
    'FPV Size and Business Case': 'Extensive solar panel array - floating photovoltaic business case visualization',
    'Electricity Pricing, PPA\'s and Government Programs': 'Solar energy infrastructure - power purchase agreement renewable energy',
    'FPV & Water Conservation ': 'Water reservoir and dam - conservation infrastructure for floating solar',
    'Political, Social, Economic, and Regulatory Considerations': 'Wind turbines and renewable energy - clean energy policy and regulation',
    'Notable International FPV Arrays with Local Application': 'Aerial view of solar panel rows - international floating photovoltaic array',
    'Environmental, Recreational and Permitting Factors': 'Solar panels on water - environmental impact of aquatic renewable energy'
  };

  return altTextMap[title] || `${title} - floating solar and water conservation`;
}

export default function Home() {
  const homePage = getHomePage();
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
      {/* Hero Section - Full Viewport */}
      <section className="hero-main">
        <HeroVideo />
        <div className="hero-content-overlay">
          <h1>Innovating in the Intermountain West and Southwest to save water, save land, and accelerate peak matching energy generation</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section section-warm">
        <div className="container">
          <div className="two-column-layout">
            <div className="column-text">
              <h2>The Water-Energy Nexus</h2>
              <p className="overview-intro">
                The Colorado River, a vital water source for the American West, is in crisis. Ongoing drought, chronic overuse, and climate pressures have triggered historic water shortages, prompting mandatory cutbacks and urgent calls to rebalance the region's water withdrawals with its dwindling supply.
              </p>
              <p className="overview-intro">
                Floating solar photovoltaic (FPV) systems offer a complementary solution that mitigates evaporative losses from reservoirs while generating clean electricity—without requiring major changes to consumer behavior or infrastructure expansion. Utah, Arizona, and New Mexico, with their abundant solar resources, constant drought conditions, and numerous man-made reservoirs, are ideal locations for this technology.
              </p>
            </div>
            <div className="column-image">
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', height: '100%'}}>
                <Image
                  src="/images/AdobeStock_1500691155_Preview.jpeg"
                  alt="Water and energy infrastructure - floating solar technology"
                  width={600}
                  height={600}
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}}
                />
                <Image
                  src="/images/AdobeStock_1515563302_Preview.jpeg"
                  alt="Renewable energy and water conservation systems"
                  width={600}
                  height={600}
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}}
                />
                <Image
                  src="/images/AdobeStock_1615928997_Preview.jpeg"
                  alt="Solar power generation on water bodies"
                  width={600}
                  height={600}
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}}
                />
                <Image
                  src="/images/AdobeStock_1739744825_Preview.jpeg"
                  alt="Sustainable water and energy solutions"
                  width={600}
                  height={600}
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar: Land vs. Water Section */}
      <section className="section section-light section-with-video">
        <SectionVideo />
        <div className="container section-content-overlay">
          <h2 style={{textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}>Solar: Land vs. Water</h2>
          <p className="overview-intro" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem'}}>
            Floating solar systems (FPV) offer several advantages over traditional ground-mounted photovoltaic (PV) installations, particularly in arid regions where land is scarce and water evaporation rates are high.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏞️</div>
              <h3>Efficient Land Use</h3>
              <p>FPV enables dual-use of existing water bodies—such as reservoirs, irrigation ponds, and wastewater lagoons—without consuming valuable agricultural land, habitat corridors, or urban development zones.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Improved Performance</h3>
              <p>PV panels deployed over water operate at lower ambient temperatures due to thermal buffering. This cooling effect can enhance panel efficiency by 5–10% relative to land-based systems.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💧</div>
              <h3>Water Conservation</h3>
              <p>Every acre of FPV coverage in New Mexico can save approximately 5.6 acre-feet of water annually by reducing direct surface evaporation through shading and reduced air flow exposure.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔌</div>
              <h3>Infrastructure Synergies</h3>
              <p>Reservoirs typically have existing infrastructure—access roads, water management personnel, and connections to utilities—significantly reducing development and interconnection costs.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Reduced Environmental Impact</h3>
              <p>FPV installations avoid land clearing, grading, or soil compaction. They require no concrete foundations or perimeter fencing, with minimal vegetation removal or habitat fragmentation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">☀️</div>
              <h3>Minimized Obstruction Losses</h3>
              <p>Open water surfaces offer uniform solar exposure with little risk of obstruction from trees, buildings, or topographic shading, allowing for consistent panel layout and optimized energy yield.</p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/f/solar-land-vs-water" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* FPV Size and Business Case Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}>FPV Size and Business Case</h2>
          <p className="overview-intro" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem'}}>
            Understanding the economics and technical specifications of floating photovoltaic systems is essential for successful deployment and financing.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">📏</div>
              <h3>Sizing Standard</h3>
              <p>A 20 MW floating solar array requires approximately 35-40 acres of open water surface, with conservative planning of ~2.0 acres per MW.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Capital Investment</h3>
              <p>Estimated total installed cost of ~$40 million for 20 MW ($2 million per MW), based on proven U.S. installations like Healdsburg, California.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Energy Production</h3>
              <p>New Mexico systems produce approximately 1.75 million kWh per installed MW annually; Utah 1.6 million kWh; Arizona 1.9 million kWh per year.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔌</div>
              <h3>Grid Constraints</h3>
              <p>Maximum array sizing is limited by available transmission infrastructure, transformer ratings, and line ampacity requiring formal utility studies.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Phased Deployment Strategy</h3>
              <p>Implementation in phases reduces risk, enables proof-of-concept testing, minimizes visual disruption, and allows regulatory iteration.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💵</div>
              <h3>Proven Financing Model</h3>
              <p>A 1-acre FPV system ($2M) generating 1.75 GWh annually yields ~$210K revenue (electricity + renewable credits) supporting debt service on 20-year loans at ~6.4% rates.</p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/f/fpv-size-and-business-case" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* FPV & Water Conservation Section */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}>FPV & Water Conservation</h2>
          <p className="overview-intro" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem'}}>
            Floating solar arrays provide a scientifically-validated approach to reducing evaporative water loss from reservoirs while generating clean electricity.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💧</div>
              <h3>Massive Evaporation Problem</h3>
              <p>Lake Mead loses 800,000 acre-feet annually (~6% of Colorado River flow) and Lake Powell loses nearly 860,000 acre-feet from evaporation and seepage.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Quantified Water Savings</h3>
              <p>Each acre of FPV coverage saves approximately 4.6 acre-feet of water annually in Utah; 5.63 in New Mexico; and 6.2 in Arizona through 70% evaporation reduction.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3>Scientific Basis</h3>
              <p>Water savings calculations use NREL's Penman-Monteith equation accounting for solar radiation, temperature, humidity, wind speed, and atmospheric pressure.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Complementary Strategy</h3>
              <p>FPV doesn't require difficult behavior changes in agriculture or cities, offering an alternative to expensive water buyback programs ($360/acre-foot in Utah).</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Multi-Benefit Protection</h3>
              <p>FPV improves water quality, reduces water movement erosion, minimizes dust accumulation, and preserves water quantity simultaneously.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌊</div>
              <h3>Basin-Wide Advantage</h3>
              <p>Water conservation from FPV benefits all Colorado River states through shared resource protection without requiring cross-border policy coordination.</p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/f/fpv-water-conservation" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Electricity Pricing, PPAs Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}>Electricity Pricing, PPAs and Government Programs</h2>
          <p className="overview-intro" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem'}}>
            Successfully financing and operating FPV projects requires understanding power purchase agreements, market pricing structures, and available government incentives.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">📄</div>
              <h3>PPA Foundation</h3>
              <p>Long-term Power Purchase Agreements (10-25 years) guarantee fixed electricity prices, securing project financing while minimizing market volatility exposure.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💹</div>
              <h3>Market Pricing Benchmarks</h3>
              <p>California's CAISO publishes day-ahead and real-time market data serving as pricing reference for Southwest renewable energy sales and PPA structuring.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3>Baseload Preference</h3>
              <p>Clean Energy Buyers Association pushes for "firmed energy" delivery, favoring technologies with consistency over intermittent solar/wind alone.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏛️</div>
              <h3>REAP Funding Pause</h3>
              <p>USDA's Rural Energy for America Program (traditionally supporting rural FPV) was suspended under Trump administration, eliminating key guaranteed loan source.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Alternative Incentives Available</h3>
              <p>Environmental Quality Incentives Program (EQIP) under USDA Natural Resources Conservation Service offers cost-share grants for water conservation projects.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Hidden Opportunity Costs</h3>
              <p>Removing NEPA compliance and Phase I Environmental Assessments from federal programs streamlines smaller municipal FPV projects on previously disturbed land.</p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/f/electricity-pricing-ppas-and-government-programs" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Political & Regulatory Section */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}>Political, Social, Economic, and Regulatory Considerations</h2>
          <p className="overview-intro" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem'}}>
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
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/f/political-social-economic-and-regulatory-considerations" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* International FPV Arrays Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}>Notable International FPV Arrays with Local Application</h2>
          <p className="overview-intro" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem'}}>
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
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/f/notable-international-fpv-arrays-with-local-application" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Environmental & Permitting Section */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}>Environmental, Recreational and Permitting Factors</h2>
          <p className="overview-intro" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem'}}>
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
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/f/environmental-recreational-and-permitting-factors" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}>Introduction to Floating Solar</h2>
          <p className="overview-intro" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem'}}>
            Floating photovoltaic technology offers a comprehensive solution to the interconnected challenges of water scarcity and renewable energy generation in the American Southwest.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚨</div>
              <h3>Crisis Context</h3>
              <p>The Colorado River is facing historic water shortages due to ongoing drought, chronic overuse, and climate pressures requiring urgent action.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔧</div>
              <h3>Non-Disruptive Solution</h3>
              <p>FPV systems mitigate evaporative losses while generating clean electricity without requiring changes to consumer behavior or major infrastructure.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌐</div>
              <h3>Diverse Applications</h3>
              <p>FPV arrays work on municipal reservoirs, irrigation ponds, hydroelectric basins, wastewater treatment facilities, and aquaculture operations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏜️</div>
              <h3>Regional Suitability</h3>
              <p>Utah, Arizona, and New Mexico are ideal for FPV with abundant solar resources, chronic drought, numerous reservoirs, and Colorado River Basin integration.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔋</div>
              <h3>Multi-Purpose Potential</h3>
              <p>FPV can be paired with aquaponics, hydroelectric, natural gas, and battery storage to stabilize variable electricity production.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Comprehensive Evaluation Framework</h3>
              <p>Site selection considers snow load, generation potential, water conservation, recreational use, permitting, grid proximity, and economic feasibility.</p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/f/introduction" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      {articles.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>Articles & Insights</h2>
            <ul style={{listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0', textAlign: 'left'}}>
              {articles.map((article, index) => (
                <li key={index} style={{marginBottom: '1rem'}}>
                  <Link href={`/${article.slug}`} style={{fontSize: '1.25rem', textDecoration: 'none', color: 'var(--primary)'}}>
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Partnership Section - Placeholder */}
      <section className="section section-dark">
        <div className="container">
          <h2>Partner With Us</h2>
          <p className="overview-intro">
            Content coming soon. This section will outline partnership opportunities and benefits.
          </p>
          <Link href="/contact" className="btn btn-secondary" style={{marginTop: '2rem'}}>Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}

