// imports
import Dropzone from '@/components/dropzone';
import React from 'react';

export default function Home() {
  return (
    <div className="pb-8 space-y-16">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl font-medium text-center md:text-5xl">
          Free Unlimited Media Files Converter
        </h1>
        <p className="text-center text-gray-400 text-md md:text-lg md:px-24 xl:px-44 2xl:px-52">
          Unleash your creativity with FreeConverter – the ultimate online tool for
          unlimited and free multimedia conversion. Transform images, audio, and
          videos effortlessly, without restrictions. Start converting now and
          elevate your content like never before!
        </p>
      </div>
      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
