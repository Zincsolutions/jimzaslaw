import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

// Curiosity sound bites: the questions a platform demo never answers.
const questions = [
  'What should an AI agent be allowed to change?',
  'Who approves higher-risk work?',
  'What’s the recovery plan if a change is wrong?',
];

export function WebsiteDecision() {
  return (
    <section id="website-decision" className="on-ink">
      <Container className="py-24 md:py-32">
        <div className="flex flex-col gap-6 max-w-3xl">
          <p className="eyebrow">AI-native websites and migration</p>
          <h2 className="text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
            Your next website decision is bigger than a redesign.
          </h2>
          <p className="text-[17px] md:text-[18px] leading-relaxed">
            AI-native websites change how sites get built and run. I help you
            decide what to keep, what to move, and how to stay in control,
            before anyone writes code.
          </p>
          <ul className="flex flex-col divide-y border-y">
            {questions.map((q) => (
              <li
                key={q}
                className="py-3.5 text-[17px] md:text-[18px] leading-snug !text-white"
              >
                {q}
              </li>
            ))}
          </ul>
          <p className="text-[17px] md:text-[18px] leading-relaxed">
            When you&apos;re ready, ZINC handles the move: AI website
            migration, with control built in.
          </p>
          <div className="mt-2 flex">
            <Button
              href="/services/ai-website-transition-strategy"
              size="lg"
              variant="primary-on-ink"
              withArrow
            >
              Explore Website Transition Strategy
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
