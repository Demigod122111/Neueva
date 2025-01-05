"use client";

import { useEffect, useState } from "react";

const BrowsePage = () => {
  const [releases, setReleases] = useState([]);
  const [filteredReleases, setFilteredReleases] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Ascending or Descending
  const [filterTag, setFilterTag] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [selectedRelease, setSelectedRelease] = useState(null); // For the popup
  const itemsPerPage = 6;

  // Function to parse URL query parameters
  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    setSearch(params.get("search") || "");
    setSortOption(params.get("sort") || "");
    setFilterTag(params.get("tag") || "all");
    setFilterCategory(params.get("category") || "all");
    setPage(parseInt(params.get("page")) || 1);
  };

  useEffect(() => {
    if (window) getQueryParams();

    const fetchReleases = async () => {
      try {
        const response = await fetch("/api/releases");
        if (!response.ok) throw new Error("Failed to fetch releases");
        const data = await response.json();
        setReleases(data);
        setFilteredReleases(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReleases();
  }, []);

  // Update URL based on search and filter states
  const updateQueryParams = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (sortOption) params.set("sort", sortOption);
    if (filterTag) params.set("tag", filterTag);
    if (filterCategory) params.set("category", filterCategory);
    params.set("page", page);

    window.history.replaceState({}, "", "?" + params.toString());
  };

  // Search and Filter Logic
  useEffect(() => {
    let results = releases;

    // Search
    if (search.trim()) {
      results = results.filter((release) =>
        release.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by Tag
    if (filterTag !== "all") {
      results = results.filter(
        (release) =>
          (release.isPreProduction == true && filterTag == "true") ||
          (release.isPreProduction == false && filterTag == "false") ||
          (release.isDraft == true && filterTag == "draft")
      );
    }

    // Filter by Category
    if (filterCategory !== "all") {
      results = results.filter((release) => release.category === filterCategory);
    }

    // Sort
    if (sortOption === "name") {
      results.sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    } else if (sortOption === "date") {
      results.sort((a, b) =>
        sortOrder === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    setFilteredReleases(results);
    setPage(1); // Reset to first page

    // Update query parameters in the URL
    if (window) updateQueryParams();
  }, [search, filterTag, sortOption, releases, filterCategory, page, sortOrder]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredReleases.length / itemsPerPage);
  const paginatedReleases = filteredReleases.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Handle showing the release description in a modal
  const openDescriptionModal = (release) => {
    setSelectedRelease(release);
  };

  const closeDescriptionModal = () => {
    setSelectedRelease(null);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Browse Software</h1>

      {/* Search & Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 bg-gray-800 text-white rounded-md placeholder-gray-400"
        />
        <div className="flex w-full md:w-1/3">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 w-full bg-gray-800 text-white rounded-l-md"
          >
            <option value="">Sort by ...</option>
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 w-auto bg-gray-800 text-white rounded-r-md"
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
        <select
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          <option value="all">All Tags</option>
          <option value="false">Stable</option>
          <option value="true">Beta</option>
          <option value="draft">Draft</option>
        </select>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          <option value="all">All Categories</option>
          <option value="App">Apps</option>
          <option value="Game">Games</option>
          <option value="Unknown">Misfit</option>
        </select>
      </div>

      {/* Release List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedReleases.length === 0 ? (
          <div className="col-span-3 text-center text-white">
            {releases.length === 0 ? "Loading..." : "No Items"}
          </div>
        ) : (
          paginatedReleases.map((release) => (
            <div
              key={release.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative flex flex-col h-full"
            >
              {/* Badge for Beta */}
              {release.isPreProduction && (
                <span className="absolute top-[-10px] left-[-10px] bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full z-10">
                  Beta
                </span>
              )}

              {/* Draft Badge */}
              {release.isDraft && (
                <span
                  className={`absolute top-[-10px] ${release.isPreProduction ? "left-10" : "left-[-10px]"} bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10`}
                >
                  Draft
                </span>
              )}

              <h2 className="text-xl font-semibold text-white">{release.name}</h2>
              <p className="text-sm text-gray-400">Tag: {release.tag}</p>
              <p className="text-sm text-gray-400">
                Released: {new Date(release.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-400">Category: {release.category}</p>
              <ul className="mt-4 max-h-48 overflow-y-auto flex-1">
                {release.assets.map((asset) => {
                  const sizeInMB = asset.size / 1024 / 1024; // Size in MB
                  const sizeInGB = sizeInMB / 1024; // Size in GB
                  return (
                    <li key={asset.id} className="mt-2">
                      <a
                        href={asset.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {asset.name} ({sizeInGB >= 1 ? `${sizeInGB.toFixed(2)} GB` : `${sizeInMB.toFixed(2)} MB`})
                      </a>
                    </li>
                  );
                })}
              </ul>

              <button
                onClick={() => openDescriptionModal(release)}
                className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              >
                View Description
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {filteredReleases.length > 0 && (
        <div className="flex justify-between items-center mt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className={`px-4 py-2 bg-gray-700 text-white rounded-md ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`}
          >
            Previous
          </button>
          <span className="text-white">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className={`px-4 py-2 bg-gray-700 text-white rounded-md ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`}
          >
            Next
          </button>
        </div>
      )}

      {/* Release Description Modal */}
      {selectedRelease && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-white">{selectedRelease.name}</h2>
            <p className="mt-4 text-gray-400">{selectedRelease.description}</p>
            <button
              onClick={closeDescriptionModal}
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowsePage;
