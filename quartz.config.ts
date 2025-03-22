import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Beomsu",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-P07C416MPF", // Replace with your actual Google Analytics tracking ID
    },
    locale: "en-US",
    baseUrl: "berom.net",
    ignorePatterns: [
      ".git",
      ".gitignore",
      ".obsidian",
      "**/*.pdf",
      "**/*.canvas",
      "**/private/*",
      ".smart-env",
      "50. Calendar",
      "70. Settings",
    ],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f0f0f0",
          gray: "#c0c0c0",
          darkgray: "#4e4e4e",
          dark: "#000000",
          secondary: "#000000",
          tertiary: "#84a59d",
          highlight: "rgb(255, 180, 190)",
          textHighlight: "rgba(0, 0, 0, 0.1)",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#1e1e1e",
          gray: "#3f3f3f",
          darkgray: "#b1b1b1",
          dark: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#ffffff",
          highlight: "rgb(165, 33, 66)",
          textHighlight: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.WikiLinks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
