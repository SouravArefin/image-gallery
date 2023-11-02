
"use client"


import Image from "next/image";
import React from "react";

const ImageUpload = ({ handleFileUpload }) => {
  return (
    <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors ease-linear">
      <input
        type="file"
        multiple
        name="images"
        id="images"
        className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
        title="Try to upload photos..."
        onChange={handleFileUpload}
      />
      <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
        <Image
          src="/assets/upload.jpg"
          alt="placeholder"
          height={20}
          width={20}
          priority
        />
        <span className="whitespace-nowrap">Add Image</span>
      </div>
    </div>
  );
};

export default ImageUpload;