import MainLayout from "@/components/layouts/MainLayout";
import { useGetDataQuery } from "@/redux/api/api";
import Image from "next/image";

export default function PowerSupply() {
  const { data } = useGetDataQuery();
  const powerSupplys = data?.powerSupply;
  return (
    <div className="flex flex-wrap">
      {powerSupplys?.map((item) => (
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

PowerSupply.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
