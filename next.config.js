/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  output: 'export',
  basePath: isGithubPages ? '/soporteclubnautilus.github.io' : '',
  assetPrefix: isGithubPages ? '/soporteclubnautilus.github.io/' : '',
};