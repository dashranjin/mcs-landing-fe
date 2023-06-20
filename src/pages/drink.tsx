import Image from "next/image";

export default function Drink() {
  const data = [
    "УС, УНДАА",
    "ХАЛУУН УНДАА",
    "PRINTED COFFEE",
    "NON-ALCOHOLIC COCKTAILS",
    "ACLOHOLIC BEVERAGE",
  ];
  return (
    <div className="h-full p-4">
      <div className="grid grid-cols-2 gap-x-2 gap-y-2">
        {data.map((data, key) => {
          return (
            <div
              key={key}
              className="w-full h-[42px] rounded-[6px] bg-white text-sm text-blue font-medium items-center flex justify-center text-center"
            >
              {data}
            </div>
          );
        })}
      </div>
      <div className="h-[350px] w-full mt-4 relative border-[1px] border-[#AAAAAA] rounded-xl overflow-hidden">
        <Image
          alt="drink"
          src={"/other/drink.png"}
          fill
          className="absolute"
          style={{ objectFit: "fill" }}
          priority
        />
      </div>
    </div>
  );
}
