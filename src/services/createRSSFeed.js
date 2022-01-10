const createRSSFeed = ({ title, link, results }) => {
  // generating items for rss feed
  const items = results
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

  const rssFeed = `
      <?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0">
        <channel>
          <title>${title} | The Guardian</title>
          <link>${link}</link>
          <description>Latest ${title} news on UK and world from the Guardian, the world's leading liberal voice</description>
          <language>en</language>
          <copyright>Guardian News and Media Limited or its affiliated companies. All rights reserved. ${new Date().getFullYear()}</copyright>
          <pubDate>${new Date().toUTCString()}</pubDate>
          ${items}
        </channel>
      </rss>
    `;

  return rssFeed;
};

export { createRSSFeed };
