import Transition from "@/components/Transition";
import Image from "next/image";
import { useModal } from "@/lib/context/modalContext";
import KidsModal from "@/lib/modals/kids";
import LandsModal from "@/lib/modals/lands";
import StateModal from "@/lib/modals/stage";
export default function Stage() {
  const { setContent, setShow } = useModal();
  const images = [
    {
      image: "/stage/kids.png",
      onclick: () => {
        setContent(<KidsModal />);
        setShow(true);
      },
    },
    {
      image: "/stage/lands.png",
      onclick: () => {
        setContent(<LandsModal />);
        setShow(true);
      },
    },
    {
      image: "/stage/stage.png",
      onclick: () => {
        setContent(<StateModal />);
        setShow(true);
      },
    },
  ];
  return (
    <Transition className="p-4 grid grid-cols-1 gap-y-2">
      {images.map((data, key) => {
        return (
          <div
            key={key}
            className="relative w-full h-[160px] rounded-xl overflow-hidden"
          >
            <Image
              alt="image"
              src={data.image}
              onClick={data.onclick}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        );
      })}
    </Transition>
  );
}
