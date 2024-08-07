import isCNMobile from '.';

describe('isCNMobile', () => {
  test('should return false for non-string input', () => {
    const result = isCNMobile(1234567890);
    expect(result).toEqual({
      target: 1234567890,
      valid: false,
      msg: '输入必须是非空字符串',
    });
  });

  test('should return false for empty string input', () => {
    const result = isCNMobile('');
    expect(result).toEqual({
      target: '',
      valid: false,
      msg: '输入必须是非空字符串',
    });
  });

  test('should return false for string input with invalid country code', () => {
    const result = isCNMobile('+99912345678');
    expect(result).toEqual({
      target: '+99912345678',
      valid: false,
      msg: '国际区号不正确',
    });
  });

  test('should return false for string input with invalid length', () => {
    const result = isCNMobile('138');
    expect(result).toEqual({
      target: '138',
      valid: false,
      msg: '手机号码长度不正确',
    });
  });

  test('should return false for string input with invalid', () => {
    const result = isCNMobile('+8623812345678');
    expect(result).toEqual({
      target: '+8623812345678',
      valid: false,
      msg: '手机号码不正确',
    });
  });

  test('should return false for string input with invalid MAC', () => {
    const result = isCNMobile('+8614212345678');
    expect(result).toEqual({
      target: '+8614212345678',
      valid: false,
      msg: '手机号段不存在',
    });
  });

  test('should return true for valid mobile no with common operator', () => {
    const result = isCNMobile('+8613812345678');
    expect(result).toEqual({
      target: '+8613812345678',
      valid: true,
      CC: '86',
      MAC: '138',
      operator: '中国移动',
      type: '普通卡',
      formatted: {
        international: '+8613812345678',
        local: '13812345678',
      },
      msg: '校验通过',
    });
  });

  test('should return true for valid mobile no with visual operator', () => {
    const result = isCNMobile('17012345678');
    expect(result).toEqual({
      target: '17012345678',
      valid: true,
      CC: '86',
      MAC: '1701',
      operator: '中国电信',
      type: '虚拟运营商',
      formatted: {
        international: '+8617012345678',
        local: '17012345678',
      },
      msg: '校验通过',
    });
  });

  test('should return true for dirty mobile no with loose mode', () => {
    const result = isCNMobile('170-1234-5678', { loose: true });
    expect(result).toEqual({
      target: '170-1234-5678',
      valid: true,
      CC: '86',
      MAC: '1701',
      operator: '中国电信',
      type: '虚拟运营商',
      formatted: {
        international: '+8617012345678',
        local: '17012345678',
      },
      msg: '校验通过',
    });
  });

  test('should return true for valid mobile no with satellite communication', () => {
    const result = isCNMobile('17412345678');
    expect(result).toEqual({
      target: '17412345678',
      valid: true,
      CC: '86',
      MAC: '174',
      operator: '中国电信（天通一号）',
      type: '卫星通信',
      formatted: {
        international: '+8617412345678',
        local: '17412345678',
      },
      msg: '校验通过',
    });
  });

  test('should return true for valid mobile no with internet of things', () => {
    const result = isCNMobile('14412345678');
    expect(result).toEqual({
      target: '14412345678',
      valid: true,
      CC: '86',
      MAC: '144',
      operator: '中国联通',
      type: '物联网',
      formatted: {
        international: '+8614412345678',
        local: '14412345678',
      },
      msg: '校验通过',
    });
  });

  test('should return true for valid mobile no with special rules', () => {
    const result = isCNMobile('14412345678', {
      rules: { internetOfThings: false },
    });
    expect(result).toEqual({
      target: '14412345678',
      valid: false,
      CC: '86',
      MAC: '144',
      operator: '中国联通',
      type: '物联网',
      formatted: {
        international: '+8614412345678',
        local: '14412345678',
      },
      msg: '未开启对该手机号段的校验规则',
    });
  });
});
