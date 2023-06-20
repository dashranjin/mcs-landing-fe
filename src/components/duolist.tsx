import Image from "next/image";

export default function DuoList({
  isText,
  text1,
  text2,
  image,
}: {
  isText: boolean;
  text1?: string;
  text2: string;
  image?: string;
}) {
  return (
    <div className="h-[43px] w-full flex justify-evenly bg-white items-center text-sm rounded-md">
      {isText ? (
        <p className="w-[140px] text-center h-[25px] items-center flex justify-center">
          {text1}
        </p>
      ) : (
        image && (
          <div className="w-[140px] h-[25px] relative">
            <Image
              alt="image"
              src={image}
              fill
              className="absolute"
              style={{ objectFit: "contain" }}
            />
          </div>
        )
      )}

      <div className="relative h-[18px] w-[1px]">
        <Image
          alt="stroke"
          src={"/line.png"}
          fill
          className="absolute"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="w-[140px] text-center h-[25px] items-center flex justify-center">
        {text2}
      </p>
    </div>
  );
}
