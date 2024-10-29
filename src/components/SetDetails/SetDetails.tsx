import type { LegoSet } from "../../lib/definitions";
import "./SetDetails.css";

type SetDetailsProps = {
	legoSet: LegoSet | null;
};

function SetDetails({ legoSet }: SetDetailsProps) {
	if (!legoSet) {
		return <section>Please select a LEGO set to see the details.</section>;
	}

	return (
		<section className="set-details">
			<h2>{legoSet.name}</h2>
			<p>
				<strong>Serial Number:</strong> {legoSet.serialNumber}
			</p>
			<p>
				<strong>Description:</strong> {legoSet.description}
			</p>
			<p>
				<strong>Category:</strong> {legoSet.category}
			</p>
			<p>
				<strong>Year:</strong> {legoSet.year}
			</p>
			<img src={legoSet.image} alt={legoSet.name} />
			<p>
				<strong>Pieces:</strong> {legoSet.pieces}
			</p>
		</section>
	);
}

export default SetDetails;
