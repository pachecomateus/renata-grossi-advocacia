import Image from "next/image";

const wordmarkPieces = [
  { id: "1-956", x: 0, y: 2.59, w: 77, h: 81 },
  { id: "1-957", x: 73.8, y: 2.59, w: 73, h: 81 },
  { id: "1-958", x: 145.74, y: 2.59, w: 78, h: 81 },
  { id: "1-959", x: 219.04, y: 2.59, w: 94, h: 81 },
  { id: "1-960", x: 291.37, y: 2.59, w: 76, h: 81 },
  { id: "1-961", x: 347.69, y: 2.59, w: 94, h: 81 },
  { id: "1-967", x: 465.44, y: 0.09, w: 86, h: 84 },
  { id: "1-962", x: 551.09, y: 2.59, w: 76, h: 81 },
  { id: "1-963", x: 623.15, y: 0, w: 91, h: 84 },
  { id: "1-964", x: 708.97, y: 0.09, w: 80, h: 84 },
  { id: "1-965", x: 784.62, y: 0.09, w: 80, h: 84 },
  { id: "1-966", x: 864.33, y: 2.59, w: 25, h: 81 },
] as const;

const subtitlePieces = [
  { id: "1-947", x: 0, y: 0.5, w: 32, h: 30 },
  { id: "1-948", x: 28.62, y: 0.5, w: 30, h: 30 },
  { id: "1-949", x: 53.5, y: 0.5, w: 31, h: 30 },
  { id: "1-950", x: 79.45, y: 0, w: 32, h: 31 },
  { id: "1-951", x: 108.19, y: 0, w: 31, h: 31 },
  { id: "1-952", x: 134.1, y: 0.5, w: 32, h: 30 },
  { id: "1-953", x: 160.68, y: 0, w: 31, h: 31 },
  { id: "1-954", x: 188.56, y: 0.5, w: 15, h: 30 },
  { id: "1-955", x: 199.74, y: 0.5, w: 32, h: 30 },
] as const;

function SvgLogoPiece({
  piece,
  index,
  canvasWidth,
  canvasHeight,
}: {
  piece: (typeof wordmarkPieces)[number] | (typeof subtitlePieces)[number];
  index: number;
  canvasWidth: number;
  canvasHeight: number;
}) {
  return (
    <Image
      src={`/figma/${piece.id}.svg`}
      alt=""
      aria-hidden="true"
      width={Math.ceil(piece.w)}
      height={Math.ceil(piece.h)}
      className="logo-reveal absolute select-none"
      style={{
        animationDelay: `${index * 0.06}s`,
        height: `${(piece.h / canvasHeight) * 100}%`,
        left: `${(piece.x / canvasWidth) * 100}%`,
        top: `${(piece.y / canvasHeight) * 100}%`,
        width: `${(piece.w / canvasWidth) * 100}%`,
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#21352f] text-[#fffaf2]">
      <section className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center px-6 py-14 sm:px-10">
        <h1 className="sr-only">Renata Grossi Advocacia</h1>

        <div className="flex w-full max-w-[870px] flex-col items-center text-[#edc188]">
          <Image
            src="/figma/1-968.svg"
            alt=""
            width={200}
            height={111}
            priority
            className="logo-reveal h-auto w-[clamp(7.75rem,14vw,12.5rem)] select-none"
            style={{
              animationDelay: `${
                (wordmarkPieces.length + subtitlePieces.length) * 0.06 + 0.24
              }s`,
            }}
          />

          <div
            aria-hidden="true"
            className="relative mt-[clamp(3rem,5.4vw,3.6rem)] aspect-[889.33/84.09] w-full max-w-[889px]"
          >
            {wordmarkPieces.map((piece, index) => (
              <SvgLogoPiece
                key={piece.id}
                piece={piece}
                index={index}
                canvasWidth={889.33}
                canvasHeight={84.09}
              />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="relative mt-[clamp(1.8rem,3.1vw,2.1rem)] aspect-[231.74/31] w-[min(48vw,190px)] sm:w-[min(60vw,232px)]"
          >
            {subtitlePieces.map((piece, index) => (
              <SvgLogoPiece
                key={piece.id}
                piece={piece}
                index={wordmarkPieces.length + index}
                canvasWidth={231.74}
                canvasHeight={31}
              />
            ))}
          </div>
        </div>

        <p className="font-gonya mt-[clamp(4rem,12vw,8rem)] text-center text-[clamp(1.45rem,6.4vw,2rem)] leading-none">
          <span className="font-extralight">Site em </span>
          <strong className="font-medium">construção</strong>
        </p>

        <a
          href="https://wa.me/5511992199549"
          target="_blank"
          rel="noopener noreferrer"
          className="font-elms mt-[clamp(2.75rem,8vh,6.75rem)] inline-flex min-h-16 w-full max-w-[238px] items-center justify-center rounded-full bg-[#edc188] px-6 text-center text-[clamp(1.125rem,5vw,1.5rem)] font-bold text-[#21352f] shadow-[0_0_18px_rgba(237,193,136,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5cfa0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fffaf2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#21352f] sm:min-h-20 sm:max-w-[278px] sm:px-8"
        >
          Entre em contato
        </a>
      </section>
    </main>
  );
}
