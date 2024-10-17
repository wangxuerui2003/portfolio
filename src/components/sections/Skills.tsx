import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full h-[100vh] px-6 lg:px-24 bg-background flex flex-col justify-start items-center flex-grow gap-6"
    >
      <div className="flex mt-12 lg:mt-24 items-center gap-4">
        <h1 className="font-bold text-4xl lg:text-6xl">Skills</h1>
        <Image
          src="/icons/programming.png"
          width={64}
          height={64}
          alt="Skills"
        />
      </div>
      <div className="space-y-4 mt-3 lg:mt-6">
        <SkillRating skillName="Website Development" rating={8} />
        <SkillRating skillName="Mobile App Development" rating={6} />
        <SkillRating skillName="2D Game Development" rating={7} />
        <SkillRating skillName="Desktop App Development" rating={6} />
        <SkillRating skillName="Web Scraping & Automation" rating={7} />
        <SkillRating skillName="Machine Learning" rating={5} />
      </div>

      <div className="mt-4 lg:mt-6 space-y-2">
        <SkillsIcons
          skillName="Languages"
          iconsString="c,cpp,python,html,css,js,nodejs,typescript,cs,php,lua,r"
        />
        <SkillsIcons
          skillName="Frameworks"
          iconsString="react,nextjs,express,django,flask,fastapi,laravel,unity,tensorflow"
        />
        <SkillsIcons
          skillName="Tools"
          iconsString="git,docker,tailwind,mysql,postgres,sqlite,mongodb,firebase,aws,gcp,nginx,selenium"
        />
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
    <div className="flex justify-between items-start lg:space-x-4 flex-col lg:flex-row">
      <h3 className="cursor-default text-lg lg:text-2xl">{skillName}</h3>
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
      className={"w-6 h-6 rounded-sm " + (on ? "bg-yellow-300" : "bg-gray-300")}
    ></span>
  );
}

function SkillsIcons({
  skillName,
  iconsString,
}: {
  skillName: string;
  iconsString: string;
}) {
  return (
    <div className="flex flex-col items-start justify-between">
      <h4 className="cursor-default text-xl">{skillName}</h4>
      <img
        className="w-auto"
        src={`https://skillicons.dev/icons?i=${iconsString}`}
        alt={`${skillName} Skills Icons`}
      />
    </div>
  );
}
