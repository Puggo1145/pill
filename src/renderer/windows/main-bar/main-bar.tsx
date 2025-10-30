import { AudioLinesIcon, PlusIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

export const MainBar: React.FC = () => {
    return (
        <div className="dragable px-2 w-60 h-12 bg-linear-180 from-gray-200/30 to-gray-100/30 
        rounded-full border border-white/20 flex items-center justify-between gap-2">
            <section className="clickable flex items-center gap-x-2">
                <Button variant="ghost" className="rounded-full size-8">
                    <Logo />
                </Button>
                <Button className="rounded-full w-12 h-8">
                    <AudioLinesIcon />
                </Button>
            </section>
            <section className="clickable">
                <Button variant="ghost" className="size-8 rounded-full">
                    <ChevronRightIcon color="white" className="size-5" />
                </Button>
            </section>
        </div>
    );
};
