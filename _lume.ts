// deno-lint-ignore-file no-explicit-any

import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import date from "lume/plugins/date.ts";
import feed from "lume/plugins/feed.ts";
import nav from "lume/plugins/nav.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";

import mdAnchor from "npm:markdown-it-anchor";
import mdFootnote from "npm:markdown-it-footnote";
import { html5Media } from "npm:markdown-it-html5-media";
import mdImageCaption from "npm:markdown-it-image-caption";
import mila from "npm:markdown-it-link-attributes";
import attrs from "npm:markdown-it-attrs";

const site = lume(
  {
    src: "./site",
    dest: "./public",
    location: new URL("https://existencesmp.com"),
  },
  {
    markdown: {
      options: {
        xhtmlOut: false,
        typographer: true,
      },
    },
  },
);

site.copy("static");
site.copy("assets");
site.copy("robots.txt");
site.use(attributes());
site.use(date());
site.use(feed());
site.use(nav());
site.use(slugify_urls());

const customizeMarkdown = (md: any) => {
  md.use(mdAnchor, { level: 2 });
  md.use(mdFootnote);
  md.use(html5Media);
  md.use(mdImageCaption);
  md.use(mila, [
    {
      attrs: {
        target: "_blank",
        rel: "noopener",
      },
    },
  ]);
  md.use(attrs);
};

const md: any = await new Promise((r) => site.hooks.markdownIt(r));
customizeMarkdown(md);

export default site;
