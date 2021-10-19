import esbuild from "esbuild";
import sassPlugin from "esbuild-plugin-sass-modules";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

esbuild.build({
  entryPoints: ["index.tsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  metafile: true, // needs to be set
  outdir: "build/next", // needs to be set
  inject: ["./src/react-shim.js"],
  tsconfig: "tsconfig.esbuild.json",
  plugins: [
    sassPlugin(),
    htmlPlugin({
      files: [
        {
          entryPoints: ["index.tsx"],
          filename: "index.html",
          htmlTemplate: `<!DOCTYPE html><html lang="en">
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Viktor Dzundza personal website" />
        <title>Viktor Dzundza</title>
        <link href="/out.css" rel="stylesheet" />
        </head>
        <body>
          <script>const theme = localStorage.getItem("theme"); theme || localStorage.setItem("theme", "dark"), document.body.className = theme + "-theme"</script>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
          <script src="/index.js"></script>
        </body>
        </html>`,
        },
      ],
    }),
  ],
});
