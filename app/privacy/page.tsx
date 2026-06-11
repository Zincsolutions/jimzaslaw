import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { site } from '@/lib/site';

const title = 'Privacy Policy';
const description =
  'What data this site collects, the tools it uses (Google Analytics, FullStory, Resend), why, and how to reach Jim about it.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy' },
  openGraph: {
    title,
    description,
    url: '/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Privacy</Eyebrow>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Privacy policy
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] text-ink-2 max-w-[60ch]">
              The short version: this site collects some analytics data to
              understand how it&apos;s used, and whatever you choose to share
              through the contact form. Nothing is sold, and nothing is used
              for anything other than running this site and responding to you.
            </p>
            <p className="mt-4 text-[14px] font-mono uppercase tracking-[0.06em] text-ink-3">
              Last updated: June 11, 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="max-w-3xl prose-jz">
            <h2>What this site collects</h2>
            <p>
              Two kinds of data: usage data collected automatically when you
              visit, and information you provide directly if you fill out the
              contact form.
            </p>

            <h2>Usage data</h2>
            <p>
              <strong>Google Analytics 4</strong> measures site traffic — which
              pages get visited, where visitors come from, what kind of device
              and browser they use, and roughly where in the world they are. IP
              addresses are anonymized before they&apos;re stored. This is used
              for one thing: understanding which content is useful so the site
              can get better.
            </p>
            <p>
              <strong>FullStory</strong> records how visitors interact with the
              site — clicks, scrolling, and navigation between pages. These
              session recordings are anonymous: the site doesn&apos;t tell
              FullStory who you are. Recordings are used to find confusing
              layouts and broken interactions, not to profile individual
              people.
            </p>
            <p>
              Both tools set cookies or similar identifiers in your browser to
              do their jobs. If you block them — with a content blocker or your
              browser&apos;s tracking protection — the site works exactly the
              same.
            </p>

            <h2>The contact form</h2>
            <p>
              If you request an assessment, the form asks for your name, email,
              company, and some context about your business: business type,
              company size, how your team currently uses AI, where you want
              help, your timeline, and anything you write in the message field.
              Role and website are optional.
            </p>
            <p>
              That submission is delivered as an email through{' '}
              <strong>Resend</strong>, an email delivery service, straight to
              Jim&apos;s inbox. It&apos;s used to respond to your request and
              prepare for the conversation — nothing else. Submitting the form
              doesn&apos;t add you to a mailing list, and your information
              isn&apos;t shared with anyone beyond the delivery service that
              carries the email.
            </p>
            <p>
              To limit spam, the form briefly checks the IP address a
              submission comes from. That check is transient — IP addresses
              from form submissions aren&apos;t kept in a database.
            </p>

            <h2>Who else touches the data</h2>
            <p>
              The three services named above — Google Analytics, FullStory, and
              Resend — process data on this site&apos;s behalf, under their own
              privacy and security terms. No data collected here is sold,
              rented, or handed to advertisers.
            </p>

            <h2>How long it&apos;s kept</h2>
            <p>
              Analytics and session-recording data is retained on the default
              schedules of those tools, then deleted. Contact form emails are
              kept as long as they&apos;re relevant to an actual or potential
              engagement.
            </p>

            <h2>Your data, your call</h2>
            <p>
              Want to know what data exists about you, have it corrected, or
              have it deleted? Email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> and it will be
              handled directly — no forms, no runaround.
            </p>

            <h2>Changes</h2>
            <p>
              If the tools or practices described here change, this page will
              be updated and the date at the top revised. No silent edits to
              the substance.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
