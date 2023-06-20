import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type TabType = {
  routes: string[];
  component: () => JSX.Element;
};

export default function Tab({
  hasStroke,
  tabs,
}: {
  hasStroke: boolean;
  tabs: TabType[];
}) {
  const [index, setIndex] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.routes.includes(router.pathname));
    setIndex(index);
  }, [router.pathname]);

  return (
    <div className="h-[36px] relative">
      <div className={`flex justify-around`}>
        {tabs.map((tab, key) => {
          return (
            <div
              key={key}
              className={`w-full ${
                tab.routes.includes(router.pathname)
                  ? "bg-white"
                  : "bg-[#ECECEC]"
              }`}
            >
              {tab.component && tab.component()}
              {tab.routes.includes(router.pathname) && hasStroke && (
                <div id="stroke" className={`h-[2px] w-full bg-darkBlue`}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
