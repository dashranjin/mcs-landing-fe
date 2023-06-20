import Image from "next/image";
export default function Header() {
  return (
    <div className="h-[70px] w-full fixed top-0 left-0 bg-theme items-center flex justify-center">
      <Image alt="header" src={"/header/header.png"} width={164} height={50} />
    </div>
  );
}
