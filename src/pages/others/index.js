import MainLayout from "@/components/layouts/MainLayout";
import { useGetDataQuery } from "@/redux/api/api";
import Image from "next/image";
import React from "react";

export default function Others() {
  const { data } = useGetDataQuery();
  const others = data?.others;

  return (
    <div className="flex flex-wrap">
      {others?.map((item) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] m-5 p-5"
          key={item.name}
        >
          <h3 className="text-xl">{item.name}</h3>
          <p>{item.price}</p>

          <Image
            className="mx-auto"
            src={item?.image}
            alt={item?.name}
            width={350}
            height={350}
          />
        </div>
      ))}
    </div>
  );
}

Others.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
