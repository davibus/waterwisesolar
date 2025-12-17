import { getPageBySlug, getAllPages } from '@/lib/data';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        slug: string[];
    };
}

// Generate static params for all known pages to enable static export or faster builds
export async function generateStaticParams() {
    const pages = getAllPages();
    return pages.map((page) => {
        // metadata.url -> slug array
        // remove domain
        let url = page.metadata.url;
        let relativeUrl = url.replace('https://waterwisesolar.com', '').replace('http://waterwisesolar.com', '');
        if (relativeUrl.startsWith('/')) relativeUrl = relativeUrl.substring(1);
        if (relativeUrl === '') return { slug: [] };

        return {
            slug: relativeUrl.split('/'),
        };
    });
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const page = getPageBySlug(slug);

    if (!page) {
        notFound();
    }

    return (
        <div>
            <section style={{ padding: '3rem 0', background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0f172a' }}>{page.metadata.title}</h1>
                    {page.metadata.description && (
                        <p style={{ maxWidth: '700px', fontSize: '1.1rem', color: '#64748b' }}>
                            {page.metadata.description}
                        </p>
                    )}
                </div>
            </section>

            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
                    <article className="article-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <ReactMarkdown>{page.markdown}</ReactMarkdown>
                    </article>
                </div>
            </div>
        </div>
    );
}

