# Homestead Aura - Static HTML Website

## Overview
This is the complete static HTML/CSS/JavaScript version of the Homestead Aura premium interior styling website. All React components have been converted to vanilla HTML, CSS, and JavaScript.

## File Structure

```
/public/
├── index.html                 # Home page
├── about.html                 # About Us page
├── services.html              # Services page
├── privacy-policy.html        # Privacy Policy page
├── terms-conditions.html      # Terms & Conditions page
├── cookie-policy.html         # Cookie Policy page
├── disclaimer.html            # Disclaimer page
├── /styles/
│   ├── fonts.css             # Google Fonts imports
│   ├── main.css              # Main stylesheet with global styles
│   ├── about.css             # About page specific styles
│   └── services.css          # Services page specific styles
└── /scripts/
    ├── main.js               # Core JavaScript functionality
    └── services.js           # Services page specific JavaScript
```

## Pages Included

### Main Pages
1. **index.html** - Home page with hero, services overview, testimonials, and contact form
2. **about.html** - About Us page with company story, mission & values, and team profiles
3. **services.html** - Services page with detailed service descriptions and booking form

### Legal Pages
4. **privacy-policy.html** - Privacy Policy with contact information section
5. **terms-conditions.html** - Complete Terms & Conditions with 22 comprehensive sections
6. **cookie-policy.html** - Detailed Cookie Policy with GDPR compliance information
7. **disclaimer.html** - Comprehensive Disclaimer covering all aspects of services

## Features Implemented

### Navigation
- Sticky header with smooth scrolling
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth transitions

### Forms
- Contact form on home page
- Booking form on services page
- Form validation
- Success message display
- Privacy policy and terms acceptance checkboxes

### Cookie Consent
- GDPR-compliant cookie consent banner
- LocalStorage-based preference saving
- Accept/Reject functionality
- Banner disappears after choice

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktop
- Touch-friendly navigation
- Optimized typography scaling

## JavaScript Functionality

### main.js
- Mobile menu toggle
- Sticky header with scroll behavior
- Smooth scrolling for anchor links
- Form submission handling
- Cookie consent management
- Active navigation link highlighting

### services.js
- Booking form specific handling
- Form validation
- Success message display

## CSS Organization

### main.css
- CSS Reset
- Global typography (Cormorant Garamond for headings, Inter for body)
- Layout utilities (containers, grids)
- Component styles (buttons, cards, forms)
- Header and footer styles
- Responsive breakpoints

### Page-Specific CSS
- about.css: Team cards, values grid, feature sections
- services.css: Service detail layouts, booking section

## Typography
- **Headings**: Cormorant Garamond (serif)
- **Body Text**: Inter (sans-serif)
- Fonts loaded via Google Fonts CDN

## Color Palette
- **Primary**: #111827 (Dark Gray)
- **Accent**: #059669 (Green)
- **Background**: #ffffff (White), #f9fafb (Light Gray)
- **Text**: #374151 (Gray), #6b7280 (Medium Gray)

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported due to CSS Grid usage
- Responsive design works on all mobile devices

## Installation & Usage

1. **Local Development**
   - Simply open `index.html` in a web browser
   - Or use a local server: `python -m http.server 8000` (Python 3)
   - Navigate to `http://localhost:8000`

2. **Production Deployment**
   - Upload all files to your web server
   - Ensure folder structure is maintained
   - No build process required

## Customization Guide

### Changing Colors
Edit the color values in `styles/main.css`:
```css
/* Primary colors */
background-color: #111827; /* Dark theme */
color: #059669; /* Green accent */
```

### Adding New Pages
1. Copy the structure from any existing HTML file
2. Update the `<title>` tag
3. Modify the content section
4. Ensure header/footer links are correct

### Modifying Forms
Forms are in:
- `index.html` - Contact form (#contactForm)
- `services.html` - Booking form (#bookingForm)

Form handling is in:
- `scripts/main.js` - Contact form
- `scripts/services.js` - Booking form

## Notes

### Images
- All images use Unsplash URLs
- For production, download and host images locally
- Update image paths in HTML files

### Forms
- Forms currently use JavaScript preventDefault (no backend)
- For production, connect to a backend API or form service
- Update form action and method attributes as needed

### SEO
- Add meta descriptions to each page
- Include Open Graph tags for social sharing
- Create sitemap.xml
- Add robots.txt

### Performance
- Consider minifying CSS and JavaScript for production
- Optimize images (compress and convert to WebP)
- Add lazy loading for images below the fold
- Implement caching headers on server

## Future Enhancements

1. **Backend Integration**
   - Connect forms to email service or CRM
   - Add database for storing inquiries

2. **Analytics**
   - Add Google Analytics or similar
   - Track form submissions and conversions

3. **Additional Features**
   - Image gallery/portfolio section
   - Blog section for design tips
   - Live chat integration
   - Online scheduling system

## Support

For questions or issues:
- Email: decor@homesteadaura.site
- Phone: +1-832-392-3822

## License

Copyright © 2026 Homestead Aura. All rights reserved.