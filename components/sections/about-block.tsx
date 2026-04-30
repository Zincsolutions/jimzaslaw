import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';

export function AboutBlock() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border max-w-md">
              <Image
                src="/jz-headshot-v2.png"
                alt="Jim Zaslaw, Founder of Jim Zaslaw Consulting and CEO of ZINC"
                fill
                priority={false}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Eyebrow>About</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
              Twenty years of execution, applied to AI specifically.
            </h2>
            <p className="text-[18px] leading-relaxed text-ink-2">
              Jim Zaslaw is the CEO of ZINC, a digital agency he has led for
              over two decades, helping hundreds of businesses design, build,
              and scale digital systems across branding, marketing, and
              technology.
            </p>
            <p className="text-[18px] leading-relaxed text-ink-2">
              That track record is the difference. Most people calling
              themselves &ldquo;AI consultants&rdquo; today have been doing this
              work for eighteen months. Jim has spent twenty years translating
              new technology into operating systems that businesses actually run
              on — websites, brands, e-commerce platforms, marketing engines,
              internal tools.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Image
                src="/logos/jim-mark.svg"
                alt=""
                width={48}
                height={48}
                className="size-12"
              />
              <div>
                <p className="text-[15px] font-medium text-ink">Jim Zaslaw</p>
                <p className="text-[13px] text-ink-3">
                  Founder, Jim Zaslaw Consulting · CEO, ZINC
                </p>
              </div>
              <Link
                href="/about"
                className="ml-auto inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:gap-2 transition-all"
              >
                More about Jim
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
