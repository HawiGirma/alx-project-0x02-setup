import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="p-6 space-x-4">
        <Button size="small" shape="rounded-sm">
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full">
          Large Button
        </Button>
      </div>
    </div>
  );
}
