
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

const cardVariants = cva(
  "rounded-lg border border-border p-6 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground", 
        accent: "bg-accent text-accent-foreground",
        outline: "bg-background border-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CardStatsProps extends VariantProps<typeof cardVariants> {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

export function CardStats({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant,
  className,
}: CardStatsProps) {
  return (
    <div className={cn(cardVariants({ variant }), className)}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium leading-none opacity-70">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
          {description && (
            <p className="mt-1 text-sm opacity-70">{description}</p>
          )}
          {trend && (
            <div className="mt-2 flex items-center gap-1">
              <span
                className={cn(
                  "text-sm font-medium",
                  trend.positive ? "text-emerald-500" : "text-rose-500"
                )}
              >
                {trend.positive ? "+" : "-"}
                {trend.value}%
              </span>
              <span className="text-xs opacity-70">vs. last month</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background/20">
            <Icon className="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
}
