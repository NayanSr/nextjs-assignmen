import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

export default function PcBuilder() {
  return (
    <div className="w-2/3 border mx-auto  border-amber-500">
      <div className="flex">
        <div className="pr-6">
          <h3>Processor</h3>
        </div>
        <div className="flex-1">selected item</div>
        <div>Click to select</div>
      </div>
      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />
      <div>
        <h3>Motherboard</h3>
      </div>
      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />
      <div>
        <h3>RAM</h3>
      </div>
      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />
      <div>
        <h3>Power Supply</h3>
      </div>
      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />
      <div>
        <h3>Monitor</h3>
      </div>
      <hr
        style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
      />
      <div>
        <h3>Others</h3>
      </div>
    </div>
  );
}

PcBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
