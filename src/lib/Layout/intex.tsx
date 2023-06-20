import Header from "./header";
import Footer from "./footer";
import Transition from "@/components/Transition";
import Tab, { TabType } from "@/components/tab";
import { useRouter } from "next/router";
import Image from "next/image";

const homeTabRouter = ["/", "/land"];
const otherTabRouters = ["/stop1", "/stop2", "/drink", "/food", "/sos"];
const busTabRouters = ["/stop1", "/stop2"];
const foodTabROuter = ["/drink", "/food"];
export default function Layout({ children }: any) {
  const router = useRouter();
  const hasHomeTab = homeTabRouter.includes(router.pathname);
  const hasOtherTab = otherTabRouters.includes(router.pathname);
  const hasBusTab = busTabRouters.includes(router.pathname);
  const hasFoodTab = foodTabROuter.includes(router.pathname);
  const busTab: TabType[] = [
    {
      component: () => (
        <div
          onClick={() => router.push("/stop1")}
          className={`w-full h-9 relative items-center flex justify-center`}
        >
          {/* qwe */}
          <Image
            alt="went"
            src={"/other/bus_to_land.png"}
            style={{ objectFit: "cover" }}
            // fill
            width={149}
            height={19}
            priority
            className="absolute"
          />
        </div>
      ),
      routes: ["/stop1"],
    },

    {
      component: () => (
        <div
          onClick={() => router.push("/stop2")}
          className={`w-full h-9 relative items-center flex justify-center`}
        >
          <Image
            alt="went"
            src={"/other/land_to_bus.png"}
            style={{ objectFit: "contain" }}
            // fill
            width={149}
            height={19}
            priority
            className="absolute"
          />
        </div>
      ),
      routes: ["/stop2"],
    },
  ];
  const otherTab: TabType[] = [
    {
      routes: ["/stop1", "/stop2"],
      component: () => (
        <div
          className="w-full items-center justify-center flex h-[34px]"
          onClick={() => router.push("/stop1")}
        >
          BUS
        </div>
      ),
    },
    {
      routes: ["/drink", "/food"],
      component: () => (
        <div
          onClick={() => router.push("/drink")}
          className="w-full items-center justify-center flex h-[34px]"
        >
          FOOD
        </div>
      ),
    },
    {
      routes: ["/sos"],
      component: () => (
        <div
          onClick={() => router.push("/sos")}
          className="w-full items-center justify-center flex h-[34px]"
        >
          SOS
        </div>
      ),
    },
  ];

  const foodTab: TabType[] = [
    {
      routes: ["/drink"],
      component: () => (
        <div
          className="w-full items-center justify-center flex h-9"
          onClick={() => router.push("/drink")}
        >
          DRINK
        </div>
      ),
    },
    {
      routes: ["/food"],
      component: () => (
        <div
          onClick={() => router.push("/food")}
          className="w-full items-center justify-center flex h-9"
        >
          FOOD
        </div>
      ),
    },
  ];

  const homeTab: TabType[] = [
    {
      routes: ["/"],
      component: () => (
        <div
          className="w-full items-center justify-center flex h-9"
          onClick={() => router.push("/")}
        >
          MAP
        </div>
      ),
    },
    {
      routes: ["/land"],
      component: () => (
        <div
          onClick={() => router.push("/land")}
          className="w-full items-center justify-center flex h-9"
        >
          LAND
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen w-screen relative">
      <Header />
      <div className="fixed top-[70px] w-full h-[calc(100%-76px)] rounded-t-xl overflow-hidden bg-system">
        {hasOtherTab && <Tab hasStroke={true} tabs={otherTab} />}
        {hasBusTab && <Tab hasStroke={false} tabs={busTab} />}
        {hasFoodTab && <Tab hasStroke={false} tabs={foodTab} />}
        {hasHomeTab && <Tab hasStroke={true} tabs={homeTab} />}
        {children}
      </div>
      <Footer />
    </div>
  );
}
