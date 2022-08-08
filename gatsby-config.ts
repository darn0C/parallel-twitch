import type { GatsbyConfig } from "gatsby";

const plugins: GatsbyConfig['plugins'] = [
  'gatsby-plugin-sass',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/lib/favicon/twitch.png',
    }
  },
]

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Parallel Twitch`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: plugins,
};

export default config;
