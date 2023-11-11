import MainLayout from "@/components/layouts/MainLayout";
import { useGetDataQuery } from "@/redux/api/api";
import Image from "next/image";
import React from "react";

export default function Monitor() {
  const { data } = useGetDataQuery();
  const monitors = data?.data[0].data.monitor;

  return (
    <div className="flex  ">
      {monitors?.map((item) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] h-[500px] m-5 p-5  relative"
          key={item.name}
        >
          <h3 className="text-xl">{item.name}</h3>
          <p>{item.price}</p>

          <Image
            className="mx-auto absolute bottom-0 left-0"
            src={item?.image}
            alt={item?.name}
            width={350}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}

Monitor.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
