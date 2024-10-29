import { useState } from "react";
import "./App.css";
import SetFilter from "./components/SetFilter/SetFilter";
import SetCatalog from "./components/SetCatalog/SetCatalog";
import SetDetails from "./components/SetDetails/SetDetails";
import legoList from "./assets/data/legoList.json";
import type { LegoSet } from "./lib/definitions";
import bannerImage from "../src/assets/pictures/bannière.jpg";

function App() {
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [selectedSet, setSelectedSet] = useState<LegoSet | null>(null);

	const handleFilterChange = (category: string) => {
		setSelectedCategory(category);
		setSelectedSet(null);
	};

	const handleSetClick = (set: LegoSet) => {
		setSelectedSet(set);
	};

	const filteredSets = selectedCategory
		? legoList.filter((set: LegoSet) => set.category === selectedCategory)
		: legoList;

	return (
		<div className="app">
			<img src={bannerImage} alt="LEGO Banner" className="banner-image" />
			<h1>LEGO sets from my childhood</h1>
			<SetFilter onFilterChange={handleFilterChange} />
			<div className="content">
				<div className="set-catalog-container">
					<SetCatalog legoSets={filteredSets} onSelectSet={handleSetClick} />
					{selectedSet && <SetDetails legoSet={selectedSet} />}
				</div>
			</div>
		</div>
	);
}

export default App;
