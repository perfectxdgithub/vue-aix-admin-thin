/*
 * @Author: xd
 * @Date: 2022-12-13 14:20:09
 * @Description:
 */
import { cdn } from "./cnd";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { viteBuildInfo } from "./info";
import svgLoader from "vite-svg-loader";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
import { configCompressplugin } from "./compress";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import { visualizer } from "rollup-plugin-visualizer";
import removeConsole from "vite-plugin-remove-console";
import themePreprocessorPlugin from "@pureadmin/theme";
import DefineOptions from "unplugin-vue-define-options/vite";
import { genScssMultipleScopeVars } from "../src/layout/theme";

export function getPluginsList(
  command: string,
  VITE_CDN: boolean,
  VITE_COMPRESSION: ViteCompression
) {
  const prodMock = true;
  const lifecycle = process.env.npm_lifecycle_event;

  return [
    vue(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve("locales/**")],
    }),
    // jsx/tsx syntax support
    vueJsx(),
    VITE_CDN ? cdn : null,
    configCompressplugin(VITE_COMPRESSION),
    DefineOptions(),
    // Delete console from online environment
    removeConsole({ external: ["src/assets/iconfont/iconfont.js"] }),
    viteBuildInfo(),
    // custom theme
    themePreprocessorPlugin({
      scss: {
        multipleScopeVars: genScssMultipleScopeVars(),
        // Whether to extract a separate theme css file in production mode, extract to true the following properties are valid
        extract: true,
        // Select the topic css file corresponding to 'defaultScopeName' to add a link to the html
        themeLintTagId: "head",
        // "head"||"head-prepend" || "body" ||"body-prepend"
        themeLinkTagInjectTo: "head",
        // Whether to remove the 'scopename' weight class name from the extracted css file
        removeCssScopeName: false,
      },
    }),
    // svg componentization support
    svgLoader(),
    // mock support
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
      prodEnabled: command !== "serve" && prodMock,
      injectCode: `
            import { setupProdMockserver } from './mockProdServer';
            setupProdMockserver()
          `,
    }),
  ];
}
