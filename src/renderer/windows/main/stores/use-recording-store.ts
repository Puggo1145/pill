import { create } from 'zustand';

type RecordingStore = {
    isRecording: boolean;
    startRecording: () => void;
    endRecoding: () => void;
}

export const useRecordingStore = create<RecordingStore>()((set) => ({
    isRecording: false,
    startRecording: () => set(() =>({ isRecording: true })),
    endRecoding: () => set({ isRecording: false }),
}));
