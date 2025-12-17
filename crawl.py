from firecrawl import Firecrawl
import json

firecrawl = Firecrawl(api_key="fc-41d9db8fd6f44caa9b62f44128418d45")

result = firecrawl.crawl(
    'https://www.waterwisesolar.com',
    limit=50,
    scrape_options={'formats': ['markdown', 'html']}
)

# Convert the result to a serializable format
data = {
    'status': result.status,
    'total': result.total,
    'data': [dict(page) for page in result.data] if result.data else []
}


def json_serial(obj):
    """JSON serializer for objects not serializable by default json code"""
    if hasattr(obj, 'model_dump'):
        return obj.model_dump()
    if hasattr(obj, 'dict'):
        return obj.dict()
    if hasattr(obj, '__dict__'):
        return obj.__dict__
    return str(obj)

with open('waterwisesolar_crawl.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False, default=json_serial)

print(f"Crawled {len(data['data'])} pages")