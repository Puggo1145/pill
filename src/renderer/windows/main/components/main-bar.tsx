import { cn } from "@/lib/utils";
import { AudioLinesIcon, DiscIcon } from "lucide-react";
import { GlassBox } from "@/components/shared/glass-box";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { useRecordingStore } from "../stores/use-recording-store";

export const MainBar: React.FC = () => {
    const { isRecording, startRecording, endRecoding } = useRecordingStore();

    const runAgent = () => {
        window.api.mouse.runAgent()
    }

    return (
        <GlassBox className={cn("dragable w-full h-12 px-2 pt-[7px] flex justify-between rounded-3xl")}>
            <Button
                className={cn(
                    "clickable rounded-full w-12 h-8",
                    isRecording ? "bg-red-500!" : "",
                )}
                onClick={isRecording ? endRecoding : startRecording}
            >
                {
                    isRecording
                        ? <DiscIcon className="text-white" />
                        : <AudioLinesIcon />
                }
            </Button>
            <Button 
                variant="ghost" 
                className="clickable rounded-full size-8"
                onClick={runAgent}
            >
                <Logo />
            </Button>
        </GlassBox>
    );
};
