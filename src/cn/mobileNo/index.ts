import { DefaultOptions, MDN, specialTypesName } from './constant';
import { cleanCC, cleanMobile, findMAC } from './helper';
import { MobileNoOptions, MobileNoResult } from './index.d';
import DefaultLocale from './locale';

export default function isCNMobile(
  mobileNo: unknown,
  options: MobileNoOptions = {},
): MobileNoResult {
  const { loose, rules } = {
    ...DefaultOptions,
    ...options,
    rules: { ...DefaultOptions.rules, ...(options.rules || {}) },
  } as MobileNoOptions;
  const locale = { ...DefaultLocale, ...(options.locale || {}) };

  if (typeof mobileNo !== 'string' || !mobileNo.trim()) {
    return {
      target: mobileNo,
      valid: false,
      msg: locale['non-string'],
    };
  }

  if (mobileNo.startsWith('+') && !mobileNo.startsWith(`+${MDN.CC}`)) {
    return {
      target: mobileNo,
      valid: false,
      msg: locale['invalid-cc'],
    };
  }

  const localNumber =
    loose === true ? cleanMobile(cleanCC(mobileNo)) : cleanCC(mobileNo);

  if (localNumber.length !== MDN.length) {
    return {
      target: mobileNo,
      valid: false,
      msg: locale['invalid-length'],
    };
  }

  if (!localNumber.startsWith('1')) {
    return {
      target: mobileNo,
      valid: false,
      msg: locale['invalid'],
    };
  }

  for (const target of Object.keys(MDN.MAC)) {
    const result = findMAC(localNumber, target);
    if (result) {
      const { MAC, operator, type } = result;
      const allowed = type === 'common' || rules?.[type] === true;
      return {
        target: mobileNo,
        valid: allowed,
        CC: '86',
        MAC,
        operator,
        type: specialTypesName[type] || '普通卡',
        formatted: {
          international: `+86${localNumber}`,
          local: localNumber,
        },
        msg: allowed ? locale['success'] : locale['non-allowed-mac'],
      };
    }
  }

  return {
    target: mobileNo,
    valid: false,
    msg: locale['invalid-mac'],
  };
}
