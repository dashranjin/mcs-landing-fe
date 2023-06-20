import Image from "next/image";
import { ArriveTime } from "@/lib/constant";
import { useState, useEffect } from "react";
import moment, { Moment } from "moment";
export default function Stop2() {
  const [now, setNow] = useState<Moment>();
  useEffect(() => {
    const now = moment().utcOffset("+08:00");
    setNow(now);
  }, []);

  return (
    <div className="h-full p-4">
      <div className="w-full h-[188px] bg-black relative rounded-[7px] overflow-hidden">
        <Image
          alt="went"
          src={"/other/arrive.png"}
          style={{ objectFit: "cover" }}
          fill
          priority
        />
      </div>
      {now && (
        <div className="h-max">
          <div className="w-full mt-4 grid grid-cols-4 gap-x-2 gap-y-2">
            {ArriveTime.map((data: string, key: any) => {
              let checkDate;
              const time = data.split(":");
              if (parseInt(time[0]) < 11) {
                checkDate = "2023-06-21";
              } else {
                checkDate = "2023-06-20";
              }
              return (
                <div
                  key={key}
                  className={`h-[28px] rounded-[4px] items-center flex justify-center ${
                    moment(`${checkDate} ${data}:00`).isAfter(now)
                      ? "bg-white"
                      : "bg-[#D3D3D3]"
                  }`}
                >
                  {data}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
