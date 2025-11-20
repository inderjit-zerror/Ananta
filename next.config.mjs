/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "glslify-loader",
          options: {
            transform: [],
          },
        },
      ],
    });

    return config;
  },
  reactCompiler: true,
};

export default nextConfig;
