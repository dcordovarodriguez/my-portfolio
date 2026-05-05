import Link from "next/link";

import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";

const variantClasses = {
  primary:
    "bg-slate-950 text-white shadow-lg shadow-slate-950/15 hover:-translate-y-0.5 hover:bg-slate-800",
  secondary:
    "border border-sky-200 bg-white/85 text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white",
  ghost: "text-sky-700 hover:bg-sky-100/60",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: CTAButtonProps) {
  const finalClassName = cn(baseClassName, variantClasses[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={finalClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={finalClassName}>
      {children}
    </Link>
  );
}
