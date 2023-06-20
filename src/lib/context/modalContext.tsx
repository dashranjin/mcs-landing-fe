import { useState, useContext, createContext, useEffect } from "react";
import { SwipeableDrawer } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
const modalContext = createContext<any>([]);

export function useModal() {
  return useContext(modalContext);
}

export default function ModalProvider({ children }: any) {
  const [show, setShow] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element | null>(null);
  const [initialHeight, setInitialHeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const newHeight = document?.getElementById("effect")?.clientHeight;
    if (newHeight) {
      if (height === 0) {
        setHeight(newHeight);
      } else {
        setInitialHeight(height);
        setHeight(newHeight);
      }
    }
  }, [content]);

  return (
    <modalContext.Provider value={{ show, setShow, content, setContent }}>
      {children}
      <SwipeableDrawer
        PaperProps={{
          sx: {
            borderRadius: "12px 12px 0px 0px",
            backgroundColor: "#F1F1F1",
            boxShadow: "none",
          },
        }}
        anchor="bottom"
        open={show}
        onClose={() => {
          setShow(false);
          setContent(null);
        }}
        onOpen={() => setShow(true)}
        disableSwipeToOpen
      >
        <motion.div
          initial={{
            height: initialHeight,
            opacity: 1,
          }}
          animate={{
            height: height,
            opacity: 1,
            transition: {
              height: {
                duration: 0.2,
              },
            },
          }}
          className="bg-whiteish text-blackish tracking-[0.1px] text-normal overflow-hidden"
        >
          <div id="effect" className="px-4 pb-[12px] pt-[24px]">
            <div className="h-6 w-full justify-center items-center flex absolute top-0 left-0">
              <div className="w-[150px] h-[6px] relative">
                <Image
                  alt="image"
                  src={"/swiper.png"}
                  fill
                  style={{ objectFit: "fill" }}
                  className="absolute"
                />
              </div>
            </div>
            {content}
          </div>
        </motion.div>
      </SwipeableDrawer>
    </modalContext.Provider>
  );
}
