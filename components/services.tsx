import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function Services() {
  return (
    <>
      <div className="container mt-16">
        <div className="h-px bg-primary"></div>
      </div>
      <section className="flex flex-col pt-8 pb-16 mb-16" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: "url('assets/services-background.png')"}}>
        <h3 className="text-center mb-12 font-caveat font-medium text-5xl text-[#421400]">Mes prestations</h3>

        <div className="container flex flex-col items-center justify-center gap-12 md:items-start md:flex-row">
          <Service title="Reliure" description="Embellir et préserver vos anciens livres brochés. Reliure sur mesure pour vos créations littéraires ou tout autre document écrit." />
          <Service title="Restauration" description="Conserver et restaurer vos anciens ouvrages et perpétuer leurs histoires. Reliure et gravure." />
          <Service title="Création" description="Réalisations variées dans l'univers du papier. Papeterie - Cartonnage - Encadrement." />
        </div>

        <Button asChild className="mx-auto mt-12 w-max">
          <Link href="/savoir-faire">
            En savoir +
          </Link>
        </Button>

        
      </section>
    </>
  )
}

function Service({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center w-full gap-4 md:w-1/3">
      <Icons.diamond className="w-12 h-12" />
      <h4 className="text-2xl font-coming font-bold text-center text-[#1a202c]">{title}</h4>
      <p className="text-center text-[#2d3748] text-lg font-bold font-bellota">{description}</p>
    </div>
  )
}