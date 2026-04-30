import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { clientLogos } from '@/lib/site';

export function LogoStrip() {
  // Duplicate the array so the marquee loops seamlessly.
  const sequence = [...clientLogos, ...clientLogos];
  return (
    <section
      aria-label="Trusted by leaders at"
      className="border-y border-border bg-bg-soft py-10 md:py-12"
    >
      <Container>
        <p className="eyebrow text-center mb-6">Trusted by leaders at</p>
      </Container>
      <div className="marquee-wrap marquee-mask overflow-hidden">
        <ul className="marquee-track gap-10 md:gap-14 px-4">
          {sequence.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              aria-hidden={i >= clientLogos.length}
              className="shrink-0 flex items-center justify-center w-[140px] h-12 md:w-[160px] md:h-14"
            >
              <Image
                src={logo.src}
                alt={i < clientLogos.length ? logo.name : ''}
                width={160}
                height={56}
                className="max-h-full max-w-full w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale"
              />
            </li>
          ))}
        </ul>
        {/* Screen-reader list of brands (rendered once, off-screen) */}
        <ul className="sr-only">
          {clientLogos.map((logo) => (
            <li key={logo.name}>{logo.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
