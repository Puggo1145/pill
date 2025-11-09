// Qwen3 VL Plus model provider
// OpenAI-compatible API

import { ChatOpenAI } from "@langchain/openai";
import { useEnv } from "@agent/lib/use-env";
import { QWEN_BASE_URL } from "@agent/constants/model-base-urls";

const QWEN_API_KEY = useEnv("QWEN_API_KEY");

export function useQwen3VLPlus(configuration?: ChatOpenAI["clientConfig"]) {
    return new ChatOpenAI({
        model: "qwen3-vl-plus",
        configuration: {
            ...configuration,
            baseURL: QWEN_BASE_URL,
            apiKey: QWEN_API_KEY,
        },
    })
}

export function useQwen3VLFlash(configuration?: ChatOpenAI["clientConfig"]) {
    return new ChatOpenAI({
        model: "qwen3-vl-flash",
        configuration: {
            ...configuration,
            baseURL: QWEN_BASE_URL,
            apiKey: QWEN_API_KEY,
        },
    })
}

export function useQwen3OmniFlash(configuration?: ChatOpenAI["clientConfig"]) {
    return new ChatOpenAI({
        model: "qwen3-omni-flash",
        configuration: {
            ...configuration,
            baseURL: QWEN_BASE_URL,
            apiKey: QWEN_API_KEY,
        },
        streaming: true,
    })
}
