const RouteData = [
  {
    path: '/',
    route: 'Home',
  },
  {
    path: '/about',
    route: 'About Me',
  },
  {
    path: '/portfolio',
    route: 'Portfolio',
  },
  {
    path: '/timeline',
    route: 'Timeline',
  },
  {
    path: '/blog',
    route: 'Blog',
  },
  {
    path: '/video',
    route: 'Video',
  },
  {
    path: '/contact',
    route: 'Contact',
  },
];

export { RouteData };

export default (req, res) => {
  res.statusCode = 200;
  res.json({ route: RouteData });
};
