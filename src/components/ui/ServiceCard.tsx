import { ArrowRight, Layers, Code2, Sparkles, TrendingUp } from 'lucide-react';
import { Service } from '@/types';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layers,
  Code2,
  Sparkles,
  TrendingUp,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Layers;

  return (
    <article className="group relative flex flex-col justify-between gap-8 rounded-2xl border border-stone-200 bg-stone-50 p-8 transition-all duration-300 hover:border-lime-400 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 transition-colors duration-300 group-hover:bg-lime-400">
          <Icon
            size={22}
            className="text-stone-600 transition-colors duration-300 group-hover:text-stone-950"
          />
        </span>
        <span className="text-xs font-bold tracking-[0.2em] text-stone-300 group-hover:text-stone-400">
          {service.index}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-stone-900">{service.title}</h3>
        <p className="text-sm leading-relaxed text-stone-500">{service.description}</p>
      </div>

      {/* Arrow indicator */}
      <div className="flex items-center gap-2 text-sm font-semibold text-stone-400 transition-all duration-300 group-hover:gap-3 group-hover:text-stone-900">
        <span>Learn more</span>
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      {/* Lime accent line at bottom */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-lime-400 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
