import MainLayout from "@/components/layouts/MainLayout";
import { useGetDataQuery } from "@/redux/api/api";
import Image from "next/image";
import React from "react";

export default function CpuPage() {
  const { data } = useGetDataQuery();
  const cpus = data?.data[0].data.processor;
  return (
    <div className="flex flex-wrap">
      {cpus?.map((cpu) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] h-[500px] m-5 p-5  relative"
          key={cpu.name}
        >
          <h3 className="text-xl">{cpu.name}</h3>
          <p>{cpu.price}</p>

          <Image
            className="mx-auto absolute bottom-0 left-0"
            src={cpu?.image}
            alt={cpu?.name}
            width={350}
            height={350}
          />
        </div>
      ))}
    </div>
  );
}

CpuPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
