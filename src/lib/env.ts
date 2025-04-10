export const getEnv = () => {
  const required = ["NEXT_PUBLIC_API_URL", "NEXT_PUBLIC_ENVIRONMENT"];

  required.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required env variable: ${key}`);
    }
  });

  return {
    apiUrl: process.env.NEXT_PUBLIC_API_URL!,
    env: process.env.NEXT_PUBLIC_ENVIRONMENT!,
  };
};