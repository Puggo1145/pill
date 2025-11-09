import { ChatOpenAI } from "@langchain/openai";
import { useEnv } from "@agent/lib/use-env";

const OPENAI_API_KEY = useEnv("OPENAI_API_KEY");

export function useGPT5Mini(configuration?: ChatOpenAI["clientConfig"]) {
    return new ChatOpenAI({
        model: "gpt-5-mini",
        apiKey: OPENAI_API_KEY,
        configuration,
    })
}

export function useGPT5Nano(configuration?: ChatOpenAI["clientConfig"]) {
    return new ChatOpenAI({
        model: "gpt-5-nano",
        apiKey: OPENAI_API_KEY,
        configuration,
    })
}
