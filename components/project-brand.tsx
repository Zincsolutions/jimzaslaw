import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { Project } from '@/lib/projects';

// Brand panel for one of Jim's AI projects: the product's own ground
// color, logo, and accent rule. `size="sm"` is the About-page tile.
export function ProjectBrand({
  project,
  size = 'lg',
  className,
}: {
  project: Project;
  size?: 'lg' | 'sm';
  className?: string;
}) {
  const lg = size === 'lg';
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-xl',
        lg ? 'aspect-[4/3]' : 'aspect-[16/9]',
        className,
      )}
      style={{ backgroundColor: project.brand.bg }}
      aria-hidden
    >
      {project.slug === 'discoverart' ? (
        <Image
          src="/projects/discoverart-mark.png"
          alt=""
          width={256}
          height={256}
          className={lg ? 'w-28 md:w-36' : 'w-16'}
        />
      ) : null}
      {project.slug === 'predictant' ? (
        <Image
          src="/projects/predictant-wordmark.png"
          alt=""
          width={563}
          height={114}
          className={cn('invert', lg ? 'w-52 md:w-64' : 'w-32')}
        />
      ) : null}
      {project.slug === 'garagewire' ? (
        <div className={cn('flex items-center', lg ? 'gap-4' : 'gap-2.5')}>
          <Image
            src="/projects/garagewire-mark.png"
            alt=""
            width={256}
            height={256}
            className={lg ? 'w-16 md:w-20' : 'w-9'}
          />
          <span
            className={cn(
              'font-bold uppercase tracking-[0.04em] text-white',
              lg ? 'text-[28px] md:text-[34px]' : 'text-[17px]',
            )}
          >
            GarageWire
          </span>
        </div>
      ) : null}
      <span
        className="absolute inset-x-0 bottom-0 h-1"
        style={{ backgroundColor: project.brand.accent }}
      />
    </div>
  );
}
