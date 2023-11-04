import { useRouter } from "next/router";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="w-full h-[50vh]">
      <p
        className="text-center pt-[150px]
       text-2xl"
      >
        😪Page Not Found😪
      </p>
    </div>
  );
}
