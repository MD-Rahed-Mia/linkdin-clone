import React from "react";
import { LuPen, LuPencil } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

export default function PostEdit() {
  return (
    <div className="absolute top-3 right-3 flex items-center justify-center gap-2 text-xl">
      <LuPencil className="cursor-pointer" />
      <MdDeleteOutline className="cursor-pointer" />
    </div>
  );
}
