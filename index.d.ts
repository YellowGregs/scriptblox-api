export interface GameInfo {
  _id: string;
  name: string;
  imageUrl: string;
  gameId?: number;
}

export interface OwnerInfo {
  _id: string;
  username: string;
  verified: boolean;
  profilePicture?: string;
  status?: string;
}

export interface ScriptItem {
  _id: string;
  title: string;
  slug: string;
  verified: boolean;
  key: boolean;
  views: number;
  scriptType: string;
  isUniversal: boolean;
  isPatched: boolean;
  createdAt: string;
  updatedAt?: string;
  image?: string;
  script?: string;
  game?: GameInfo;
  matched?: string[];
}

export interface ScriptListResponse {
  result: {
    totalPages?: number;
    nextPage?: number;
    max?: number;
    scripts: ScriptItem[];
  };
}

export interface ScriptDetailsResponse {
  script: {
    _id: string;
    title: string;
    game?: GameInfo;
    features?: string;
    tags?: string[];
    script: string;
    owner?: OwnerInfo;
    image?: string;
    slug: string;
    verified: boolean;
    keyLink?: string;
    views: number;
    scriptType: string;
    isUniversal: boolean;
    isPatched: boolean;
    visibility?: string;
    createdAt: string;
    likeCount: number;
    dislikeCount: number;
    liked?: boolean;
    disliked?: boolean;
    isFav?: boolean;
  };
}

export interface Executor {
  _id: string;
  name: string;
  patched: boolean;
  platform: string;
  website?: string;
  discord?: string;
  version?: string;
  versionDate?: string;
  thumbnail?: string;
  store?: string;
  type?: string;
}

export const SORT_BY: {
  VIEWS: "views";
  LIKE_COUNT: "likeCount";
  CREATED_AT: "createdAt";
  UPDATED_AT: "updatedAt";
  DISLIKE_COUNT: "dislikeCount";
  ACCURACY: "accuracy";
};

export const ORDER: {
  ASC: "asc";
  DESC: "desc";
};

export const MODE: {
  FREE: "free";
  PAID: "paid";
};

export default class ScriptBlox {
  constructor(base_url?: string);

  fetchScripts(params?: Record<string, any>): Promise<ScriptListResponse>;
  getScriptDetails(script_id: string): Promise<ScriptDetailsResponse>;
  getRawScript(script_id: string): Promise<string>;
  searchScripts(q: string, params?: Record<string, any>): Promise<ScriptListResponse>;
  getTrendingScripts(): Promise<ScriptListResponse>;
  getExecutors(): Promise<Executor[]>;
  updateExecutor(body: Record<string, any>): Promise<{ message: string }>;
}

