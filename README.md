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

```ts
import ScriptBlox, { SORT_BY, ORDER, MODE } from "scriptblox-api";

const sb = new ScriptBlox();

const scripts = await sb.fetchScripts({
  page: 1,                     // Start page (default 1)
  max: 20,                     // Max scripts to fetch (default 20, max 20)
  mode: MODE.FREE,             // "free" or "paid"
  patched: 1,                  // 1 = yes, 0 = no
  key: 0,                      // 1 = yes, 0 = no
  universal: 1,                // 1 = yes, 0 = no
  verified: 1,                 // 1 = yes, 0 = no
  sortBy: SORT_BY.UPDATED_AT,  // Sort criteria
  order: ORDER.DESC            // Sort order
});
console.log(scripts.result.scripts);

// Search scripts
const search_results = await sb.searchScripts("admin", {
  page: 1,
  max: 10,
  strict: true,
});
console.log(search_results.result.scripts);

// script details
const script_details = await sb.getscript_details("script_id_here");
console.log(script_details.script);

// raw script
const raw = await sb.getRawScript("script_id_here");
console.log(raw);

// Trending scripts
const trending = await sb.getTrendingScripts();
console.log(trending.result.scripts);

// Executors
const executors = await sb.getExecutors();
console.log(executors);

// Update executor (this i don't know why i added it but 🤷‍♂️)
const response = await sb.updateExecutor({
  id: "MyExecutor",
  api_key: "YOUR_API_KEY",
  name: "Updated Executor Name",
  patched: true
});
console.log(response.message);
```

## Usage (CommonJS)

```js
const { ScriptBlox } = require("scriptblox-api");

const sb = new ScriptBlox();

sb.getExecutors().then(console.log);
```

---

## Enums / Parameters

### SORT\_BY

```ts
SORT_BY = {
  VIEWS: "views",
  LIKE_COUNT: "likeCount",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt",
  DISLIKE_COUNT: "dislikeCount",
  ACCURACY: "accuracy"
}
```

### ORDER

```ts
ORDER = {
  ASC: "asc",
  DESC: "desc"
}
```

### MODE

```ts
MODE = {
  FREE: "free",
  PAID: "paid"
}
```

### Fetch/Search Script Parameters

| Parameter | Type    | Default   | Description                              |
| --------- | ------- | --------- | ---------------------------------------- |
| page      | number  | 1         | Start page for fetching scripts          |
| max       | number  | 20        | Maximum scripts per request (up to 20)   |
| mode      | string  | -         | "free" or "paid" scripts                 |
| patched   | 0 or 1  | -         | Whether script is patched                |
| key       | 0 or 1  | -         | Whether script has key system            |
| universal | 0 or 1  | -         | Whether script is universal              |
| verified  | 0 or 1  | -         | Whether script is verified               |
| sortBy    | string  | updatedAt | Sort criteria (use `SORT_BY`)            |
| order     | string  | desc      | Sort order (use `ORDER`)                 |
| strict    | boolean | true      | Only for search: enable strict matching  |
| q         | string  | -         | Only for search: search query (required) |

---

## License

MIT © YellowGreg
