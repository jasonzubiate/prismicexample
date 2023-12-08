import { createClient } from "@/prismicio";
import Link from "next/link";
import Bounded from "@/components/Bounded";

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href="/">Imprint</Link>
        <p>©{new Date().getFullYear()} Spinnin Studio</p>
      </div>
    </Bounded>
  );
}

export default Footer;
