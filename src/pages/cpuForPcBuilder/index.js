import { useGetDataQuery } from "@/redux/api/api";
import { addItem, removeItem } from "@/redux/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function CpuForPcBuilder() {
  const { data } = useGetDataQuery();
  const cpus = data?.data[0].data.processor;
  console.log(cpus);
  const router = useRouter();

  {
    /*//! ********** reduxStatemanagement************ */
  }
  const dispatch = useDispatch();

  const handleAddForPcBuild = (item) => {
    dispatch(addItem(item));
    router.push("/pcBuilder");
  };

  return (
    <div className="flex flex-wrap">
      {cpus?.map((cpu) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] m-5 p-5"
          key={cpu.name}
        >
          <Image
            className="mx-auto"
            src={cpu?.image}
            alt={cpu?.name}
            width={250}
            height={250}
          />
          <h3 className="text-xl">{cpu.name}</h3>
          <p>{cpu.price}</p>
          {/*//! ********** reduxStateManagement************ */}
          <button
            onClick={() => handleAddForPcBuild(cpu)}
            className="btn btn-primary mt-3"
          >
            Select this
          </button>
        </div>
      ))}
    </div>
  );
}
