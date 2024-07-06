import { DEFAULT_ALLOW_LEADING_ZERO, DEFAULT_FORMATS } from './constant';
import { formatIPv4, getIPv4Format, isValidIPv4 } from './helper';
import { IPv4Formatted, IPv4Options, IPv4Result } from './index.d';

export default function isIPv4(
  ip: unknown,
  options: IPv4Options = {},
): IPv4Result {
  const { allowLeadingZero = DEFAULT_ALLOW_LEADING_ZERO } = options;
  const formats: any = { ...DEFAULT_FORMATS, ...(options?.formats || {}) };

  if (typeof ip !== 'string') {
    return {
      target: ip,
      valid: false,
      format: null,
      formatted: {},
    };
  }

  let valid = false;
  let format = null;
  let formatted: IPv4Formatted = {};

  if (isValidIPv4(ip)) {
    format = getIPv4Format(ip);
    valid = true;
  }

  if (valid) {
    formatted = {
      binary: formatIPv4(ip, 'binary'),
      decimal: formatIPv4(ip, 'decimal'),
      hex: formatIPv4(ip, 'hex'),
      hexadecimal: formatIPv4(ip, 'hexadecimal'),
      integer: formatIPv4(ip, 'integer'),
      octal: formatIPv4(ip, 'octal'),
    };
  }

  if (allowLeadingZero && formats['dot-octal'] === true) {
    console.warn(
      "If a IPv4 address has a leading '0', it will be interpreted as an octal number, e.g 10.0.0.011 will be interpreted as 10.0.0.9.",
    );
  }

  return {
    target: ip,
    valid: !!format && formats[format] === true,
    format,
    formatted,
  };
}
