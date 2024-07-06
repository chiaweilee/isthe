import { BaseResult } from '../shared';

export type InvalidIPv4Formats = {
  decimal?: boolean;
  hex?: boolean;
  'dot-octal'?: boolean;
  'dot-mixed'?: boolean;
  hexadecimal?: boolean;
};

export type IPv4Formatted = {
  binary?: string;
  decimal?: string;
  hex?: string;
  'dot-octal'?: string;
  'dot-mixed'?: string;
  hexadecimal?: string;
  integer?: string;
  octal?: string;
};

export interface IPv4Result extends BaseResult {
  format?: keyof IPv4Formatted | 'mixed' | null;
  formatted?: IPv4Formatted;
}

export interface IPv4Options {
  allowLeadingZero?: boolean;
  formats?: InvalidIPv4Formats;
}
