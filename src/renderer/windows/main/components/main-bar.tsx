import { AudioLinesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

export const MainBar: React.FC = () => {
    return (
        <div className="dragable px-2 w-60 h-12 bg-linear-180 from-gray-200/30 to-gray-100/30 
        rounded-full border border-white/20 flex items-center justify-between gap-2
        shadow-[inset_1px_0_2px_rgba(255,255,255,0.3)]">
            <Button className="clickable rounded-full w-12 h-8">
                <AudioLinesIcon />
            </Button>
            <Button variant="ghost" className="clickable rounded-full size-8">
                <Logo />
            </Button>
        </div>
    );
};
