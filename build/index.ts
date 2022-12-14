/*
 * @Author: xd
 * @Date: 2022-12-13 13:59:48
 * @Description:
 */
/** handling environment variables */
const warpperEnv = (envConf: Recordable): ViteEnv => {
  /** this is the default value */
  const ret: ViteEnv = {
    VITE_PORT: 8848,
    VITE_PUBLIC_PATH: "",
    VITE_ROUTER_HISTORY: "",
    VITE_CDN: false,
    VITE_COMPRESSION: "none",
  };

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName =
      realName === "true" ? true : realName === "false" ? false : realName;
    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    ret[envName] = realName;
    if (typeof realName === "string") {
      process.env[envName] = realName;
    } else if (typeof realName === "object") {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return ret;
};

/** Getting environment Variables */
const loadEnv = (): ViteEnv => {
  return import.meta.env;
};

export { warpperEnv, loadEnv };
