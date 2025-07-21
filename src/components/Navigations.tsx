import { TNavigation } from "@/types/data";
import { FC } from "react";
import Link from "next/link";

interface NavigationsProps {
  navigations: TNavigation[];
}

const Navigations: FC<NavigationsProps> = ({ navigations }) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {navigations.map((item) => (
        <Link
          key={item.name}
          className="flex flex-col justify-center items-center p-1 hover:text-primary"
          href={item.route}
        >
          {item.name}
          <item.icon className="text-8xl " />
        </Link>
      ))}
    </div>
  );
};

export default Navigations;
