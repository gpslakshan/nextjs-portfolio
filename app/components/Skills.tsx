import { SkillData } from "@/types";
import { sanity } from "../lib/sanity";
import SkillCard from "./SkillCard";

async function getSkills() {
  const query = `*[ _type == "skill" ]{
    name,
    _id,
    "imageUrl":image.asset->url,
    categories
  }`;

  const data = await sanity.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

const Skills = async () => {
  const data: SkillData[] = await getSkills();

  return (
    <section className="p-6 max-w-[1000px] mx-auto" id="skills">
      <h1 className="text-4xl mb-5 lg:mt-[40px] lg:mb-[30px] text-blue-600">
        Skills
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {data.map((skill) => (
          <SkillCard key={skill._id} skillData={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
