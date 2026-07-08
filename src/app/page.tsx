import Image from "next/image";

const wordmarkPieces = [
  { id: "1-956", x: 0, y: 2.29, w: 56.58, h: 60.72 },
  { id: "1-957", x: 74.54, y: 2.29, w: 52.22, h: 60.72 },
  { id: "1-958", x: 146.14, y: 2.29, w: 57.86, h: 60.72 },
  { id: "1-959", x: 220.16, y: 2.29, w: 73.07, h: 60.72 },
  { id: "1-960", x: 292.88, y: 2.29, w: 55.43, h: 60.72 },
  { id: "1-961", x: 348.13, y: 2.29, w: 73.07, h: 60.72 },
  { id: "1-967", x: 466.02, y: 0, w: 65.07, h: 63.06 },
  { id: "1-962", x: 551.18, y: 2.29, w: 55.17, h: 60.72 },
  { id: "1-963", x: 623.13, y: 0.03, w: 70.11, h: 63.03 },
  { id: "1-964", x: 709.32, y: 0.01, w: 59.95, h: 63.07 },
  { id: "1-965", x: 785.25, y: 0.01, w: 59.95, h: 63.07 },
  { id: "1-966", x: 864.39, y: 2.29, w: 4.61, h: 60.72 },
] as const;

const subtitlePieces = [
  { id: "1-947", x: 0, y: 0.45, w: 19.75, h: 17.73 },
  { id: "1-948", x: 28.75, y: 0.45, w: 17.49, h: 17.73 },
  { id: "1-949", x: 53.43, y: 0.45, w: 18.9, h: 17.73 },
  { id: "1-950", x: 79.4, y: 0, w: 19.85, h: 18.62 },
  { id: "1-951", x: 108.36, y: 0, w: 18.41, h: 18.63 },
  { id: "1-952", x: 134.1, y: 0.45, w: 19.75, h: 17.73 },
  { id: "1-953", x: 160.85, y: 0, w: 18.41, h: 18.63 },
  { id: "1-954", x: 189.2, y: 0.45, w: 2.46, h: 17.73 },
  { id: "1-955", x: 200.67, y: 0.45, w: 19.75, h: 17.73 },
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
      unoptimized
      priority
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
            unoptimized
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
            className="relative mt-[clamp(3rem,5.4vw,3.6rem)] aspect-[869/63.08] w-full max-w-[869px]"
          >
            {wordmarkPieces.map((piece, index) => (
              <SvgLogoPiece
                key={piece.id}
                piece={piece}
                index={index}
                canvasWidth={869}
                canvasHeight={63.08}
              />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="relative mt-[clamp(1.3rem,3.1vw,2.1rem)] aspect-[220.42/18.63] w-[25.36%] max-w-[220px]"
          >
            {subtitlePieces.map((piece, index) => (
              <SvgLogoPiece
                key={piece.id}
                piece={piece}
                index={wordmarkPieces.length + index}
                canvasWidth={220.42}
                canvasHeight={18.63}
              />
            ))}
          </div>
        </div>

        <p className="font-gonya mt-[clamp(4rem,12vw,8rem)] text-center text-[clamp(1.2rem,5.4vw,2rem)] leading-none">
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
