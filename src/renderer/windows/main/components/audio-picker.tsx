import { GlassBox } from "@/components/shared/glass-box";
import { useRecordingStore } from "../stores/use-recording-store";
import { cn } from "@/lib/utils";

export const AudioPicker: React.FC = () => {
    const { isRecording } = useRecordingStore();

    return (
        <GlassBox className={cn(
            "w-full overflow-hidden rounded-xl p-4",
            "flex items-center justify-center",
            "origin-top transition-all duration-300 ease-in-out",
            "absolute",
            isRecording
                ? "top-14 h-20 scale-100"
                : "top-10 h-0 px-4 scale-0 border-none"
        )}>
            <span className="text-white">
                Tell me what you are thinking? I'm Listening!
            </span>
        </GlassBox>
    );
};
