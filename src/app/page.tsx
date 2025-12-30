"use client";

import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import SectionVideo from '@/components/SectionVideo';

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full Viewport */}
      <section className="hero-main">
        <HeroVideo />
        <div className="hero-content-overlay">
          <h1>Innovating in the Colorado River Basin to save water, land, and accelerate clean, peak matching, energy generation.</h1>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>

      {/* Introduction Section */}
      <section className="section section-warm" style={{
        backgroundImage: 'url(/images/AdobeStock_1615928997_Preview.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}>
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
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: 'white' }}>The Water-Energy Nexus</h2>
            <p className="overview-intro" style={{ color: 'white' }}>
              The Colorado River, a vital water source for the American West, is in crisis. Ongoing drought, chronic overuse, and climate pressures have triggered historic water shortages, prompting mandatory cutbacks and urgent calls to rebalance the region's water withdrawals with its dwindling supply.
            </p>
            <p className="overview-intro" style={{ color: 'white' }}>
              Floating solar photovoltaic (FPV) systems have been in wide use at large scale in Southeast Asia as a way to double use scarce land. Water Wise SS offers a complementary solution that mitigates evaporative losses from reservoirs while generating clean electricity—without requiring major changes to consumer behavior or infrastructure expansion. Utah, Arizona, New Mexico and Southern California with their abundant solar resources, increasing energy demand, constant drought conditions, reliance on the Colorado River and numerous man-made reservoirs, are ideal locations for deployment of this technology.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>

      {/* Introduction Section */}
      <section className="section section-dark section-with-video">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>Introduction to Floating Solar</h2>
          <p className="overview-intro" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem' }}>
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
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/f/introduction" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>

      {/* Solar: Land vs. Water Section */}
      <section className="section section-light section-with-video">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>Solar: Land vs. Water</h2>
          <p className="overview-intro" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem' }}>
            Floating solar systems (FPV) offer several advantages over traditional ground-mounted photovoltaic (PV) installations, particularly in arid regions where land is scarce and water evaporation rates are high.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏞️</div>
              <h3>Efficient Land Use</h3>
              <p>FPV enables dual-use of existing water bodies—such as reservoirs, irrigation ponds, and municipal wastewater or water treatment storage ponds—without consuming valuable agricultural land, habitat corridors, or urban development zones.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Improved Performance</h3>
              <p>PV panels deployed over water operate at lower ambient temperatures due to thermal buffering. This cooling effect can enhance panel efficiency by 6%-12% relative to land-based systems.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💧</div>
              <h3>Water Conservation</h3>
              <p>Every acre of FPV coverage in Utah can save approximately 4.6 acre-feet of water annually, per acre covered by reducing direct surface evaporation through shading and reduced air flow exposure.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔌</div>
              <h3>Infrastructure Synergies</h3>
              <p>Reservoirs often are close to existing infrastructure—have existing access roads, water management personnel, and are already disturbed land—significantly reducing development and interconnection costs.</p>
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
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>

      {/* FPV & Water Conservation Section */}
      <section className="section section-light section-with-video">
        <SectionVideo />
        <div className="container section-content-overlay">
          <h2 style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}>FPV & Water Conservation</h2>
          <p className="overview-intro" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem', color: 'white' }}>
            Floating solar arrays provide a scientifically-validated approach to reducing evaporative water loss from reservoirs while generating clean electricity.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💧</div>
              <h3>Massive Evaporation Problem</h3>
              <p>Lake Mead loses 800,000 acre-feet annually (~6% of Colorado River flow) and Lake Powell loses nearly 860,000 acre-feet from evaporation and seepage. Evaporation is 30% of the total use of Colorado River Basin water.</p>
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
              <p>FPV doesn't require difficult behavior changes in agriculture or cities, offering an alternative to expensive water buyback programs ($360 per acre ft in Utah, PER YEAR).</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Multi-Benefit Protection</h3>
              <p>FPV improves water quality, reduces water temperature, reduces water movement erosion, minimizes dust accumulation, and preserves water quantity simultaneously.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌊</div>
              <h3>Basin-Wide Advantage</h3>
              <p>Water conservation from FPV benefits all Colorado River states through shared resource protection without requiring cross-border policy coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '50px', backgroundColor: 'white' }}></div>

      {/* Partnership Section - Placeholder */}
      <section className="section section-dark">
        <div className="container">
          <h2>Partner With Us</h2>
          <p className="overview-intro">
            Content coming soon. This section will outline partnership opportunities and benefits.
          </p>
          <Link href="/contact" className="btn btn-secondary" style={{ marginTop: '2rem' }}>Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}

