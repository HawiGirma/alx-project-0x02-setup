import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/posts", label: "Posts" },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-6 justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "hover:text-yellow-400",
              router.pathname === link.href && "text-yellow-400 font-semibold"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
