import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

async function Navbar() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <nav>
      <Link href="/">{settings.data.site_title}</Link>
      <ul>
        {settings.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
