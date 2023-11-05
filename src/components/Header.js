import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-base-100 text-white text-[15px]">
      <Link href={"/"}>
        <button>Logo</button>
      </Link>

      <div className="flex-1 hidden lg:block ">
        <Link className="ml-6" href={"/cpu"}>
          Processor
        </Link>

        <Link className="ml-6" href={"/motherboard"}>
          Motherboard
        </Link>

        <Link className="ml-6" href={"/ram"}>
          RAM
        </Link>

        <Link className="ml-6" href={"/powerSupply"}>
          Power Supply
        </Link>

        <Link className="ml-6" href={"/monitor"}>
          Monitor
        </Link>

        <Link className="ml-6" href={"/others"}>
          Others
        </Link>
      </div>

      <div className="flex-1 block lg:hidden">
        <details>
          <summary className="text-4xl" style={{ listStyle: "none" }}>
            ≡
          </summary>
          <ul className="p-2 bg-base-100">
            <li>
              <Link href={"/cpu"}>Processor</Link>
            </li>
            <li>
              <Link href={"/motherboard"}>Motherboard</Link>
            </li>
            <li>
              <Link href={"/ram"}>RAM</Link>
            </li>
            <li>
              <Link href={"/powerSupply"}>Power Supply</Link>
            </li>
            <li>
              <Link href={"/monitor"}>Monitor</Link>
            </li>
            <li>
              <Link href={"/others"}>Others</Link>
            </li>
          </ul>
        </details>
      </div>

      <div className="float-right">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href={"/pcBuilder"}>PC Build</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
