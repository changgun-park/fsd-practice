const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return process.env[key];
};

export const API_URL = getEnvVar("REACT_APP_API_URL");
export const NODE_ENV = getEnvVar("NODE_ENV");
export const isDev = NODE_ENV === "development";
export const isProd = NODE_ENV === "production";
