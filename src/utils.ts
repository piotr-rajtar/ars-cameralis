import { Member } from './typings';

export function maxMembersLength(...args: Array<Member[]>): number {
  let maxLength = args[0].length;
  for (const arg of args) {
    if (arg.length > maxLength) {
      maxLength = arg.length;
    }
  }
  return maxLength;
}
