import Image from "next/image";
export default function Doctor() {
  return (
    <div>
      <p className="text-center">
        ИНТЕРМЕД ЭМНЭЛГИЙН
        <br /> ЭМЧ
      </p>
      <div className="h-[293px] w-[270px] mt-7 relative border-[1px] border-[#AAAAAA] rounded-xl overflow-hidden">
        <Image
          priority
          alt="drink"
          src={"/other/doctor.png"}
          fill
          className="absolute"
          style={{ objectFit: "fill" }}
        />
      </div>
    </div>
  );
}
