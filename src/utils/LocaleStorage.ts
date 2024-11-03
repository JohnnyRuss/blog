import { ModeT } from "styled-components";
import { BLOG_THEME_KEY, BLOG_PASSPORT_KEY } from "@/config/config";

class LocaleStorage {
  setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): string | Array<string> {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }

  // THEME //
  setTheme(mode: ModeT) {
    this.setValue(BLOG_THEME_KEY, mode);
  }

  getTheme(): ModeT | undefined {
    return this.getValue(BLOG_THEME_KEY) as ModeT;
  }

  // JWT //
  setJWT(jwt: string) {
    this.setValue(BLOG_PASSPORT_KEY, jwt);
  }

  getJWT() {
    return this.getValue(BLOG_PASSPORT_KEY) as string;
  }

  removeJWT() {
    this.removeValue(BLOG_PASSPORT_KEY);
  }
}

export default new LocaleStorage();
