'use client'
import { FC } from "react";
import LanguageSwitch from "./LanguageSwitch";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from "next/link";
import { useDeviceStore } from "@/stores/deviceStore";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const { isMobile } = useDeviceStore();
  return (
    <div className="bg-background flex justify-between items-center sticky top-0 z-10 border-b-[1px] p-2">
      <div className="flex justify-center items-center space-x-2">
        <Link
          href={"/"}
          className="hover:scale-105 ring-1 ring-primary p-1 rounded-full bg-primary text-white"
        >
          <RiArrowGoBackFill className="text-xl " />
        </Link>
        {!isMobile && <h1>{title}</h1>}
      </div>

      <div>
        <LanguageSwitch />
      </div>
    </div>
  );
};

export default Header;
