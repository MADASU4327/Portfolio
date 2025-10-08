# Deployment Guide

## 🚀 Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open in Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup (Optional)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Get your Service ID, Template ID, and Public Key
4. Update the contact form in `components/Contact.tsx`:

```typescript
// Replace the simulation with actual EmailJS call
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
  } catch (error) {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}
```

## 🌐 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Deploy with default settings

### Method 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts

## 🔧 Environment Variables

If using EmailJS, add these to your Vercel environment variables:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📱 Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 🎯 Performance Optimization

The portfolio is already optimized with:
- ✅ Next.js automatic code splitting
- ✅ Image optimization
- ✅ CSS optimization
- ✅ SEO meta tags
- ✅ Sitemap generation

## 🔍 SEO Configuration

Update these in `app/layout.tsx`:
- Site title and description
- Open Graph images
- Twitter card settings
- Canonical URLs

## 📊 Analytics (Optional)

Add Google Analytics:

1. Get your GA4 Measurement ID
2. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

// Add in the <head> section
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🛠️ Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run build`
- Verify all imports are correct

### Deployment Issues
- Check Vercel build logs
- Ensure all environment variables are set
- Verify Node.js version compatibility (18+)

### Performance Issues
- Use Next.js Image component for images
- Minimize bundle size with dynamic imports
- Enable compression in production

## 📞 Support

If you encounter any issues:
1. Check the console for errors
2. Review the build logs
3. Ensure all dependencies are up to date
4. Contact: madasusaisandeep66@gmail.com

---

🎉 **Congratulations!** Your portfolio is now ready for deployment!
