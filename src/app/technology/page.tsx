"use client";

import Link from 'next/link';
import { getAllPages } from '@/lib/data';

function extractDate(markdown: string): string | null {
  const match = markdown.match(/([A-Z][a-z]+ \d{1,2}, \d{4})/);
  return match ? match[1] : null;
}

export default function LearnMore() {
  const allPages = getAllPages();

  // Filter for article pages (exclude home, xml, and specific articles)
  const articles = allPages.filter(p => {
    const url = p.metadata.url;
    const title = p.metadata.title || '';
    return url &&
      !url.endsWith('/') &&
      !url.endsWith('waterwisesolar.com') &&
      !url.endsWith('.xml') &&
      !title.includes('FPV Size and Business Case') &&
      !title.includes('Electricity Pricing, PPA') &&
      title !== 'Water Wise Solar' &&
      !title.includes('FPV & Water Conservation');
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
