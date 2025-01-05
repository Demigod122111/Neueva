"use client"

import { useEffect, useState } from "react";

export default function SearchBar()
{
    const [search, setSearch] = useState();

    useEffect(() => {
        setSearch(new URLSearchParams(window.location.search).get("search") || "")
    }, [new URLSearchParams(window.location.search).get("search")]);

    const updateSearch = (s) => {
        setSearch(s);
    }

    return (<>
        <form style={{display: "none"}} action="/browse" id="searchForm"></form>
        <input
            type="text"
            placeholder="Search..."
            name="search"
            value={search}
            onChange={({target}) => updateSearch(target.value)}
            form="searchForm"
            className="bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search"
        />
    </>);
}