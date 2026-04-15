import Link from "next/link";

const upcomingShows = [
  { date: "May 18, 2026", city: "Los Angeles, CA", venue: "The Echo", link: "#" },
  { date: "May 25, 2026", city: "San Diego, CA", venue: "Music Box", link: "#" },
  { date: "June 2, 2026", city: "Phoenix, AZ", venue: "Valley Bar", link: "#" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 z-50 flex w-full justify-center gap-6 bg-black/70 py-4 backdrop-blur">
        <Link href="/music" className="text-sm text-white/70 hover:text-white">
          Music
        </Link>
        <Link href="/tour" className="text-sm text-white/70 hover:text-white">
          Tour
        </Link>
        <Link href="/merch" className="text-sm text-white/70 hover:text-white">
          Merch
        </Link>
        <Link href="/collective" className="text-sm text-white/70 hover:text-white">
          Collective
        </Link>
      </nav>

      <section className="flex min-h-screen items-center justify-center px-6 pt-20 text-center">
        <div>
          <img
            src="/logo.png"
            alt="ALLEYOOP logo"
            className="mx-auto w-[250px] sm:w-[350px] md:w-[420px]"
          />

          <p className="mt-4 text-white/70">Music • Tour • Merch • Collective</p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="#release"
              className="rounded-full border px-5 py-2 transition hover:bg-white hover:text-black"
            >
              Latest Release
            </Link>
            <Link
              href="#tour"
              className="rounded-full border px-5 py-2 transition hover:bg-white hover:text-black"
            >
              Tour Dates
            </Link>
          </div>
        </div>
      </section>

      <section id="release" className="border-t border-white/10 px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">OUT NOW</h2>

        <div className="mt-10 flex flex-col items-center">
          <img
            src="/release.png"
            alt="Latest release"
            className="w-[300px] rounded-xl shadow-lg"
          />

          <p className="mt-6 max-w-md text-white/70">
            The latest drop from the collective is out now.
          </p>

          <a
            href="https://open.spotify.com/album/3RbQBVqZDbFZQDuVxdKrU4"
            target="_blank"
            rel="noreferrer"
            className="mt-6 rounded-full border px-6 py-3 transition hover:bg-white hover:text-black"
          >
            Listen on Spotify
          </a>
        </div>
      </section>

      <section id="tour" className="border-t border-white/10 px-6 py-20">
        <h2 className="text-center text-4xl font-semibold">TOUR</h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {upcomingShows.map((show) => (
            <div
              key={show.date}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <div>
                <p className="text-sm text-white/50">{show.date}</p>
                <p>{show.city}</p>
                <p className="text-white/70">{show.venue}</p>
              </div>
              <Link
                href={show.link}
                className="rounded-full border px-4 py-2 transition hover:bg-white hover:text-black"
              >
                Tickets
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">MERCH</h2>
        <p className="mt-4 text-white/70">Shop the latest drops from ALLEYOOP.</p>

        <Link
          href="/merch"
          className="mt-6 inline-block rounded-full border px-6 py-3 transition hover:bg-white hover:text-black"
        >
          Shop Now
        </Link>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <p className="text-sm text-white/50">© 2026 ALLEYOOP</p>
      </footer>
    </main>
  );
}