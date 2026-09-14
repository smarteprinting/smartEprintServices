export default function sitemap() {
  const baseUrl = 'https://smarteprintservices.com';
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/shop', priority: 0.9 },
    { path: '/services', priority: 0.8 },
    { path: '/book-an-appointment', priority: 0.8 },
    { path: '/contact-us', priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route.priority,
  }));
}
