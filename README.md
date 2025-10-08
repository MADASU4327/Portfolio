# Sai Sandeep Madasu - Portfolio Website

A modern, interactive portfolio website built with Next.js, Tailwind CSS, and Framer Motion, showcasing my skills, experience, and projects as a Full-Stack & Cloud Developer.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and glass-morphism effects
- **Interactive Animations**: Smooth transitions and animations powered by Framer Motion
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Comprehensive meta tags and Open Graph support
- **Contact Form**: Integrated contact form with EmailJS support
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📋 Sections

1. **Hero Section**: Animated introduction with typing effect
2. **About**: Personal information and background
3. **Skills**: Interactive tabs showcasing technical expertise
4. **Experience**: Timeline of professional experience
5. **Projects**: Gallery of featured projects with detailed views
6. **Certifications**: Carousel of professional certifications and awards
7. **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/               # Static assets
└── ...config files
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. Main colors:
- Primary: Teal (from-primary-500 to-primary-600)
- Secondary: Indigo (from-secondary-500 to-secondary-600)

### Fonts
- **Headings**: Poppins
- **Body**: Inter

### Content
Update personal information in the respective component files:
- Contact details in `Contact.tsx`
- Experience in `Experience.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your EmailJS configuration to the contact form
4. Update the EmailJS integration in `Contact.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📱 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sai Sandeep Madasu**
- Email: madasusaisandeep66@gmail.com
- LinkedIn: [madasu-sai-sandeep-4359671bb](https://linkedin.com/in/madasu-sai-sandeep-4359671bb)
- Phone: +1 765-271-9979

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons
- Vercel for seamless deployment

---

Built with ❤️ by Sai Sandeep Madasu
