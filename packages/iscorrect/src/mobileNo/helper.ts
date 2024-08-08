import { MDN } from './constant';

export function cleanCC(mobileNo: string): string {
  return mobileNo.replace(/^\+86/, '');
}

export function cleanMobile(mobileNo: string): string {
  return mobileNo.replace(/\s+|-/g, '');
}

export function findMAC(
  mobileNo: string,
  type = 'common',
): { MAC: string; type: string; operator: string } | void {
  const MACs = (MDN.MAC as any)[type];
  for (const MAC in MACs) {
    if (mobileNo.startsWith(MAC)) {
      return {
        MAC,
        type,
        operator: MACs[MAC],
      };
    }
  }
}
