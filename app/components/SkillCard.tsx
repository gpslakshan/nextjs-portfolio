import { SkillData } from "@/types";
import Image from "next/image";

interface Props {
  skillData: SkillData;
}

const SkillCard = ({ skillData }: Props) => {
  return (
    <div className="shadow-lg p-3 bg-slate-50 rounded-lg flex flex-col justify-center items-center w-full">
      <div className="mb-2 w-full relative h-[100px]">
        <Image
          src={skillData.imageUrl}
          alt={skillData.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="">{skillData.name}</div>
    </div>
  );
};

export default SkillCard;
