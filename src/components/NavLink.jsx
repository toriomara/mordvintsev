import Link from "next/link";
import { usePathname } from "next/navigation";
import { DrawerClose } from "./ui/drawer";

export const NavLink = ({ link }) => {
  const pathname = usePathname();
  return (
    <DrawerClose asChild>
      <Link
        className={`${
          // pathname.includes(link.path)
          pathname === link.path
            ? "text-red-500 text-lg"
            : "hover:text-red-300 text-lg"
        }`}
        href={link.path}
      >
        {link.title}
      </Link>
    </DrawerClose>
  );
};
