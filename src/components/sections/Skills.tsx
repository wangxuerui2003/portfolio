import Image from "next/image";

export default function Skills() {
	return (
		<section
			id="skills"
			className="w-full h-[80vh] bg-background flex flex-col justify-start items-center gap-6"
		>
			<div className="flex mt-28 items-center">
				<h1 className="font-bold text-3xl lg:text-6xl">Skills</h1>
				<Image
					src="/icons/programming.png"
					width={64}
					height={64}
					alt="Skills"
				/>
			</div>
			<div className="space-y-4 mt-6">
				<SkillRating skillName="Website Development" rating={8} />
				<SkillRating skillName="Mobile App Development" rating={6} />
				<SkillRating skillName="2D Game Development" rating={7} />
				<SkillRating skillName="Desktop App Development" rating={6} />
			</div>
		</section>
	);
}

function SkillRating({
	skillName,
	rating,
}: {
	skillName: string;
	rating: number;
}) {
	if (rating > 10) {
		rating = 10;
	} else if (rating < 0) {
		rating = 0;
	}

	const ratingTiles = Array.from({ length: 10 }, (_, i) => i < rating);

	return (
		<div className="flex justify-between items-center space-x-4">
			<h3 className="cursor-default text-xl lg:text-2xl font-bold">
				{skillName}
			</h3>
			<div className="flex space-x-1">
				{ratingTiles.map((on: boolean, index: number) => {
					return <RatingTile key={index} on={on} />;
				})}
			</div>
		</div>
	);
}

function RatingTile({ on }: { on: boolean }) {
	return (
		<span
			className={
				"w-4 h-4 lg:w-6 lg:h-6 rounded-sm " +
				(on ? "bg-yellow-300" : "bg-gray-300")
			}
		></span>
	);
}
