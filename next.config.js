/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'anhjmocosisxhsjlqnip.supabase.co',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
