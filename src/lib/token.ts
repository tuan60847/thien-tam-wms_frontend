import Cookies from "js-cookie";
import { TOKEN_KEY } from "./constants";

export const tokenStorage = {
  get: () => Cookies.get(TOKEN_KEY),
  set: (t: string) => Cookies.set(TOKEN_KEY, t, { expires: 1, sameSite: "strict" }),
  clear: () => Cookies.remove(TOKEN_KEY),
};