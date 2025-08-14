/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'https://picsum.photos'
            },
            {
                protocol : 'https',
                hostname : 'https://intranet.youcode.ma'
            },
            {
                protocol : 'https',
                hostname : 'https://youcode.ma'
            }
        ]
    }
};

export default nextConfig;
