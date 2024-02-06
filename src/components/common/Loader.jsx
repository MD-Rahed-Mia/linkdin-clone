import React from "react";
import { Flex, Spin } from "antd";

export default function Loader() {
  return (
    <div className="loader">
      <p className="font-bold mb-5">Loading, Please wait..</p>
      <Spin size="large" />;
    </div>
  );
}
