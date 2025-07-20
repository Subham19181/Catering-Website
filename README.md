# New Subham Caterer Website

A fully responsive catering business website built with Next.js 15, Tailwind CSS, and Supabase.

## Features

- **Modern Design**: Clean, professional design similar to Babul Caterer
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth animations and hover effects using Framer Motion
- **Contact Form**: Integrated with Supabase for storing form submissions
- **Admin Dashboard**: View and manage contact form submissions
- **SEO Optimized**: Proper metadata and Next.js optimizations
- **Performance**: Optimized images and fast loading times

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (Database & API)
- **Deployment**: Vercel (recommended)

## Pages

- **Home**: Hero section, about, services, testimonials, CTA
- **About**: Company story, values, team
- **Services**: Detailed service offerings with pricing
- **Gallery**: Filterable image gallery of events
- **Contact**: Contact form with Google Maps integration
- **Admin**: Dashboard for viewing contact submissions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd new-subham-caterer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Create a `contacts` table with the following columns:
     ```sql
     id: uuid (primary key)
     name: text (not null)
     email: text (not null)
     phone: text
     message: text (not null)
     created_at: timestamp with time zone (default: now())
     ```

4. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
new-subham-caterer/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   ├── admin/             # Admin dashboard
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility libraries
│   └── supabase.ts        # Supabase client
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Customization

### Colors
The primary color scheme can be modified in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#fef7f0',
    100: '#fdecd8',
    // ... other shades
    500: '#f27524', // Main brand color
  }
}
```

### Content
- Update text content in each page component
- Replace placeholder images with your own
- Modify contact information in Footer and Contact components

### Supabase Setup
1. Go to your Supabase dashboard
2. Create a new table called `contacts`
3. Add the required columns as specified above
4. Set up Row Level Security (RLS) policies if needed

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## API Routes

- `POST /api/contact` - Submit contact form
- `GET /api/admin/submissions` - Fetch contact submissions (admin)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.

---

**Note**: This is a template website. Replace all placeholder content, images, and contact information with your actual business details before going live. 