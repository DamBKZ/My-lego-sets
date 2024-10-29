import "./SetFilter.css";

type SetFilterProps = {
	onFilterChange: (category: string) => void;
};

function SetFilter({ onFilterChange }: SetFilterProps) {
	return (
		<section className="set-filter">
			<button
				type="button"
				onClick={() => onFilterChange("")}
				className="filter-button"
			>
				All
			</button>
			<button
				type="button"
				onClick={() => onFilterChange("Castle")}
				className="filter-button"
			>
				Castle
			</button>
			<button
				type="button"
				onClick={() => onFilterChange("Space")}
				className="filter-button"
			>
				Space
			</button>
			<button
				type="button"
				onClick={() => onFilterChange("Aquazone")}
				className="filter-button"
			>
				Aquazone
			</button>
		</section>
	);
}

export default SetFilter;
