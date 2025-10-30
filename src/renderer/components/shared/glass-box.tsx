import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const GlassBox = ({ className, children }: ComponentProps<'div'>) => {
    return (
        <div className={cn(
            "bg-linear-0 from-gray-300/50 to-gray-300/40",
            "border border-white/20",
            "shadow-[inset_1px_0_2px_rgba(255,255,255,0.3)]",
            className
        )}>
            {children}
        </div>
    );
};
