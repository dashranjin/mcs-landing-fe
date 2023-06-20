import Image from "next/image";
export default function FlatList({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler;
}) {
  return (
    <div
      className="w-full h-[77px] bg-white roundend-[4px] justify-between flex items-center px-4 rounded-[8px]"
      onClick={onClick}
    >
      <p className="text-transparent bg-transparent">1</p>
      <p className="text-blue text-sm font-medium">{text}</p>
      <Image alt="arrow" src={"/other/arrow.png"} width={17} height={9} />
    </div>
  );
}
