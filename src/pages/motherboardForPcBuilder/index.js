import { useGetDataQuery } from "@/redux/api/api";
import { addItem, removeItem } from "@/redux/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function MotherboardForPcBuilder() {
  const { data } = useGetDataQuery();
  const motherboards = data?.data[0].data.motherboard;
  console.log(motherboards);
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
      {motherboards?.map((motherboard) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] m-5 p-5"
          key={motherboard.name}
        >
          <Image
            className="mx-auto"
            src={motherboard?.image}
            alt={motherboard?.name}
            width={250}
            height={250}
          />
          <h3 className="text-xl">{motherboard.name}</h3>
          <p>{motherboard.price}</p>
          {/*//! ********** reduxStateManagement************ */}
          <button
            onClick={() => handleAddForPcBuild(motherboard)}
            className="btn btn-primary mt-3"
          >
            Select this
          </button>
        </div>
      ))}
    </div>
  );
}
