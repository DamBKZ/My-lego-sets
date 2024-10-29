import Set from "../Set/Set";
import "./SetCatalog.css";
import type { LegoSet } from "../../lib/definitions";

type SetCatalogProps = {
	legoSets: LegoSet[];
	onSelectSet: (set: LegoSet) => void;
};

function SetCatalog({ legoSets, onSelectSet }: SetCatalogProps) {
	return (
		<div className="set-catalog-container">
			<section className="set-catalog">
				{legoSets.map((set) => (
					<Set key={set.id} legoSet={set} onClick={() => onSelectSet(set)} />
				))}
			</section>
		</div>
	);
}

export default SetCatalog;
