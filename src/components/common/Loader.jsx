import React from "react";
import { Flex, Spin } from "antd";

export default function Loader({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className="loader">
          <p className="font-bold mb-5">Loading, Please wait..</p>
          <Spin size="large" />
        </div>
      ) : (
        ""
      )}
      ;
    </>
  );
}
