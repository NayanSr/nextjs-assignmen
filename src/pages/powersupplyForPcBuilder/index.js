import { useGetDataQuery } from "@/redux/api/api";
import { addItem } from "@/redux/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function CpuForPcBuilder() {
  const { data } = useGetDataQuery();
  const powerSupplys = data?.data[0].data.powerSupply;
  console.log(powerSupplys);
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
      {powerSupplys?.map((powerSupply) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] m-5 p-5"
          key={powerSupply.name}
        >
          <Image
            className="mx-auto"
            src={powerSupply?.image}
            alt={powerSupply?.name}
            width={250}
            height={250}
          />
          <h3 className="text-xl">{powerSupply.name}</h3>
          <p>{powerSupply.price}</p>
          {/*//! ********** reduxStateManagement************ */}
          <button
            onClick={() => handleAddForPcBuild(powerSupply)}
            className="btn btn-primary mt-3"
          >
            Select this
          </button>
        </div>
      ))}
    </div>
  );
}
