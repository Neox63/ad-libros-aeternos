import { siteConfig } from "@/config/site";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <>
      <footer className="flex flex-col px-8 pt-20 pb-4" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: "url('assets/footer-background.png')"}}>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center justify-center gap-8 md:justify-between md:flex-row">
              <ul className="flex flex-col gap-3 text-white w-[250px]">
                <li className="pb-px border-b border-tertiary"> 
                  <Link href="/politique-de-confidentialite">
                      Politique de confidentialité
                  </Link>
                </li>
                <li className="flex items-center pb-px border-b border-secondary"> 
                <PhoneIcon size={16} className="inline-block mr-2 text-tertiary" />
                
                  Tél : 07 62 19 87 90
                </li>
                <li className="flex items-center pb-px border-b border-secondary"> 
                  <MailIcon size={16} className="inline-block mr-2 text-tertiary" />
                  atelier@ad-libros-aeternos.fr
                </li>
              </ul>

              <div className="flex flex-col gap-3">
                <Image src="/assets/logo-artisan-transparent.png" alt="Logo" width={150} height={80} className="mx-auto" />
                <span className="text-sm text-center text-white">Siret : 911 908 028 00010</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-end gap-3 w-[250px]">
                <Link href={"/"} className="p-3 text-orange-900 duration-300 bg-yellow-600 rounded-full hover:-translate-y-2">
                  <FacebookIcon size={24} />
                </Link>

                <Link href={"/"} className="p-3 text-orange-900 duration-300 bg-yellow-600 rounded-full hover:-translate-y-2">
                  <InstagramIcon size={24} />
                </Link>

                <Link href={"/"} className="p-3 text-orange-900 duration-300 bg-yellow-600 rounded-full hover:-translate-y-2">
                  <MailIcon size={24} />
                </Link>
              </div>
            
            </div>
          </div>
      </footer>
      <div className="py-px text-[#2d3748] text-xs text-center bg-white">Copyright © {new Date().getFullYear()} - Ad Libros Æternos</div>
    </>
  )
}
