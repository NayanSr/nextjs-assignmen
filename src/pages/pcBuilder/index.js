import MainLayout from "@/components/layouts/MainLayout";
import { removeItem } from "@/redux/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PcBuilder() {
  /*//! ********** reduxStatemanagement************ */
  const { pcComponents } = useSelector((state) => state.pc);
  // console.log(pcComponents);

  // !
  let total = 0;
  pcComponents?.forEach((item) => {
    total = total + parseInt(item.price);
  });

  const dispatch = useDispatch();
  const handleRemoveFromPcBuild = (item) => {
    dispatch(removeItem(item));
  };

  const processorExist = pcComponents?.find(
    (product) => product.catagory === "processor"
  );
  // console.log(processorExist);

  const motherboardExist = pcComponents?.find(
    (product) => product.catagory === "motherboard"
  );
  console.log(motherboardExist);

  const ramExist = pcComponents?.find((product) => product.catagory === "ram");
  const powerSupplyExist = pcComponents?.find(
    (product) => product.catagory === "powerSupply"
  );
  const monitorExist = pcComponents?.find(
    (product) => product.catagory === "monitor"
  );
  const othersExist = pcComponents?.find(
    (product) => product.catagory === "others"
  );

  return (
    <div className="w-[800px] border mx-auto  border-amber-500">
      {/*//? 01. Processor */}
      <div className="flex ">
        <div className="pr-6 w-[100px]">
          <h3>Processor</h3>
        </div>
        <div className="flex-grow">
          {processorExist && (
            <div>
              <div className="flex ">
                <div className="mx-6 flex-grow">
                  <h4>{processorExist?.name}</h4>
                  <p>Price: {processorExist?.price}</p>
                </div>
                <Image
                  src={processorExist?.image}
                  alt={processorExist?.name}
                  width={60}
                  height={60}
                ></Image>
              </div>
            </div>
          )}
        </div>
        <div className="w-[150px] flex">
          {processorExist ? (
            <button
              className="mx-auto"
              onClick={() => handleRemoveFromPcBuild(processorExist)}
            >
              X
            </button>
          ) : (
            <Link href={"/cpuForPcBuilder"}>Click to select</Link>
          )}
        </div>
      </div>

      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />

      {/*//? 02 motherboard */}
      <div className="flex">
        <div className="pr-6 w-[100px]">
          <h3>Motherbord</h3>
        </div>
        <div className="flex-grow">
          {motherboardExist && (
            <div>
              <div className="flex">
                <div className="mx-6 flex-grow">
                  <h4>{motherboardExist?.name}</h4>
                  <p>Price: {motherboardExist?.price}</p>
                </div>
                <Image
                  src={motherboardExist?.image}
                  alt="motherBoardimage"
                  width={60}
                  height={60}
                ></Image>
              </div>
            </div>
          )}
        </div>
        <div className="w-[150px] flex">
          {motherboardExist ? (
            <button
              className="mx-auto"
              onClick={() => handleRemoveFromPcBuild(motherboardExist)}
            >
              X
            </button>
          ) : (
            <Link href={"/motherboardForPcBuilder"}>Click to select</Link>
          )}
        </div>
      </div>

      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />

      {/*//? 03. Ram */}
      <div className="flex ">
        <div className="pr-6 w-[100px]">
          <h3>RAM</h3>
        </div>
        <div className="flex-grow">
          {ramExist && (
            <div>
              <div className="flex ">
                <div className="mx-6 flex-grow">
                  <h4>{ramExist?.name}</h4>
                  <p>Price: {ramExist?.price}</p>
                </div>
                <Image
                  src={ramExist?.image}
                  alt={ramExist?.name}
                  width={60}
                  height={60}
                ></Image>
              </div>
            </div>
          )}
        </div>
        <div className="w-[150px] flex">
          {ramExist ? (
            <button
              className="mx-auto"
              onClick={() => handleRemoveFromPcBuild(ramExist)}
            >
              X
            </button>
          ) : (
            <Link href={"/ramForPcBuilder"}>Click to select</Link>
          )}
        </div>
      </div>

      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />

      {/*//? 04. Power Supply */}
      <div className="flex">
        <div className="pr-6 w-[100px]">
          <h3>Power Supply</h3>
        </div>
        <div className="flex-grow">
          {powerSupplyExist && (
            <div>
              <div className="flex">
                <div className="mx-6 flex-grow">
                  <h4>{powerSupplyExist?.name}</h4>
                  <p>Price: {powerSupplyExist?.price}</p>
                </div>
                <Image
                  src={powerSupplyExist?.image}
                  alt="power supply image"
                  width={60}
                  height={60}
                ></Image>
              </div>
            </div>
          )}
        </div>
        <div className="w-[150px] flex">
          {powerSupplyExist ? (
            <button
              className="mx-auto"
              onClick={() => handleRemoveFromPcBuild(powerSupplyExist)}
            >
              X
            </button>
          ) : (
            <Link href={"/powersupplyForPcBuilder"}>Click to select</Link>
          )}
        </div>
      </div>
      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />

      {/*//? 05. monitor */}

      <div className="flex">
        <div className="pr-6 w-[100px]">
          <h3>Monitor</h3>
        </div>
        <div className="flex-grow">
          {monitorExist && (
            <div>
              <div className="flex">
                <div className="mx-6 flex-grow">
                  <h4>{monitorExist?.name}</h4>
                  <p>Price: {monitorExist?.price}</p>
                </div>
                <Image
                  src={monitorExist?.image}
                  alt="power supply image"
                  width={60}
                  height={60}
                ></Image>
              </div>
            </div>
          )}
        </div>
        <div className="w-[150px] flex">
          {monitorExist ? (
            <button
              className="mx-auto"
              onClick={() => handleRemoveFromPcBuild(monitorExist)}
            >
              X
            </button>
          ) : (
            <Link href={"/monitorForpcBuilder"}>Click to select</Link>
          )}
        </div>
      </div>
      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />

      {/*//? 06. others */}

      <div className="flex ">
        <div className="pr-6 w-[100px]">
          <h3>Others</h3>
        </div>
        <div className="flex-grow">
          {othersExist && (
            <div>
              <div className="flex ">
                <div className="mx-6 flex-grow">
                  <h4>{othersExist?.name}</h4>
                  <p>Price: {othersExist?.price}</p>
                </div>
                <Image
                  src={othersExist?.image}
                  alt={othersExist?.name}
                  width={60}
                  height={60}
                ></Image>
              </div>
            </div>
          )}
        </div>
        <div className="w-[150px] flex">
          {othersExist ? (
            <button
              className="mx-auto"
              onClick={() => handleRemoveFromPcBuild(othersExist)}
            >
              X
            </button>
          ) : (
            <Link href={"/othersForPcBuilder"}>Click to select</Link>
          )}
        </div>
      </div>

      {/*//! 07. others */}

      <div className="flex ">
        <div className="pr-6 w-[120px]">
          <h3 className="text-xl font-bold">Total</h3>
        </div>
        <div className="flex-grow">
          <h4 className="text-xl font-bold ">$ {total}</h4>
        </div>
        <div className="w-[150px] flex"></div>
      </div>
    </div>
  );
}

PcBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

/* 
{pcComponents.map((compo) => (
            <div className="flex" key={compo.id}>
              <div className="mx-6">
                <h4>{compo.name}</h4>
                <p>Price: {compo.price}</p>
              </div>
              <Image
                src={compo.image}
                alt={compo?.name}
                width={60}
                height={60}
              ></Image>
            </div>
          ))}
*/
