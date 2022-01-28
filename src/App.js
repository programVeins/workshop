import "./App.css";
import Card from "./components/Card";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
} from "react-instantsearch-dom";
import searchClient from "./TypesenseConfig";
import CustomSearchBox from "./components/SearchBar";
import CustomHits from "./components/HitList";
import Map from "./components/Map";
import CustomStats from "./components/CustomStats";
import ListRefinements from "./components/RefinementList";

function App() {
  const fakeHit = {
    project_name: "Stark industries",
    builder_name: "Tony Ji",
    street_name: "Dubai Street",
    city_facet: "Dubai",
    sqrft: "1000",
    bhk_facet: "3",
    price: "1234567",
    image_url: "/images/1.jpg",
  };

  return (
    <div className="App">
      <h1 className="font-title text-6xl text-center mt-10 cursor-pointer">
        Homerce
      </h1>
      {/* <div className="flex font-body text-2xl items-center justify-center h-screen -my-28">
        It works! You have succesfully built the website and it's live! 🚀
      </div> */}
      {/* <div className="flex justify-center my-20">
        <Card hit={fakeHit} />
      </div> */}
      <InstantSearch
        indexName="cccf0bc0-86ee-4d49-b162-609c4e85c651"
        searchClient={searchClient}
      >
        <div className="mt-10">
          <CustomSearchBox />
        </div>
        <div className="px-12 mt-3 h-10 flex justify-between items-center font-body font-semibold">
          <CustomStats />
          <ListRefinements />
        </div>
        <div className="mt-10">
          <Map />
        </div>
        <div className="flex justify-center mt-10 mb-40">
          <CustomHits />
          <Configure hitsPerPage={6} />
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;
