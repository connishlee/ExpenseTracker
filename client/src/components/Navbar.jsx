import { useState } from "react";

import Image from "next/image";

const Navbar = () => {
  return (
    <Image
      aria-hidden
      src="/window.svg"
      alt="Window icon"
      width={50}
      height={50}
    />
  );
};
