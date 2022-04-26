import { observable, autorun, action, makeObservable, computed } from 'mobx'

export class MobxSiblingPackageDemo {
  constructor() {
    makeObservable(this);
    autorun(() => {
      console.log(`Theme changed to: ${this.theme}`);
    });
  }

  @observable preferences: { theme: "normal" | "high-contrast" } | undefined;

  @action toggleTheme() {
    console.log("toggle theme @ MobxSiblingPackageDemo");
    this.preferences = {
      ...this.preferences,
      theme: this.theme === "normal" ? "high-contrast" : "normal",
    };
  }

  @computed get theme() {
    return this.preferences?.theme || "normal";
  }
}
