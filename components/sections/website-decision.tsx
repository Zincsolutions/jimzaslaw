import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const questions = [
  'Is the current platform still the right fit?',
  'What should be preserved, improved, rebuilt, or retired?',
  'Which URLs, search signals, forms, analytics, and integrations cannot be disrupted?',
  'What should an AI agent be allowed to change?',
  'Who approves higher-risk work?',
  'What is the recovery plan if a change is wrong?',
  'Should the company improve in place, migrate as-is, migrate and improve, or redesign and migrate?',
];

export function WebsiteDecision() {
  return (
    <section id="website-decision" className="on-ink">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="eyebrow">AI-native websites and migration</p>
            <h2 className="text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
              Your next website decision is bigger than a redesign.
            </h2>
            <p className="text-[17px] md:text-[18px] leading-relaxed">
              For years, the main website question was what CMS to use. Now
              companies also need to decide whether an AI-native website fits,
              how AI agents will create and maintain pages, what people must
              review, and how the business keeps control.
            </p>
            <p className="text-[17px] md:text-[18px] leading-relaxed">
              The result is a decision and roadmap the business can act on. If
              you need execution, ZINC can carry the plan through design,
              development, AI website migration, integration, and launch.
            </p>
            <div className="mt-2 flex">
              <Button
                href="/services/ai-website-transition-strategy"
                size="lg"
                variant="primary-on-ink"
                withArrow
              >
                Explore AI Website Transition Strategy
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed">
              I help leadership teams answer the questions that come before
              implementation:
            </p>
            <ol className="mt-5 flex flex-col divide-y border-y">
              {questions.map((q, i) => (
                <li key={q} className="py-4 flex items-start gap-4">
                  <span
                    className="font-mono text-[12px] uppercase tracking-[0.06em] text-white/50 w-7 shrink-0 mt-1"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[16px] md:text-[17px] leading-relaxed !text-white">
                    {q}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
