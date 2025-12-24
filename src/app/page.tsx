import Link from 'next/link';
import Image from 'next/image';
import { getHomePage, getAllPages, PageData } from '@/lib/data';

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
        <div className="hero-content-overlay">
          <h1>Innovating in the Intermountain West and Southwest to save water, save land, and accelerate peak matching energy generation</h1>
          <Link href="/technology" className="btn btn-primary">Learn About Floating Solar</Link>
        </div>
        <div className="hero-image-caption">
          Mountain Regional Water Treatment plant, Summit County, UT 2024
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
              <Image
                src="/images/introduction-picture.jpg"
                alt="Floating solar panels on reservoir - innovative water-wise renewable energy technology"
                width={1200}
                height={800}
                quality={85}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Articles Section */}
      {articles.length > 0 && (
        <>
          <div className="container" style={{textAlign: 'center', padding: 'clamp(4rem, 10vw, 8rem) 1.5rem 0'}}>
            <h2 style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 0}}>Articles & Insights</h2>
          </div>
          {articles.map((article, index) => {
            const isEven = index % 2 === 0;
            const bgClass = isEven ? 'section-warm' : 'section-light';

            return (
              <section key={index} className={`blog-preview-section ${bgClass}`}>
                <div className="container">
                  <div className="two-column-layout">
                    {isEven ? (
                      <>
                        <div className="column-text">
                          <h3>{article.title}</h3>
                          {article.date && <span className="blog-date">{article.date}</span>}
                          {article.excerpt && <p className="overview-intro">{article.excerpt}</p>}
                          <Link href={`/${article.slug}`} className="btn btn-secondary">Read More</Link>
                        </div>
                        <div className="column-image">
                          <Image
                            src={article.image || '/images/introduction-picture.jpg'}
                            alt={generateAltText(article.title)}
                            width={1200}
                            height={800}
                            quality={85}
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="column-image">
                          <Image
                            src={article.image || '/images/introduction-picture.jpg'}
                            alt={generateAltText(article.title)}
                            width={1200}
                            height={800}
                            quality={85}
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="column-text">
                          <h3>{article.title}</h3>
                          {article.date && <span className="blog-date">{article.date}</span>}
                          {article.excerpt && <p className="overview-intro">{article.excerpt}</p>}
                          <Link href={`/${article.slug}`} className="btn btn-secondary">Read More</Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </>
      )}
    </div>
  );
}

