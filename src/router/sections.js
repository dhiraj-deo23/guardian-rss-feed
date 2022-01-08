import express from "express";
import fetch from "node-fetch";
import sectionList from "../utils/sectionlist.js";
import { createRSSFeed } from "../utils/createRSSFeed.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await sectionList());
});

router.get("/:content", async (req, res) => {
  try {
    const contents = await sectionList();
    if (!contents.includes(req.params.content))
      return res.status(400).json({ error: "invalid query!" });
    const response = await fetch(
      `${process.env.BASE_URL}/${req.params.content}?show-fields=body&format=json&api-key=${process.env.API_KEY}`
    );
    const data = await response.json();
    if (data.response.status === "error")
      return res.status(404).json({ error: data.response.message });

    const items = data.response.results
      .map(
        (result) => `
      <item>
          <title>${result.webTitle}</title>
          <link>${result.webUrl}</link>
          <description>${result.fields.body}</description>
          <category>${result.webTitle}</category>
          <pubDate>${new Date(
            result.webPublicationDate
          ).toUTCString()}</pubDate>
          <guid>${result.webUrl}</guid>
        </item>
      `
      )
      .join("");

    const dataForRssFeed = {
      title: data.response.section.webTitle,
      link: data.response.section.webUrl,
      items,
    };

    const feed = createRSSFeed(dataForRssFeed);

    // res.json(data);
    res.send(feed);
  } catch (error) {
    res.status(500).json({ error: `something went wrong. ${error.message}` });
  }
});

export default router;
