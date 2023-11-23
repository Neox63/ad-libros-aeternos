import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return <>
    <header className="container flex flex-col bg-stone-300">
      <div className="py-8 mb-8 border-b border-primary">
        <Image src="/assets/logo.png" alt="Logo" width={300} height={135} className="mx-auto" />
      </div>
      <div className="flex items-center justify-center gap-8 text-sm md:text-xl">
        {siteConfig.mainNav.map((item) => (
          <Link href={item.href} key={item.title} className="pb-2 border-2 border-transparent text-primary font-coming hover:text-secondary hover:border-b-secondary">
            {item.title}
          </Link>
        ))}
      </div>
    </header>
    <Image src="/assets/header-banner.png" alt="Separator" height={230} width={1000} className="w-full h-auto mt-2 mb-8" sizes="100vw" />
    
    {/* Border bottom header */}
    <div className="container">
      <div className="h-px bg-primary"></div>
    </div>
  </>
}
