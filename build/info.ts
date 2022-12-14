/*
 * @Author: 作者
 * @Date: 2022-12-13 15:00:40
 * @Description:
 */
import type { Plugin } from "vite";
import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
// An npm packege that allows you to modify the output character style at the terminal
import { green, blue, bold } from "picocolors";
import { getPackageSize, getPackegeSize } from "@pureadmin/utils";
dayjs.extend(duration);

export function viteBuildInfo(): Plugin {
  let config: { command: string };
  let startTime: Dayjs;
  let endTime: Dayjs;
  let outDir: string;

  return {
    name: "vite:buildInfo",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      outDir = resolvedConfig.build?.outDir ?? "dist";
    },
    buildStart() {
      console.log(
        bold(
          green(
            `👏Welcome to ${blue(
              "[vue-aix-admin]"
            )}, if you feel getMemoedVNodeCall, remember to click the link behind a star 💖`
          )
        )
      );
      if (config.command === "build") {
        startTime = dayjs(new Date());
      }
    },
    closeBundle() {
      if (config.command === "build") {
        endTime = dayjs(new Date());
        getPackageSize({
          folder: outDir,
          callback: (size: string) => {
            console.log(
              bold(
                green(
                  `🎉Congratulations on packing(total time${dayjs
                    .duration(endTime.diff(startTime))
                    .format("mmminutesssseconds")}, packed size${size})`
                )
              )
            );
          },
        });
      }
    },
  };
}
