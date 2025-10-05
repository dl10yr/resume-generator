import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Vite 7: keep config minimal; plugin API remains compatible for Remix 2.17
export default defineConfig(() => {
  return {
    plugins: [
      remix({
        ssr: false,
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          // Optionally enable upcoming Remix v3 features once stable
        },
      }),
      tsconfigPaths(),
    ],
    build: {
      target: "es2022",
    },
  };
});
