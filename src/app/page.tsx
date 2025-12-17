import Link from 'next/link';
import { getHomePage, getAllPages, PageData } from '@/lib/data';

function extractDate(markdown: string): string | null {
  const match = markdown.match(/([A-Z][a-z]+ \d{1,2}, \d{4})/);
  return match ? match[1] : null;
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

    return {
      title: p.metadata.title || 'Untitled Article',
      date: extractDate(p.markdown),
      url: p.metadata.url,
      slug: p.metadata.url.split('/').pop(),
      excerpt: excerpt
    };
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-split">
        <div className="hero-image">
          <img src="/hero-fpv-array.jpg" alt="Floating Solar Array" />
        </div>
        <div className="hero-content-box">
          <h1>Advocating for Floating Solar</h1>
          <p>in the Colorado River Basin<br />and beyond.</p>
          <div className="hero-phone">(801) 647-1007</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-mission">
        <div className="container">
          <h2>Mission</h2>
          <p>
            Water Wise Solar Solutions was formed to study the application of Utility Scale Floating Photovoltaic Solar Arrays as an effective mitigation strategy for evaporative water loss within the Colorado River Basin.
          </p>
        </div>
      </section>

      {/* Charts Section */}
      <section className="section section-charts">
        <div className="container">
          <h2>Colorado River Basin (CRB) Water Supply</h2>
          <div className="charts-grid">
            {/* Placeholders for the charts from the screenshot */}
            <div className="chart-placeholder">
              <div>
                <h3>Reservoir Capacities (MAF)</h3>
                <p style={{ color: '#94a3b8' }}>[Chart Image Placeholder]</p>
              </div>
            </div>
            <div className="chart-placeholder">
              <div>
                <h3 style={{ textAlign: 'left', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  2025 operated at 55% of the pools combined capacity of 54.5 MAF (March 25, 2025).
                </h3>
                <p style={{ color: '#94a3b8' }}>[Graph Image Placeholder]</p>
              </div>
            </div>
          </div>
          <div className="charts-description">
            <h3>Unregulated Inflow to Lake Powell</h3>
            <p>
              Historical annual unregulated inflows to Lake Powell since its filling until the 2021 drought coverage. To meet current natural depletions, 8.23 million acre-feet of water must flow into Lake Powell annually. The chart illustrates why Lake Mead, Powell, the Colorado River Forecast Center for the current water year. If inflows…
            </p>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
              <em>Image and Data are Sourced by Water Data for Texas. See https://www.waterdatafortexas.org/</em>
            </p>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="section section-blog">
        <div className="container">
          <h2>Saving Water with Floating Solar</h2>
          <div className="blog-list">
            {articles.map((article, idx) => (
              <div key={idx} className="blog-item">
                {article.date && <span className="blog-date">{article.date}</span>}
                <h3>{article.title}</h3>
                {article.excerpt && <p className="blog-excerpt">{article.excerpt}</p>}
                <Link href={`/f/${article.slug}`} className="read-more">
                  Continue Reading
                </Link>
                <div style={{ height: '1px', background: '#e2e8f0', marginTop: '1.5rem' }}></div>
              </div>
            ))}

            {articles.length === 0 && (
              <p>No articles found in crawl data.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

