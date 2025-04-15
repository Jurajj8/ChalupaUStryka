let userConfig = undefined;
try {
  // Pokusíme sa najprv importovať ESM
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // Ak to zlyhá, použijeme CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // Ignorujeme chybu
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: '/ChalupaUStryka',
  assetPrefix: '/ChalupaUStryka'
};

if (userConfig) {
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
