const createRSSFeed = ({ title, link, items }) => {
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
          <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
          ${items}
        </channel>
      </rss>
    `;

  return rssFeed;
};

export { createRSSFeed };
