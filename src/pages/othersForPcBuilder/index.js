import { useGetDataQuery } from "@/redux/api/api";
import { addItem, removeItem } from "@/redux/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function CpuForPcBuilder() {
  const { data } = useGetDataQuery();
  const others = data?.data[0].data.others;
  console.log(others);
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
      {others?.map((item) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] m-5 p-5"
          key={item.name}
        >
          <Image
            className="mx-auto"
            src={item?.image}
            alt={item?.name}
            width={250}
            height={250}
          />
          <h3 className="text-xl">{item.name}</h3>
          <p>{item.price}</p>
          {/*//! ********** reduxStateManagement************ */}
          <button
            onClick={() => handleAddForPcBuild(item)}
            className="btn btn-primary mt-3"
          >
            Select this
          </button>
        </div>
      ))}
    </div>
  );
}
