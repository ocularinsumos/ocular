# SEO & JSON-LD Quick Reference Guide

## 🎯 What Was Improved

### 1. **Dynamic Metadata (All Pages)**
- Unique titles and descriptions per page
- Multi-language support (ES/EN)
- Open Graph tags for social media
- Twitter Cards
- Canonical URLs with language alternates
- Proper robots directives

### 2. **Enhanced JSON-LD Schemas**

#### Organization Schema (Every Page)
```javascript
// Located in: src/components/Seo/JsonLdDefault.tsx
- MedicalBusiness + LocalBusiness + MedicalSupplyStore
- Complete contact information
- Opening hours
- Geo-coordinates
- Social media profiles
- Aggregate ratings
```

#### Homepage
```javascript
- Organization schema
- Website schema with SearchAction
- Breadcrumb schema
```

#### Product Pages (`/[productos]/`)
```javascript
- MedicalProcedure schema
- ItemList for product offerings
- Breadcrumb navigation
```

#### Category Pages (`/categorias/[categorias]/`)
```javascript
- CollectionPage schema
- Product ItemList
- Breadcrumb navigation
```

### 3. **Sitemap Improvements**
- **Location**: `src/app/sitemap.ts`
- Dynamic generation from products & categories
- Multi-language support with hreflang alternates
- Proper priorities and change frequencies
- Automatic lastModified dates

### 4. **Robots.txt Enhancement**
- **Location**: `src/app/robots.ts`
- Multiple user-agent rules
- Proper disallow patterns
- Single sitemap reference
- Host specification

### 5. **SEO Utilities**
- **Location**: `src/Utils/metadata.js`
- Reusable functions for metadata generation
- Schema generators for products, breadcrumbs, FAQs

## 📋 How to Use

### Adding Metadata to New Pages

```javascript
// In your page component
export async function generateMetadata({ params: { locale } }) {
  return {
    title: 'Your Page Title | Ocular',
    description: 'Your page description',
    keywords: 'keyword1, keyword2',
    alternates: {
      canonical: `https://ocularinsumosquirurgicos.com/${locale}/your-path`,
      languages: {
        'es': `https://ocularinsumosquirurgicos.com/es/your-path`,
        'en': `https://ocularinsumosquirurgicos.com/en/your-path`,
      },
    },
    // ... more metadata
  };
}
```

### Adding JSON-LD Schema

```javascript
import JsonLd from '@/components/Seo/JsonLd';

// In your component
const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  // ... more schema properties
};

return (
  <>
    <YourContent />
    <JsonLd data={schema} />
  </>
);
```

### Using SEO Utilities

```javascript
import { generateMetadata, generateBreadcrumbSchema } from '@/Utils/metadata';

// Generate metadata
const metadata = generateMetadata({
  title: 'Page Title',
  description: 'Page description',
  path: '/your-path',
  locale: 'es',
  keywords: 'keyword1, keyword2',
});

// Generate breadcrumb schema
const breadcrumbs = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/es' },
    { name: 'Products', url: '/es/productos' },
    { name: 'Current Page' },
  ],
  locale: 'es',
});
```

## 🔍 Testing Your SEO

### Before Deploying
1. **Rich Results Test**: https://search.google.com/test/rich-results
2. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
3. **PageSpeed Insights**: https://pagespeed.web.dev/

### After Deploying
1. **Submit sitemap** to Google Search Console
2. **Verify hreflang** tags are working
3. **Check indexing** status
4. **Monitor** Core Web Vitals

## 📊 Key SEO Elements by Page

### Homepage (`/[locale]/`)
- ✅ Organization schema
- ✅ Website schema
- ✅ Breadcrumbs
- ✅ Meta tags
- ✅ Open Graph
- ✅ Hreflang

### Product Pages (`/[locale]/[productos]/`)
- ✅ MedicalProcedure schema
- ✅ ItemList schema
- ✅ Breadcrumbs
- ✅ Dynamic metadata
- ✅ Product images

### Category Pages (`/[locale]/categorias/[categorias]/`)
- ✅ CollectionPage schema
- ✅ ItemList schema
- ✅ Breadcrumbs
- ✅ Dynamic metadata

### 404 Page
- ✅ Noindex directive
- ✅ User-friendly message
- ✅ Navigation options

## 🚀 Performance Tips

### Images
- Always use WebP format
- Include width and height attributes
- Use lazy loading
- Provide descriptive alt text

### Loading Speed
- Minimize JavaScript bundles
- Use Next.js Image component
- Enable compression
- Leverage browser caching

### Mobile Optimization
- Responsive design
- Touch-friendly buttons (min 44x44px)
- Fast loading on 3G
- Avoid horizontal scrolling

## 🎓 SEO Best Practices Implemented

1. **Unique Titles**: Each page has a unique, descriptive title
2. **Meta Descriptions**: Compelling descriptions under 160 characters
3. **Heading Hierarchy**: Proper H1, H2, H3 structure
4. **Internal Linking**: Clear navigation structure
5. **URL Structure**: Clean, descriptive URLs
6. **Mobile-First**: Responsive design
7. **Page Speed**: Optimized loading times
8. **Structured Data**: Comprehensive JSON-LD schemas
9. **Multilingual**: Proper hreflang implementation
10. **Local SEO**: Address, phone, hours in schema

## 📱 Social Media Optimization

### Open Graph Tags (Facebook, LinkedIn)
- Title, description, image
- URL, site name, locale
- Type (website/article)

### Twitter Cards
- Summary large image
- Title, description, image

### WhatsApp
- Open Graph tags are used
- Preview shows title, description, image

## 🔧 Maintenance Checklist

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Monitor organic traffic

### Monthly
- [ ] Update product information
- [ ] Add new content/blog posts
- [ ] Check for broken links
- [ ] Review keyword rankings

### Quarterly
- [ ] Full SEO audit
- [ ] Update schemas if needed
- [ ] Refresh outdated content
- [ ] Analyze competitor strategies

## 📞 Support Contacts

### For SEO Questions
- Developer: Gonzalo Torres Grau
- Email: Contact through company email

### For Content Updates
- Update JSON files in `public/messages/`
- Update products in `src/components/Constantes/productos.json`

## 🔗 Useful Links

- [Google Search Console](https://search.google.com/search-console)
- [Schema.org Documentation](https://schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Web.dev SEO Guide](https://web.dev/lighthouse-seo/)

## ⚡ Quick Wins

1. **Add more content** to product pages (increases time on page)
2. **Get reviews** (shows in rich snippets)
3. **Create blog** content (increases organic traffic)
4. **Optimize images** (improves page speed)
5. **Build backlinks** from medical directories
6. **Update GMB listing** (improves local SEO)
7. **Add FAQ sections** (ranks for more keywords)
8. **Create videos** (ranks in video search)

## 🎯 Priority Actions

### High Priority
1. Submit sitemap to Google Search Console
2. Verify all schemas with Rich Results Test
3. Set up Google Analytics goals
4. Create Google My Business listing (if not exists)

### Medium Priority
1. Add customer reviews/testimonials
2. Create blog section
3. Add more detailed product descriptions
4. Implement FAQ schema on relevant pages

### Low Priority
1. Add video content
2. Create downloadable resources
3. Implement AMP (if needed)
4. Add live chat for better engagement

---

**Last Updated**: December 2025
**Version**: 1.0
