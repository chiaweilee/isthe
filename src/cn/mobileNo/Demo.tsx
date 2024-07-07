import type { DescriptionsProps } from 'antd';
import { Checkbox, Descriptions, Flex, Input, Typography } from 'antd';
import isMobileNo from 'iscorrect/cn/mobileNo';
import React, { useCallback, useEffect, useState } from 'react';

const { Link } = Typography;

const rnd = (): string => `${Math.floor(Math.random() * 10)}`;
const DefaultRules = ['loose', 'dataCard'];

export default function () {
  const [mobile, $mobile] = useState<string>('13333333333');
  const [result, $result] = useState<any>({});
  const [rules, $rules] = useState<string[]>(DefaultRules);

  useEffect(() => {
    const loose = rules.includes('loose');
    const dataCard = rules.includes('dataCard');
    const virtualOperator = rules.includes('virtualOperator');
    const satellite = rules.includes('satellite');
    const internetOfThings = rules.includes('internetOfThings');
    $result(
      isMobileNo(mobile, {
        loose,
        rules: {
          dataCard,
          virtualOperator,
          satellite,
          internetOfThings,
        },
      }),
    );
  }, [mobile]);

  const onMobileChange = useCallback((e: any) => $mobile(e.target.value), []);
  const onRulesChange = useCallback((checkedValues: string[]) => {
    $rules(checkedValues);
  }, []);

  const rndMobile = (prefix: string, CC = ''): void => {
    const result = [CC, prefix];
    for (let i = prefix.length; i < 11; ++i) {
      result.push(rnd());
    }
    $mobile(result.join(''));
  };

  const renderItem = (item: string | object) => {
    if (typeof item === 'string') return item;
    if (typeof item === 'boolean') return String(item);
    return Object.keys(item).map((key) => (
      <div key={key}>
        {key}: {(item as any)[key]}
      </div>
    ));
  };

  const items: DescriptionsProps['items'] = Object.keys(result).map((key) => ({
    key,
    label: key,
    children: renderItem(result[key]),
  }));

  const options = [
    { label: '宽松校验', value: 'loose' },
    { label: '校验“上网卡”', value: 'dataCard' },
    { label: '校验“虚拟运营商”', value: 'virtualOperator' },
    { label: '校验“卫星通信”', value: 'satellite' },
    { label: '校验“物联网”', value: 'internetOfThings' },
  ];

  return (
    <Flex vertical gap={8}>
      <Flex gap={8} align="center">
        <Input
          value={mobile}
          maxLength={20}
          onChange={onMobileChange}
          style={{ width: '300px' }}
          placeholder="Please input your mobile number"
        />
        <Checkbox.Group
          options={options}
          defaultValue={DefaultRules}
          onChange={onRulesChange}
        />
      </Flex>
      <Flex gap={8} align="center">
        <Link onClick={() => rndMobile('13')}>普通号码</Link>
        <Link onClick={() => rndMobile('13', '+86')}>+86</Link>
        <Link onClick={() => rndMobile('145')}>上网卡</Link>
        <Link onClick={() => rndMobile('1700')}>虚拟运营商</Link>
        <Link onClick={() => rndMobile('1349')}>卫星通信</Link>
        <Link onClick={() => rndMobile('140')}>物联网</Link>
        <Link onClick={() => rndMobile('142')}>不存在的号段</Link>
        <Link onClick={() => rndMobile('2')}>非法号码</Link>
      </Flex>
      <Descriptions bordered title="Result" items={items} />
    </Flex>
  );
}
