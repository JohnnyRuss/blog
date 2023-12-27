import { ModeT } from "styled-components";
import { BLOG_THEME_KEY } from "@/config/config";

class LocaleStorage {
  setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): string {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }

  setTheme(mode: ModeT) {
    this.setValue(BLOG_THEME_KEY, mode);
  }

  getTheme(): ModeT | undefined {
    return this.getValue(BLOG_THEME_KEY) as ModeT;
  }
}

export default new LocaleStorage();
