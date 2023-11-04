import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-base-100 text-white text-[15px]">
      <Link href={"/"}>
        <button>Logo</button>
      </Link>
      <div className="flex-1 hidden lg:block ">
        <Link className="ml-6" href={"/ram"}>
          RAM
        </Link>
        <Link className="ml-6" href={"/cpu"}>
          CPU
        </Link>
      </div>
      <div className="flex-1 block lg:hidden">
        <details>
          <summary className="text-4xl" style={{ listStyle: "none" }}>
            ≡
          </summary>
          <ul className="p-2 bg-base-100">
            <li>
              <Link href={"/cpu"}>CPU</Link>
            </li>
            <li>
              <Link href={"/ram"}>RAM</Link>
            </li>
          </ul>
        </details>
      </div>
      <div className="float-right">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
