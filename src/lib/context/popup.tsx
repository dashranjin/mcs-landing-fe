import { useContext, createContext, useState } from "react";

const popupContext = createContext<any>([]);

export function usePopup() {
  return useContext(popupContext);
}

export default function PopupProvider({ children }: any) {
  const [show, showPopup] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<JSX.Element>();
  return (
    <popupContext.Provider
      value={{ show, showPopup, popupContent, setPopupContent }}
    >
      {/* {show && (
                <>
                    <div className="bg-white w-[362px] p-[40px] rounded-md">
                        {popupContent}
                    </div>
                    <div
                        className="z-40 absolute top-0 left-0 w-screen h-screen bg-black opacity-20 items-center flex justify-center"
                        onClick={() => showPopup(false)}
                    ></div>
                </>
            )}
            {children} */}

      {show && (
        <>
          {popupContent && (
            <div className="bg-white p-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[53] rounded-xl justify-center items-center flex">
              {popupContent && popupContent}
            </div>
          )}
          <div
            className="backdrop-blur-[5px] bg-black absolute w-screen h-screen top-0 left-0 opacity-[0.50] z-[52]"
            onClick={() => {
              showPopup(false);
            }}
          />
        </>
      )}
      {children}
    </popupContext.Provider>
  );
}
