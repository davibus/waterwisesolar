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
          <h2 className="hero-title">Floating Solar in the West</h2>
          <h1>Conserve Water, Conserve Land, Generate Clean Energy</h1>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Introduction Section */}
      <section className="section section-warm water-energy-nexus-section">
        <div className="section-overlay"></div>
        <div className="container section-content-overlay water-energy-container">
          <div className="water-energy-box">
            <h2 className="water-energy-title">The Water-Energy Challenge in the American West</h2>
            <p className="overview-intro water-energy-text">
              The Colorado River, a vital water source for the American West, is in crisis. Ongoing drought, chronic overuse, and climate pressures have triggered historic water shortages, prompting mandatory cutbacks and urgent calls to rebalance the region's water withdrawals with its dwindling supply.
            </p>
            <p className="overview-intro water-energy-text">
              Floating solar photovoltaic (FPV) systems have been in wide use at large scale in Southeast Asia as a way to double use scarce land. Water Wise SS offers a complementary solution that mitigates evaporative losses from reservoirs while generating clean electricity—without requiring major changes to consumer behavior or infrastructure expansion. Utah, Arizona, New Mexico and Southern California with their abundant solar resources, increasing energy demand, constant drought conditions, reliance on the Colorado River and numerous man-made reservoirs, are ideal locations for deployment of this technology.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Advantages of Floating Solar Section */}
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
        <div className="container section-content-overlay">
          <div className="solar-land-layout">
            <div className="solar-land-content">
              <h2 className="solar-land-title">Advantages of Floating Solar</h2>
              <p className="solar-land-description">
                Floating solar systems (FPV) offer several advantages over traditional ground-mounted photovoltaic (PV) installations, particularly in arid regions where land is scarce and water evaporation rates are high.
              </p>
            </div>

            <div className="solar-land-cards">
              <Link href="/f/solar-land-vs-water" className="solar-land-card solar-land-card-1">
                <h3 className="solar-land-card-title">Efficient Land Use & Infrastructure</h3>
                <p className="solar-land-card-text">Dual-use of existing water bodies without consuming agricultural land or natural habitats. Existing infrastructure and access significantly reduce development costs.</p>
              </Link>

              <Link href="/f/fpv-size-and-business-case" className="solar-land-card solar-land-card-2">
                <h3 className="solar-land-card-title">Improved Performance & Optimized Yield</h3>
                <p className="solar-land-card-text">Water cooling enhances panel efficiency by 6-12% over land-based systems. Uniform exposure with minimal obstructions optimizes energy yield.</p>
              </Link>

              <Link href="/f/environmental-recreational-and-permitting-factors" className="solar-land-card solar-land-card-3">
                <h3 className="solar-land-card-title">Water Conservation & Environmental Protection</h3>
                <p className="solar-land-card-text">Saves up to 80% of evaporative losses, while avoiding land clearing / soil compaction associated with land-based solar.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Improving the Water Economy Section */}
      <section className="section section-light section-with-video fpv-conservation-section">
        <SectionVideo />
        <div className="container section-content-overlay">
          <div className="fpv-conservation-centered-layout">
            <div className="fpv-conservation-header">
              <h2 className="fpv-conservation-title-centered">Improving the Water Economy</h2>
              <p className="fpv-conservation-description-centered">
                Floating solar arrays provide a scientifically-validated approach to reducing evaporative water loss from reservoirs while generating clean electricity.
              </p>
            </div>

            <div className="fpv-conservation-cards-grid">
              <Link href="/f/fpv-water-conservation" className="fpv-conservation-card fpv-conservation-card-1">
                <h3 className="fpv-conservation-card-title">Evaporation Reduction</h3>
                <p className="fpv-conservation-card-text">Evaporation is 30% of total Colorado River Basin water use.</p>
              </Link>

              <Link href="/f/environmental-recreational-and-permitting-factors" className="fpv-conservation-card fpv-conservation-card-2">
                <h3 className="fpv-conservation-card-title">Ecological Co-Benefits</h3>
                <p className="fpv-conservation-card-text">FPV improves water quality, reduces temperature, wind/erosion and preserves the health of the reservoir.</p>
              </Link>

              <Link href="/f/electricity-pricing-ppa%E2%80%99s-and-government-programs" className="fpv-conservation-card fpv-conservation-card-3">
                <h3 className="fpv-conservation-card-title">Cost-effective Solutions</h3>
                <p className="fpv-conservation-card-text">FPV offers a cost-effective, long term compliment to water buyback programs ($360/acre-ft annually) or other, more expensive alternatives.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
