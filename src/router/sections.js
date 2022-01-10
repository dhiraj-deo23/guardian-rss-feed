import express from "express";
import fetch from "node-fetch";
import sectionList from "../services/sectionlist.js";
import { createRSSFeed } from "../services/createRSSFeed.js";
import { redisCache, setCache } from "../services/cacheMiddleware.js";

const router = express.Router();

// caching section list in memory
const sectionsCache = await sectionList();

router.get("/", async (req, res) => {
  res.json(sectionsCache);
});

router.get("/:section", redisCache, async (req, res) => {
  try {
    const sections = [...sectionsCache];

    // checking if endpoint is present in section list, also checks for small letters and/or hyphenated endpoints only by default
    if (!sections.includes(req.params.section))
      return res.status(400).json({ error: "invalid query!" });

    // making api request to guardian api
    const response = await fetch(
      `${process.env.BASE_URL}/${req.params.section}?show-fields=body&format=json&api-key=${process.env.API_KEY}`
    );
    const data = await response.json();
    if (data.response.status === "error")
      return res.status(404).json({ error: data.response.message });

    const dataForRssFeed = {
      title: data.response.section.webTitle,
      link: data.response.section.webUrl,
      results: data.response.results,
    };

    const feed = createRSSFeed(dataForRssFeed);
    setCache(req.params.section, JSON.stringify(feed));

    res.send(feed);
  } catch (error) {
    res.status(500).json({ error: `something went wrong. ${error.message}` });
  }
});

export default router;
