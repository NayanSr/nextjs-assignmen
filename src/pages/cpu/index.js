import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

export default function CpuPage() {
  return (
    <div>
      <p>All Cpus</p>
    </div>
  );
}

CpuPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
