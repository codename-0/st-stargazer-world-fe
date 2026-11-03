"use client";

import Image from "next/image";
import { useState } from "react";
import { PLACEHOLDER_PROFILE } from "@/lib/constants";

type ProfileImageProps = {
  src?: string;
  alt: string;
  priority?: boolean;
  size?: number;
  resolution?: number;
};

export default function ProfileImage({
  src,
  alt,
  priority = true,
  size = 200,
  resolution = 128,
}: ProfileImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      src={failed || !src ? PLACEHOLDER_PROFILE : src}
      alt={alt}
      width={resolution}
      height={resolution}
      priority={priority}
      onError={() => setFailed(true)}
      className="rounded-circle object-fit-cover shadow"
      style={{ width: size, maxWidth: "100%", height: "auto", aspectRatio: "1 / 1" }}
    />
  );
}