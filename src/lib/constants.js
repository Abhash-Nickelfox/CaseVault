export const SITE = {
  name: 'CaseVault',
  tagline: 'Turn fragmented investigations into connected intelligence.',
  description:
    "CaseVault is an enterprise-grade, AI-powered desktop investigation platform designed to eliminate data silos. By unifying unstructured evidence, automatically extracting critical entities, and visualizing hidden relationships, it transforms fragmented investigations into connected intelligence while maintaining an uncompromising chain of custody for modern law enforcement and legal teams.",
  url: 'https://casevault.example.com',
  email: 'hello@casevault.example.com',
  social: {
    twitter: 'https://twitter.com/casevault',
    linkedin: 'https://linkedin.com/company/casevault',
    github: 'https://github.com/casevault',
  },
  // In-page anchors for the one-page case study layout (see Home.jsx sections).
  // `id` matches the target section's DOM id (used for Navbar scrollspy);
  // `label` is the display text, which can differ (Problem section is
  // labeled "Challenge" in nav, matching the reference design).
  nav: [
    { id: 'overview', label: 'Overview', href: '#overview' },
    { id: 'problem', label: 'Challenge', href: '#problem' },
    { id: 'solution', label: 'Solution', href: '#solution' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'impact', label: 'Impact', href: '#impact' },
  ],
}
