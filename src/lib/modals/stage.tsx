import Image from "next/image";
import DuoList from "@/components/duolist";
export default function StateModal() {
  const data = [
    { time: "11:30 - 12:00", evenName: "Let's Opening" },
    { time: "12:00 - 19:00", evenName: "Enjoy with companies" },
    { time: "20:00 - 00:00", evenName: "Show time" },
  ];
  return (
    <div className="w-full">
      <div className="bg-red-200 h-[100px] w-full relative rounded-lg overflow-hidden">
        <Image
          alt="kids"
          src={"/stage/stage_narrow.png"}
          className="absolute"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="mt-2 grid grid-cols-1 gap-y-2">
        {data.map((data, key) => (
          <DuoList
            isText={true}
            text2={data.evenName}
            text1={data.time}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
