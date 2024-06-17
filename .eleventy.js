const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/img");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  return {
    dir: {
      input: "code",
      output: "docs",
    },
  };
};
