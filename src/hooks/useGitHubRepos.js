import { useState, useEffect } from "react";

const CACHE_KEY = "ap_gh_repos_v2";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

const getCached = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
};

const setCache = (data) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    // ignore storage quota errors
  }
};

export const useGitHubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = getCached();
    if (cached) {
      setRepos(cached);
      setLoading(false);
      return;
    }

    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=all`,
      { headers: { Accept: "application/vnd.github+json" } },
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setCache(data);
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  return { repos, loading, error };
};
