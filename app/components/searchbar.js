"use client";

import { useEffect, useState } from "react";

export default function SearchBar() {
    const [search, setSearch] = useState();

    useEffect(() => {
        if (window) {
            setSearch(new URLSearchParams(window.location.search).get("search") || "");
        }
    }, [window ? new URLSearchParams(window.location.search).get("search") : window]);

    const updateSearch = (s) => {
        setSearch(s);
    };

    return (
        <>
            <form style={{ display: "none" }} action="/browse" id="searchForm"></form>
            <input
                type="text"
                placeholder="Search..."
                name="search"
                value={search}
                onChange={({ target }) => updateSearch(target.value)}
                form="searchForm"
                className="bg-gray-700 w-full sm:w-auto md:w-80 text-gray-300 border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                aria-label="Search"
            />
        </>
    );
}
