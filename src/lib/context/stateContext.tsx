import { useState, useContext, createContext, useEffect } from "react";
import { Stack } from "../constant";
import { useRouter } from "next/router";
const stateContext = createContext<any>([]);

interface Filter {
  type: Object[];
  power: Object[];
}

export const States = () => {
  return useContext(stateContext);
};

const StateProvider = ({ children }: any) => {
  const router = useRouter();
  const [previousPath, setPreviousPath] = useState<string>("/");
  const [direction, setDirection] = useState<"left" | "right" | "bottom">(
    "right"
  );
  useEffect(() => {
    const previousIndex = Stack.findIndex(
      (current) => current.route === previousPath
    );
    const newIndex = Stack.findIndex(
      (current) => current.route === router.pathname
    );

    if (previousIndex < newIndex) {
      setDirection("right");
    } else {
      setDirection("left");
    }
    setPreviousPath(router.pathname);
  }, [router.pathname]);

  return (
    <stateContext.Provider
      value={{
        direction,
        setDirection,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export default StateProvider;
