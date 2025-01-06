export function getRandomLinkForRedirection() {
  const links = [
    'https://www.linkedin.com/in/ricardo-camilo-492b95b3/',
    'https://x.com/Ricardo50993066',
    'https://www.instagram.com/ricardohks/',
  ];

  return links[Math.floor(Math.random() * links.length)];
}