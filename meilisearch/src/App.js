import "instantsearch.css/themes/algolia-min.css";
import React from "react";
import { InstantSearch, InfiniteHits, SearchBox, Stats, Highlight } from "react-instantsearch-dom";
import "./App.css";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const searchClient = instantMeiliSearch(
  "http://localhost:7700",
  "-PR_CbbMXdB4fQQUyPM9Rn-SBN3c-lFAKXBX6HAieII"
);

const App = () => (
  <div className="ais-InstantSearch">
    <h1>Restaurants Demo with Meilisearch</h1>
    <InstantSearch indexName="posts" searchClient={searchClient}>
      <Stats />
      <SearchBox />
      <InfiniteHits hitComponent={Hit} />
    </InstantSearch>
  </div>
);

const Hit = ({ hit }) => (
  <div key={hit.id}>
    <div className="hit-id">
      <Highlight attribute="id" hit={hit} />
    </div>
    <div className="hit-name">
      <Highlight attribute="name" hit={hit} />
    </div>
  </div>
);

export default App;
