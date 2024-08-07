---
title: mobileNo
---

```tsx
/**
 * inline: true
 */
import type { DescriptionsProps } from 'antd';
import { Checkbox, Descriptions, Flex, Input, Typography } from 'antd';
import isMobileNo from 'iscorrect/cn/mobileNo';
import React, { useCallback, useEffect, useState } from 'react';

const { Title, Link } = Typography;

const rnd = (): string => `${Math.floor(Math.random() * 10)}`;
const DefaultRules = [
  'loose',
  'dataCard',
  'virtualOperator',
  'satellite',
  'internetOfThings',
];

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
    <>
      <Title level={3}>中国手机号码验证</Title>
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
        <Descriptions bordered items={items} />
      </Flex>
    </>
  );
}
```

## 使用方法

```js
import isMobileNo from 'iscorrect/cn/mobileNo';
isMobileNo('13333333333'); // { valid: true }
```

## 更多用法

### 宽松校验

宽松校验模式下，允许使用“空格”和“-”分隔符。

```js
import isMobileNo from 'iscorrect/cn/mobileNo';
isMobileNo('133-3333-3333'); // { valid: true }
```

### 数据清洗

在校验的同时进行数据清洗

```js
import isMobileNo from 'iscorrect/cn/mobileNo';

function validateAndClean(mobileNo) {
  const { valid, formatted } = isMobileNo(mobileNo;
  if (valid) return formatted.local;
}

validateAndClean('133-3333-3333'); // '13333333333'
```

### 校验特定号段

默认会校验所有号段，你可以通过参数调整校验范围

```js
import isMobileNo from 'iscorrect/cn/mobileNo';

isMobileNo('14000000000', {
  rules: {
    dataCard: true, // 是否校验“上网卡”号段
    virtualOperator: true, // 是否校验“虚拟运营商”号段
    satellite: true, // 是否校验“卫星通信”号段
    internetOfThings: true, // 是否校验“物联网”号段
  },
});
```

## API

#### 入参

| 参数     | 说明     | 类型            | 必填 | 默认值 |
| -------- | -------- | --------------- | ---- | ------ |
| mobileNo | 手机号吗 | string          | 是   |        |
| options  | 校验选项 | MobileNoOptions | 否   | `{}`   |

##### MobileNoOptions

| 参数  | 说明         | 类型   | 必填 | 默认值                                                                      |
| ----- | ------------ | ------ | ---- | --------------------------------------------------------------------------- |
| loose | 宽松校验     | string | 否   | `false`                                                                     |
| rules | 号段校验规则 | object | 否   | `{dataCard:true,virtualOperator:true,satellite:true,internetOfThings:true}` |

#### 出参

| 参数      | 说明           | 类型                                | 必定返回 |
| --------- | -------------- | ----------------------------------- | -------- |
| target    | 校验对象值     | string                              | 是       |
| valid     | 校验结果       | boolean                             | 是       |
| msg       | 校验结果信息   | string                              | 是       |
| CC        | 国家码         | `'86'`                              | 否       |
| MAC       | 手机号段       | string                              | 否       |
| operator  | 运营商名称     | string                              | 否       |
| type      | 号段类型       | string                              | 否       |
| formatted | 号码格式化结果 | {international:string,local:string} | 否       |

## 号段规则

中国电信：133、149、153、173、177、180、181、189、190、191、193、199<br/>
中国联通：130、131、132、145、155、156、166、167、171、175、176、185、186、196<br/>
中国移动：134(0-8)、135、136、137、138、139、1440、147、148、150、151、152、157、158、159、172、178、182、183、184、187、188、195、197、198<br/>
中国广电：192<br/>
上网卡专属号段：中国联通 145，中国移动 147，中国电信 149<br/>
虚拟运营商：电信：1700、1701、1702、162；移动：1703、1705、1706、165；联通：1704、1707、1708、1709、171、167<br/>
卫星通信：1349（“全球星”卫星移动电话）、174（中国电信代理运营天通一号卫星通信）<br/>
物联网：140、141、144、146、148
