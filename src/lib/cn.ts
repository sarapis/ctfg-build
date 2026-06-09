// cn.ts — tiny className combiner. Swap for `clsx` + `tailwind-merge` if you prefer.
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
