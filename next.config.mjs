import { withNextVideo } from "next-video/process";
import { hostname } from "os";
/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname:"/a/**",
        }
    }
};

export default withNextVideo(nextConfig);