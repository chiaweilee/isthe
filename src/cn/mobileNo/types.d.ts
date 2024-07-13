import { BaseOptions, BaseResult } from '../../shared';

export interface MobileNoOptions extends BaseOptions {
  loose?: boolean;
  rules?: {
    [key: string]: boolean;
  };
}

export interface MobileNoResult extends BaseResult {
  CC?: '86';
  MAC?: string;
  operator?: string;
  type?: string;
  formatted?: {
    international: string;
    local: string;
  }
}
