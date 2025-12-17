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
  }).map(p => ({
    title: p.metadata.title || 'Untitled Article',
    date: extractDate(p.markdown),
    url: p.metadata.url,
    slug: p.metadata.url.split('/').pop()
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: `url('/hero-fpv-array.jpg')`
      }}>
        <div className="hero-overlay"></div>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="hero-content">
            <h1>Advocating for Floating Solar</h1>
            <p>In the Colorado River Basin and beyond.</p>
            <div className="hero-phone">(801) 647-1007</div>
          </div>
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
                <h3>Unregulated Inflow to Lake Powell</h3>
                <p style={{ color: '#94a3b8' }}>[Chart Image Placeholder]</p>
              </div>
            </div>
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
                <Link href={`/f/${article.slug}`} className="read-more">
                  <h3>{article.title}</h3>
                </Link>
                {article.date && <span className="blog-date">{article.date}</span>}
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

