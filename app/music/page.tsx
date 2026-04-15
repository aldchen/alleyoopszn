import Link from "next/link";

const releases = [
  {
    title: "MOVE LIKE VET",
    year: "Latest Release",
    cover: "/release.png",
    url: "https://open.spotify.com/album/3RbQBVqZDbFZQDuVxdKrU4?si=4d04ed92f5914656",
  },
  {
    title: "DONT STOP",
    year: "2026",
    cover: "/release.png",
    url: "https://open.spotify.com/artist/44DWD55WLC7TQ3piYDdMiY?si=SBw0xqeoSWKMaszg-nlqKQ",
  },
  {
    title: "SCHWAG TALK",
    year: "2025",
    cover: "/release.png",
    url: "https://open.spotify.com/artist/44DWD55WLC7TQ3piYDdMiY?si=SBw0xqeoSWKMaszg-nlqKQ",
  },
  {
    title: "THE ONE THAT GOT AWAY",
    year: "2025",
    cover: "/release.png",
    url: "https://open.spotify.com/artist/44DWD55WLC7TQ3piYDdMiY?si=SBw0xqeoSWKMaszg-nlqKQ",
  },
  {
    title: "FLY N*GGA MUSIC",
    year: "2024",
    cover: "/release.png",
    url: "https://open.spotify.com/artist/44DWD55WLC7TQ3piYDdMiY?si=SBw0xqeoSWKMaszg-nlqKQ",
  },
];

export default function MusicPage() {
  return (
    <section className="px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">
            Artist
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Lil Tyh</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
            Full discography view with featured covers, ordered from the most
            recent release downward.
          </p>

          <div className="mt-6">
            <a
              href="https://open.spotify.com/artist/44DWD55WLC7TQ3piYDdMiY?si=SBw0xqeoSWKMaszg-nlqKQ"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-white px-5 py-3 text-sm transition hover:bg-white hover:text-black"
            >
              Open Artist on Spotify
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {releases.map((release) => (
            <a
              key={`${release.title}-${release.year}`}
              href={release.url}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-white/30"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  {release.year}
                </p>
                <h2 className="mt-2 text-xl font-medium">{release.title}</h2>
                <p className="mt-3 text-sm text-white/60">View on Spotify</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}