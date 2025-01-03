import { useState } from "react";

import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

const Navbar = () => {
  return (
    <>
      <Image
        aria-hidden
        src="/window.svg"
        alt="Window icon"
        width={50}
        height={50}
      />
      // Budgets
      <a>Budget</a>
      // Income
      <a>Income</a>
      // Expenses
      <a>Expenses</a>
    </>
  );
};
