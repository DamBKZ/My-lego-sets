import type { LegoSet } from "../../lib/definitions";
import "./Set.css";

type SetProps = {
	legoSet: LegoSet;
	onClick: () => void;
};

function Set({ legoSet, onClick }: SetProps) {
	return (
		<article className="set" onClick={onClick} role="button" tabIndex={0}>
			<h2>{legoSet.name}</h2>
			<img src={legoSet.image} alt={legoSet.name} />
			<p>Serial Number: {legoSet.serialNumber}</p>
		</article>
	);
}

export default Set;
