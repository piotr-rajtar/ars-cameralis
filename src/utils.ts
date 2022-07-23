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

export function isEmailValid(email: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}
