import Image from "next/image";
export default function LandsModal() {
  return (
    <div className="w-full grid grid-cols-1 gap-y-2">
      <div className="bg-red-200 h-[100px] w-full relative rounded-lg overflow-hidden">
        <Image
          alt="kids"
          src={"/stage/lands_narrow.png"}
          className="absolute"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}
