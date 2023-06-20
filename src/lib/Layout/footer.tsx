import { useRouter } from "next/router";
import { Footers } from "../constant";
import Image from "next/image";
import { useEffect } from "react";
export default function Footer() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/land");
    router.prefetch("/stage");
    router.prefetch("/stop1");
    router.prefetch("/stop2");
    router.prefetch("/drink");
    router.prefetch("/food");
    router.prefetch("/sos");
  }, []);

  return (
    <div
      className="h-[76px] w-full fixed bottom-0 left-0 bg-transparent justify-center flex rounded-t-xl overflow-hidden"
      style={{
        backgroundImage: "url(/footer/footer.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[286px] flex h-full justify-between bg-transparent">
        {Footers?.map((footers) => {
          return (
            <div
              className="flex flex-col gap-y-2 items-center w-[78px] h-[78px] place-self-center justify-center bg-transparent"
              key={footers.title}
              onClick={() => {
                router.push(footers.route[0]);
              }}
            >
              <Image
                alt="image"
                src={
                  footers.route.includes(router.pathname)
                    ? footers.selected
                    : footers.icon
                }
                className="bg-transparent"
                width={24}
                height={24}
                priority
              />
              <div className={`text-10 bg-transparent`}>{footers.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
