import MainLayout from "@/components/layouts/MainLayout";
import { useGetDataQuery } from "@/redux/api/api";
import Image from "next/image";
import React from "react";

export default function RamPage() {
  const { data } = useGetDataQuery();
  const rams = data?.data[0].data.ram;

  return (
    <div className="flex flex-wrap">
      {rams?.map((ram) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] h-[500px] m-5 p-5  relative"
          key={ram.name}
        >
          <h3 className="text-xl">{ram.name}</h3>
          <p>{ram.price}</p>

          <Image
            className="mx-auto absolute bottom-0 left-0"
            src={ram?.image}
            alt={ram?.image}
            width={350}
            height={350}
          />
        </div>
      ))}
    </div>
  );
}

RamPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
