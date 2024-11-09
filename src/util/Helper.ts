import { prefix } from '#app/util/other/PrefixHelper.js';

export async function greet(name: string) {
  return `${prefix()}, ${name}!`;
}