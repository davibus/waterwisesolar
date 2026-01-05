"use client";

import Link from 'next/link';
import Image from 'next/image';
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
      <div style={{ height: '75px', backgroundColor: '#8d954e' }}></div>

      {/* Introduction Section */}
      <section className="section section-warm water-energy-nexus-section" style={{
        backgroundImage: 'url(/images/AdobeStock_1615928997_Preview.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
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
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '2100px', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <div style={{ width: '100%', margin: '0', textAlign: 'left' }}>
            <h2 className="water-energy-title" style={{ color: 'white', textAlign: 'left', fontSize: 'clamp(2.5rem, 9.1vw, 7.15rem)' }}>The Water-Energy Nexus</h2>
            <p className="overview-intro water-energy-text" style={{ color: 'white', textAlign: 'left', fontSize: 'clamp(1.125rem, 3.9vw, 2.28rem)', maxWidth: 'none', margin: '0 0 1.5rem 0' }}>
              The Colorado River, a vital water source for the American West, is in crisis. Ongoing drought, chronic overuse, and climate pressures have triggered historic water shortages, prompting mandatory cutbacks and urgent calls to rebalance the region's water withdrawals with its dwindling supply.
            </p>
            <p className="overview-intro water-energy-text" style={{ color: 'white', textAlign: 'left', fontSize: 'clamp(1.125rem, 3.9vw, 2.28rem)', maxWidth: 'none', margin: '0' }}>
              Floating solar photovoltaic (FPV) systems have been in wide use at large scale in Southeast Asia as a way to double use scarce land. Water Wise SS offers a complementary solution that mitigates evaporative losses from reservoirs while generating clean electricity—without requiring major changes to consumer behavior or infrastructure expansion. Utah, Arizona, New Mexico and Southern California with their abundant solar resources, increasing energy demand, constant drought conditions, reliance on the Colorado River and numerous man-made reservoirs, are ideal locations for deployment of this technology.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '75px', backgroundColor: '#8d954e' }}></div>

      {/* Introduction Section */}
      <section className="section section-dark section-with-background-image intro-floating-section">
        <Image
          src="/images/introduction-to-floating-solar.jpeg"
          alt="Floating solar panels installed on water reservoir demonstrating sustainable energy generation"
          fill
          priority
          className="section-background-image"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="section-overlay intro-overlay"></div>
        <div className="container section-content-overlay" style={{ maxWidth: '100%', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="intro-floating-layout">
            <div className="intro-floating-content">
              <h2 className="intro-floating-title" style={{ whiteSpace: 'nowrap' }}>Introduction to Floating Solar</h2>

              <div className="intro-floating-cards">
                <div className="intro-card intro-card-1">
                  <div className="intro-card-icon">💧</div>
                  <h3 className="intro-card-title">Save Water</h3>
                </div>

                <div className="intro-card intro-card-2">
                  <div className="intro-card-icon">🏞️</div>
                  <h3 className="intro-card-title">Conserve Land</h3>
                </div>

                <div className="intro-card intro-card-3">
                  <div className="intro-card-icon">⚡</div>
                  <h3 className="intro-card-title">Create Energy</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '75px', backgroundColor: '#8d954e' }}></div>

      {/* Solar: Land vs. Water Section */}
      <section className="section section-light section-with-background-image solar-land-water-section">
        <Image
          src="/images/solar-land-vs-water.jpeg"
          alt="Comparison of solar panel installations on land versus water showing environmental benefits"
          fill
          className="section-background-image"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="section-overlay solar-land-overlay"></div>
        <div className="container section-content-overlay" style={{ maxWidth: '100%', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="solar-land-layout">
            <div className="solar-land-content">
              <h2 className="solar-land-title">Solar: Land vs. Water</h2>
              <p className="solar-land-description">
                Floating solar systems (FPV) offer several advantages over traditional ground-mounted photovoltaic (PV) installations, particularly in arid regions where land is scarce and water evaporation rates are high.
              </p>

              <div className="solar-land-cards">
                <div className="solar-land-card solar-land-card-1">
                  <div className="solar-land-icon">🏞️</div>
                  <h3 className="solar-land-card-title">Efficient Land Use & Infrastructure</h3>
                  <p className="solar-land-card-text">Dual-use of existing water bodies without consuming agricultural land or natural habitats. Existing infrastructure and access significantly reduce development costs.</p>
                </div>

                <div className="solar-land-card solar-land-card-2">
                  <div className="solar-land-icon">⚡</div>
                  <h3 className="solar-land-card-title">Improved Performance & Optimized Yield</h3>
                  <p className="solar-land-card-text">Water cooling enhances panel efficiency by 6-12% over land-based systems. Uniform exposure with minimal obstructions optimizes energy yield.</p>
                </div>

                <div className="solar-land-card solar-land-card-3">
                  <div className="solar-land-icon">💧</div>
                  <h3 className="solar-land-card-title">Water Conservation & Environmental Protection</h3>
                  <p className="solar-land-card-text">Saves approximately 4.6 acre-feet of water annually per acre through evaporation reduction. No land clearing, grading, or soil compaction required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: '75px', backgroundColor: '#8d954e' }}></div>

      {/* FPV & Water Conservation Section */}
      <section className="section section-light section-with-video fpv-conservation-section">
        <SectionVideo />
        <div className="container section-content-overlay" style={{ maxWidth: '100%', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="fpv-conservation-centered-layout">
            <div className="fpv-conservation-header" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '2rem',
              borderRadius: '8px'
            }}>
              <h2 className="fpv-conservation-title-centered">FPV & Water Conservation</h2>
              <p className="fpv-conservation-description-centered">
                Floating solar arrays provide a scientifically-validated approach to reducing evaporative water loss from reservoirs while generating clean electricity.
              </p>
            </div>

            <div className="fpv-conservation-cards-grid">
              <div className="fpv-conservation-card fpv-conservation-card-1">
                <div className="fpv-conservation-icon">💧</div>
                <h3 className="fpv-conservation-card-title">Basin-Wide Evaporation Crisis</h3>
                <p className="fpv-conservation-card-text">Evaporation is 30% of total Colorado River Basin water use.</p>
              </div>

              <div className="fpv-conservation-card fpv-conservation-card-2">
                <div className="fpv-conservation-icon">📈</div>
                <h3 className="fpv-conservation-card-title">Quantified Multi-Benefit Protection</h3>
                <p className="fpv-conservation-card-text">FPV improves water quality, reduces temperature, wind/erosion and preserves the health of the reservoir.</p>
              </div>

              <div className="fpv-conservation-card fpv-conservation-card-3">
                <div className="fpv-conservation-icon">🔬</div>
                <h3 className="fpv-conservation-card-title">Scientific & Complementary Strategy</h3>
                <p className="fpv-conservation-card-text">FPV offers a cost-effective, long term compliment to water buyback programs ($360/acre-ft annually) or other, more expensive alternatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

