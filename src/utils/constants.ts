export const ENVIRONMENTS = ["DEV", "STAGING", "PROD"] as const;

export type Environment = typeof ENVIRONMENTS[number];

