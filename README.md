# ScriptBlox API Wrapper

A simple JavaScript/TypeScript wrapper for the [ScriptBlox API](https://docs.scriptblox.com/).  
Easily fetch scripts, search, get trending scripts, and executors.

---

## Installation

```bash
npm install scriptblox-api
````

---

## Usage (ESM)

```js
import ScriptBlox, { SORT_BY, ORDER, MODE } from "scriptblox-api";

const sb = new ScriptBlox();

// fetch 5 free scripts
const scripts = await sb.fetchScripts({ max: 5, mode: MODE.FREE });
console.log(scripts.result.scripts);

// get trending scripts
const trending = await sb.getTrendingScripts();
console.log(trending.result.scripts);

// search scripts
const searchResults = await sb.searchScripts("admin", { max: 10 });
console.log(searchResults.result.scripts);
```

---

## Usage (CommonJS)

```js
const { ScriptBlox } = require("scriptblox-api");

const sb = new ScriptBlox();

sb.getExecutors().then(console.log);
```

---

## Features

* Fetch scripts with filters (`free`, `paid`, `patched`, `key`, `universal`, etc.)
* Fetch individual script details or raw scripts
* Search scripts with query and filters
* Get trending scripts
* Fetch and update executors
* Fully typed for TypeScript

---

## Enums

```ts
SORT_BY = {
  VIEWS: "views",
  LIKE_COUNT: "likeCount",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt",
  DISLIKE_COUNT: "dislikeCount",
  ACCURACY: "accuracy"
}

ORDER = {
  ASC: "asc",
  DESC: "desc"
}

MODE = {
  FREE: "free",
  PAID: "paid"
}
```

---

## License

MIT © YellowGreg
