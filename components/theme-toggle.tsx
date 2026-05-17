import { RiMoonLine, RiSunLine } from "@preact-icons/ri";

export function ThemeToggle() {
  return (
    <label class="swap swap-rotate">
      <input type="checkbox" class="theme-controller" value="dark" />
      <RiSunLine class="swap-off" />
      <RiMoonLine class="swap-on" />
    </label>
  );
}
