import { useGetDataQuery } from "@/redux/api/api";
import { addItem } from "@/redux/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function RamForPcBuilder() {
  const { data } = useGetDataQuery();
  const rams = data?.data[0].data.ram;
  // console.log(rams);
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
      {rams?.map((ram) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] m-5 p-5"
          key={ram.name}
        >
          <Image
            className="mx-auto"
            src={ram?.image}
            alt={ram?.image}
            width={250}
            height={250}
          />
          <h3 className="text-xl">{ram.name}</h3>
          <p>{ram.price}</p>
          {/*//! ********** reduxStateManagement************ */}
          <button
            onClick={() => handleAddForPcBuild(ram)}
            className="btn btn-primary mt-3"
          >
            Select this
          </button>
        </div>
      ))}
    </div>
  );
}
