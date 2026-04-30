import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/eyebrow';

export default function NotFound() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>404</Eyebrow>
          <h1 className="mt-4 text-[clamp(36px,5vw,56px)] tracking-[-0.025em] leading-[1.05] font-semibold">
            That page is missing.
          </h1>
          <p className="mt-4 text-[18px] text-ink-2">
            It moved, never existed, or was the wrong link. Try one of these
            instead.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/">Go home</Button>
            <Button href="/services" variant="secondary">
              Three services
            </Button>
            <Button href="/blog" variant="secondary">
              Blog
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
          <p className="mt-10 text-[14px] text-ink-3">
            Or{' '}
            <Link href="/contact" className="underline underline-offset-4">
              tell me what you were looking for
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
