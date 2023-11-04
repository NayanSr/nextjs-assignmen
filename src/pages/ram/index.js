import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

export default function RamPage() {
  return (
    <div>
      {" "}
      <p>All RAMs</p>
    </div>
  );
}

RamPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
