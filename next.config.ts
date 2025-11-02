import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
                protocol: "https",
            },
            {
                hostname: "i.ytimg.com",
                protocol: "https",
            },
            {
                hostname: "drive.google.com",
                protocol: "https",
            },
        ],
    },
};

export default nextConfig;
