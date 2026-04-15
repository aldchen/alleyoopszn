import Link from "next/link";

const upcomingShows = [
  { date: "May 18, 2026", city: "Los Angeles, CA", venue: "The Echo", link: "#" },
  { date: "May 25, 2026", city: "San Diego, CA", venue: "Music Box", link: "#" },
  { date: "June 2, 2026", city: "Phoenix, AZ", venue: "Valley Bar", link: "#" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="ALLEYOOP logo"
            className="mx-auto w-[250px] sm:w-[350px] md:w-[420px]"
          />

          <p className="mt-4 text-white/70">
            Music • Tour • Merch • Collective
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="#release" className="rounded-full border px-5 py-2 hover:bg-white hover:text-black transition">
              Latest Release
            </Link>
            <Link href="#tour" className="rounded-full border px-5 py-2 hover:bg-white hover:text-black transition">
              Tour Dates
            </Link>
          </div>
        </div>
      </section>

      {/* RELEASE */}
      <section id="release" className="border-t border-white/10 px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">OUT NOW</h2>

        <div className="mt-10 flex flex-col items-center">
          
          {/* RELEASE COVER */}
          <img
            src="/release.png"
            alt="Latest release cover"
            className="w-[300px] rounded-xl shadow-lg"
          />

          <p className="mt-6 max-w-md text-white/70">
            The latest drop from the collective is out now. Tap below to stream it on Spotify.
          </p>

          <a
            href="https://open.spotify.com/album/3RbQBVqZDbFZQDuVxdKrU4"
            target="_blank"
            rel="noreferrer"
            className="mt-6 rounded-full border px-6 py-3 hover:bg-white hover:text-black transition"
          >
            Listen on Spotify
          </a>
        </div>
      </section>

      {/* TOUR */}
      <section id="tour" className="border-t border-white/10 px-6 py-20">
        <h2 className="text-center text-4xl font-semibold">TOUR</h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {upcomingShows.map((show) => (
            <div key={show.date} className="flex items-center justify-between rounded-xl border p-4">
              <div>
                <p className="text-sm text-white/50">{show.date}</p>
                <p>{show.city}</p>
                <p className="text-white/70">{show.venue}</p>
              </div>
              <Link
                href={show.link}
                className="rounded-full border px-4 py-2 hover:bg-white hover:text-black transition"
              >
                Tickets
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* MERCH */}
      <section className="border-t border-white/10 px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">MERCH</h2>
        <p className="mt-4 text-white/70">
          Shop the latest drops from ALLEYOOP.
        </p>

        <Link
          href="#"
          className="mt-6 inline-block rounded-full border px-6 py-3 hover:bg-white hover:text-black transition"
        >
          Shop Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <p className="text-sm text-white/50">© 2026 ALLEYOOP</p>
      </footer>

    </main>
  );
}