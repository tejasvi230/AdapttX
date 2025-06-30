# AdaptX

AdaptX is an accessible web platform designed to make the web easier to use for everyone, including individuals with dyslexia, color blindness, autism, ADHD, and other disabilities. The platform provides innovative features and resources to help developers create more accessible digital experiences.

## Features

- **Accessibility Feature Pages:** Dedicated pages for Dyslexia, Color Blindness, Autism, and ADHD, each with tailored information and styles.
- **Modern, Responsive Design:** Clean, user-friendly interface with responsive layouts.
- **Component-based Structure:** Includes a React component for future extensibility.
- **Custom Styles:** Organized CSS for each feature and page.
- **Feedback Section:** Placeholder for user feedback and testimonials.
- **Navigation & Footer:** Consistent navigation and footer across all pages.

## Project Structure

```
adaptx/
  components/         # React components (e.g., DyslexiaFeature.jsx)
  scripts/            # JavaScript files for interactivity
  styles/             # CSS files for each page and feature
    features/         # Feature-specific CSS
  pages/              # HTML pages for the site
    features/         # Feature-specific HTML pages
  assets/             # (Empty, for images or other assets)
  homepage/           # (Empty, reserved for homepage assets)
  about us/           # (Empty, reserved for about page assets)
  contactpage/        # (Empty, reserved for contact page assets)
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- (Optional) [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) if you want to use or extend the React components.

### Running the Project

1. **Static HTML/CSS Version:**

   - Open `pages/home.html` in your browser to view the homepage.
   - Navigate to other pages via the navigation bar.

2. **React Component (Optional):**
   - The `components/DyslexiaFeature.jsx` is a React component. To use it:
     - Create a React app (e.g., with `npx create-react-app my-app`).
     - Copy the component into your React app's `src/components` directory.
     - Import and use `<DyslexiaFeature />` as needed.

### File Overview

- **HTML Pages:** Located in `pages/` (e.g., `home.html`, `about.html`, `features.html`, etc.)
- **Feature Pages:** In `pages/features/` (e.g., `dyslexia-feature.html`, `autism-feature.html`, etc.)
- **CSS Files:** In `styles/` and `styles/features/` for page and feature-specific styles.
- **JavaScript:** `scripts/featurepage.js` is included in `featurepage.html` for interactivity.
- **React Component:** `components/DyslexiaFeature.jsx` for future React integration.

## Customization

- Add images or other assets to the `assets/` directory and reference them in your HTML/CSS.
- Extend feature pages or add new accessibility features by duplicating and modifying existing files.
- Update styles in the corresponding CSS files.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, email: support@company.com
