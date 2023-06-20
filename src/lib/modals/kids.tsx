import Image from "next/image";
export default function KidsModal() {
  const list = [
    "Хүүхдийн оролцоот жүжиг",
    "Үлгэр амилах цаг",
    "Art therapy",
    "Хөдөлгөөнт бясалгал",
    "Photo booth & Cosplays",
    "Free ice-cream & candy",
    "Гар урлал & цэцэг арчилгаа",
    "Шинжлэх ухааны туршилт",
  ];
  return (
    <div className="w-full grid grid-cols-1 gap-y-2">
      <div className="bg-red-200 h-[100px] w-full relative rounded-lg overflow-hidden">
        <Image
          alt="kids"
          src={"/stage/kids_narrow.png"}
          className="absolute"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="grid grid-cols-2 h-[184px] gap-x-2 gap-y-2">
        {list.map((data, key) => (
          <div
            key={key}
            className="bg-white rounded-md h-10 break-normal text-theme text-sm font-medium px-2 items-center flex text-center justify-center"
          >
            {data}
          </div>
        ))}
      </div>
      <div className="h-[350px] w-full relative border-[1px] border-[#AAAAAA] rounded-xl overflow-hidden0">
        <Image
          alt="map"
          src={"/stage/kids_map.png"}
          className="absolute"
          fill
          style={{ objectFit: "fill" }}
          priority
        />
      </div>
    </div>
  );
}
