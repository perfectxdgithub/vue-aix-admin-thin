/*
 * @Author: x
 * @Date: 2022-12-14 13:43:09
 * @Description:
 */
import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

const modules: Record<string, any> = import.meta.glob("../mock/*.ts", {
  eager: true,
});
const mockModules = [];

Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default);
});
export function setupProdMockserver() {
  createProdMockServer(mockModules);
}
