import { useGetDataQuery } from "@/redux/api/api";
import { addItem, removeItem } from "@/redux/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function CpuForPcBuilder() {
  const { data } = useGetDataQuery();
  const monitors = data?.data[0].data.monitor;
  console.log(monitors);
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
      {monitors?.map((monitor) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] m-5 p-5"
          key={monitor.name}
        >
          <Image
            className="mx-auto"
            src={monitor?.image}
            alt={monitor?.name}
            width={250}
            height={250}
          />
          <h3 className="text-xl">{monitor.name}</h3>
          <p>{monitor.price}</p>
          {/*//! ********** reduxStateManagement************ */}
          <button
            onClick={() => handleAddForPcBuild(monitor)}
            className="btn btn-primary mt-3"
          >
            Select this
          </button>
        </div>
      ))}
    </div>
  );
}
