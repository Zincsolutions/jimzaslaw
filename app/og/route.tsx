import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const OG_SIZE = { width: 1200, height: 630 };

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Turning AI usage into business advantage.';
  const eyebrow = searchParams.get('eyebrow') || 'Jim Zaslaw Consulting';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#FDFDFD',
          color: '#231F20',
          padding: '80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#6B6566',
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 84,
            lineHeight: 1.04,
            letterSpacing: -2,
            fontWeight: 500,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 999,
                background: '#231F20',
              }}
            />
            <div style={{ fontSize: 22, fontWeight: 500 }}>jimzaslaw.com</div>
          </div>
          <div style={{ fontSize: 18, color: '#6B6566' }}>
            A practice of ZINC
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
