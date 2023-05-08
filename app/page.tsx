import NavLink from "./NavLink";
import {
  getBookCalendarNoteLink,
  getVisitCalendarNoteLink,
} from "./calendarNote";

export default function Home() {
  const visitCalendarNoteLink = getVisitCalendarNoteLink();
  const bookCalendarNoteLink = getBookCalendarNoteLink();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Valmistaudu seuraavaan&nbsp;
          <span className="font-mono font-bold">verenluovutukseen</span>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="relative overflow-hidden h-80 w-96 pb-56.25%">
          <iframe
            src="https://www.veripalvelu.fi/veritilanne/barometri/"
            scrolling="no"
            allow="all"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <NavLink
          title="Lisää ensi kerta kalenteriin"
          href={visitCalendarNoteLink}
          external
        >
          Lisää seuraava luovutusaika kalenteriin
        </NavLink>

        <NavLink
          title="Lisää varausmuistutus kalenteriin"
          href={bookCalendarNoteLink}
          external
        >
          Lisää muistutus terveyskyselystä ja ajanvarauksesta
        </NavLink>

        <NavLink
          title="Luovutuslaskuri"
          href="https://www.veripalvelu.fi/verenluovutus/luovutuslaskuri"
          external
        >
          Tarkista seuraava mahdollinen luovutusajankohta
        </NavLink>
      </div>
    </main>
  );
}
