import { NextResponse } from "next/server";

export async function GET() {
  const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;

  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch releases" }, { status: 500 });
  }

  const releases = await response.json();

  const formattedReleases = releases.map((release) => {
    // Logic to classify the release as an app or a game
    const isApp = release.name.toLowerCase().includes("app") || release.assets.some(asset => asset.name.toLowerCase().includes(".exe"));
    const isGame = release.name.toLowerCase().includes("game") || release.assets.some(asset => asset.name.toLowerCase().includes(".zip"));

    return {
      id: release.id,
      name: release.name,
      tag: release.tag_name,
      createdAt: release.created_at,
      isPreProduction: release.prerelease,
      isDraft: release.draft,
      assets: release.assets.map((asset) => ({
        id: asset.id,
        name: asset.name,
        size: asset.size,
        downloadUrl: asset.browser_download_url,
      })),
      category: isGame ? "Game" : isApp ? "App" : "Unknown",
    };
  });

  return NextResponse.json(formattedReleases);
}
