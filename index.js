class ScriptBlox {
    constructor(base_url = "https://scriptblox.com") {
        this.base_url = base_url;
    }

    _build_query(params) {
        const sp = new URLSearchParams();
        for (const [k, v] of Object.entries(params || {})) {
            if (v !== undefined && v !== null) sp.append(k, v);
        }
        return sp.toString();
    }

    async _get(path, params) {
        const url = `${this.base_url}${path}${params ? `?${this._build_query(params)}` : ""}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
        return res.json();
    }

    async _get_text(path) {
        const url = `${this.base_url}${path}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
        return res.text();
    }

    async _post(path, body) {
        const res = await fetch(`${this.base_url}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
        return res.json();
    }

    // ---------------- Scripts ----------------
    fetch_scripts(params = {}) {
        const defaults = { page: 1, max: 20, sortBy: "updatedAt", order: "desc" };
        return this._get("/api/script/fetch", { ...defaults, ...params });
    }

    get_script_details(script_id) {
        return this._get(`/api/script/${encodeURIComponent(script_id)}`);
    }

    get_raw_script(script_id) {
        return this._get_text(`/api/script/raw/${encodeURIComponent(script_id)}`);
    }

    search_scripts(q, params = {}) {
        if (!q) throw new Error("Search query 'q' is required");
        const defaults = { page: 1, max: 20, sortBy: "updatedAt", order: "desc", strict: true };
        return this._get("/api/script/search", { q, ...defaults, ...params });
    }

    get_trending_scripts() {
        return this._get("/api/script/trending");
    }

    // ---------------- Executors ----------------
    get_executors() {
        return this._get("/api/executor/list");
    }

    update_executor(body) {
        if (!body.id || !body.api_key) throw new Error("'id' and 'api_key' are required");
        return this._post("/api/executor/update", body);
    }

    fetchScripts(p) { return this.fetch_scripts(p); }
    getScriptDetails(id) { return this.get_script_details(id); }
    getRawScript(id) { return this.get_raw_script(id); }
    searchScripts(q, p) { return this.search_scripts(q, p); }
    getTrendingScripts() { return this.get_trending_scripts(); }
    getExecutors() { return this.get_executors(); }
    updateExecutor(b) { return this.update_executor(b); }
}

export default ScriptBlox;
export { ScriptBlox };

export const SORT_BY = {
    VIEWS: "views",
    LIKE_COUNT: "likeCount",
    CREATED_AT: "createdAt",
    UPDATED_AT: "updatedAt",
    DISLIKE_COUNT: "dislikeCount",
    ACCURACY: "accuracy"
};

export const ORDER = {
    ASC: "asc",
    DESC: "desc"
};

export const MODE = {
    FREE: "free",
    PAID: "paid"
};
