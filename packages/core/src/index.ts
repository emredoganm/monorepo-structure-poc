// It is just an example
interface Variables {
  theme: "dark" | "light";
  version: string;
  colors: Record<string, string>;
}

export const variables: Variables = {
  theme: "dark",
  version: "2.1.3",
  colors: { red: "#cc0000" },
};
