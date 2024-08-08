import { isIPv4 } from '..';

describe('isIPv4', () => {
  it('should return valid decimal IP', () => {
    const result = isIPv4('192.0.2.235');
    expect(result).toEqual({
      target: '192.0.2.235',
      valid: true,
      format: 'decimal',
      formatted: {
        binary: '11000000000000000000001011101011',
        decimal: '192.0.2.235',
        hex: '0xc0.0x00.0x02.0xeb',
        octal: '0300.0000.0002.0353',
        hexadecimal: '0xc00002eb',
        integer: '3221226219',
        octal: '030000001353',
      },
    });
  });

  it('should return valid hex IP', () => {
    const result = isIPv4('0xc0.0x00.0x02.0xeb');
    expect(result).toEqual({
      target: '0xc0.0x00.0x02.0xeb',
      valid: true,
      format: 'hex',
      formatted: {
        binary: '11000000000000000000001011101011',
        decimal: '192.0.2.235',
        hex: '0xc0.0x00.0x02.0xeb',
        octal: '0300.0000.0002.0353',
        hexadecimal: '0xc00002eb',
        integer: '3221226219',
        octal: '030000001353',
      },
    });
  });

  it('should return valid hex IP when not allowed', () => {
    const result = isIPv4('0xc0.0x00.0x02.0xeb', {
      formats: { hex: false },
    });
    expect(result).toEqual({
      target: '0xc0.0x00.0x02.0xeb',
      valid: false,
      format: 'hex',
      formatted: {
        binary: '11000000000000000000001011101011',
        decimal: '192.0.2.235',
        hex: '0xc0.0x00.0x02.0xeb',
        octal: '0300.0000.0002.0353',
        hexadecimal: '0xc00002eb',
        integer: '3221226219',
        octal: '030000001353',
      },
    });
  });

  it('should return valid octal IP', () => {
    const result = isIPv4('0300.0000.0002.0353');
    expect(result).toEqual({
      target: '0300.0000.0002.0353',
      valid: true,
      format: 'dot-octal',
      formatted: {
        binary: '11000000000000000000001011101011',
        decimal: '192.0.2.235',
        hex: '0xc0.0x00.0x02.0xeb',
        octal: '0300.0000.0002.0353',
        hexadecimal: '0xc00002eb',
        integer: '3221226219',
        octal: '030000001353',
      },
    });
  });

  it('should return valid octal IP when not allowed', () => {
    const result = isIPv4('0300.0000.0002.0353', {
      formats: { 'dot-octal': false },
    });
    expect(result).toEqual({
      target: '0300.0000.0002.0353',
      valid: false,
      format: 'dot-octal',
      formatted: {
        binary: '11000000000000000000001011101011',
        decimal: '192.0.2.235',
        hex: '0xc0.0x00.0x02.0xeb',
        octal: '0300.0000.0002.0353',
        hexadecimal: '0xc00002eb',
        integer: '3221226219',
        octal: '030000001353',
      },
    });
  });

  it('should return invalid IP with wrong number of parts', () => {
    const result = isIPv4('192.168.1');
    expect(result).toEqual({
      target: '192.168.1',
      valid: false,
      format: null,
      formatted: {},
    });
  });
});
