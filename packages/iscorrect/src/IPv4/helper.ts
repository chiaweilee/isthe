import { IPv4Formatted } from './types';

function getPartFormat(part: string): keyof IPv4Formatted {
  if (/^0[xX][\da-fA-F]{2}/.test(part)) return 'hex';
  if (/^0[0-7]{3}$/.test(part) && parseInt(part, 8) <= 255) return 'dot-octal';
  return 'decimal';
}

function parsePart(part: string): number {
  switch (getPartFormat(part)) {
    case 'hex':
      return parseInt(part, 16);
    case 'dot-octal':
      return parseInt(part, 8);
    case 'decimal':
    default:
      return parseInt(part, 10);
  }
}

export function isValidIPv4(ip: string): boolean {
  const parts = ip.split('.');
  if (parts.length !== 4) return false;
  for (let i = 0; i < 4; i++) {
    const num = parsePart(parts[i]);
    if (isNaN(num) || num < 0 || num > 255) return false;
  }
  return true;
}

export function getIPv4Format(ip: string): keyof IPv4Formatted | 'mixed' {
  const parts = ip.split('.');
  const format = getPartFormat(parts[0]);
  for (let i = 1; i < 4; ++i) {
    if (format !== getPartFormat(parts[i])) return 'mixed';
  }
  return format;
}

export function formatIPv4(ip: string, format: keyof IPv4Formatted): string {
  if (ip.includes('.')) {
    if (format === 'integer')
      return parseInt(formatIPv4(ip, 'binary'), 2).toString(10);
    if (format === 'octal')
      return parseInt(formatIPv4(ip, 'binary'), 2).toString(8).padStart(12, '0');
    const parts = ip.split('.');
    switch (format) {
      case 'binary':
        return parts
          .map(parsePart)
          .map((int) => int.toString(2).padStart(8, '0'))
          .join('');
      case 'hex':
        return parts
          .map(parsePart)
          .map((int) => '0x'.concat(int.toString(16).padStart(2, '0')))
          .join('.');
      case 'hexadecimal':
        return '0x'.concat(
          parts
            .map(parsePart)
            .map((int) => int.toString(16).padStart(2, '0'))
            .join(''),
        );
      case 'dot-octal':
        return parts
          .map(parsePart)
          .map((int) => int.toString(8).padStart(4, '0'))
          .join('.');
      case 'decimal':
      default:
        return parts
          .map(parsePart)
          .map((int) => int.toString())
          .join('.');
    }
  }
  return '';
}
