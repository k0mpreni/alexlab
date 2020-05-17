import {
  posts
} from './_posts.js';

const lookup = new Map();
posts.forEach(post => {
  lookup.set(post.permalink, JSON.stringify(post));
});

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const {
    permalink
  } = req.params;

  if (lookup.has(permalink)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(lookup.get(permalink));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}