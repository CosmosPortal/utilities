import { defineConfig } from 'tsup';

export default defineConfig({
    format: ["cjs", "esm"],
    entry: ["./src/index.ts"],
    dts: true,
    minify: true,
    target: "esnext",
    bundle: true,
    sourcemap: true,
    keepNames: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    ignoreWatch: ["**/node_modules/**"]
});