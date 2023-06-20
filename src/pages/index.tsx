import Image from "next/image";
import { Inter } from "next/font/google";
import Transition from "@/components/Transition";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Transition className="h-full">map</Transition>;
}
