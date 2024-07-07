## 安装

```bash
npm install iscorrect
```

## 使用

```js
import isMobileNo from 'iscorrect/cn/mobile';
isMobileNo('13333333333'); // { valid: true }
```

## 在线演示

```jsx
/**
 * inline: true
 */
import Demo from 'iscorrect/cn/mobileNo/Demo';
export default () => <Demo />;
```

## 使用案例

### 宽松校验

支持空格和`-`符号

```js
import isMobileNo from 'iscorrect/cn/mobile';

const {
  valid,
  formatted: { local },
} = isMobileNo('133-3333-3333');

console.log(valid); // true
console.log(local); // '13333333333'
```

### 数据清洗

在校验的同时进行数据清洗

```js
import isMobileNo from 'iscorrect/cn/mobile';

function validateAndClean(mobileNo) {
  const { valid, formatted } = isMobileNo(mobileNo;
  if (valid) return formatted.local;
}

validateAndClean('133-3333-3333'); // '13333333333'
```

### 指定校验号段规则

注：默认支持所有号段

| 规则             | 号段       | 默认值 |
| ---------------- | ---------- | ------ |
| dataCard         | 上网卡     | true   |
| virtualOperator  | 虚拟运营商 | true   |
| satellite        | 卫星通信   | true   |
| internetOfThings | 物联网     | true   |

```js
import isMobileNo from 'iscorrect/cn/mobile';

isMobileNo('14000000000', {
  rules: {
    dataCard: true,
    virtualOperator: true,
    satellite: true,
    internetOfThings: true,
  },
});
```

## 号段规则

- 中国电信号段 133、149、153、173、177、180、181、189、190、191、193、199
- 中国联通号段 130、131、132、145、155、156、166、167、171、175、176、185、186、196
- 中国移动号段 134(0-8)、135、136、137、138、139、1440、147、148、150、151、152、157、158、159、172、178、182、183、184、187、188、195 [1]、197、198
- 中国广电号段 192
- 其他号段
  - 14 号段部分为上网卡专属号段：中国联通 145，中国移动 147，中国电信 149.
  - 虚拟运营商：
    - 电信：1700、1701、1702、162
    - 移动：1703、1705、1706、165
      - 联通：1704、1707、1708、1709、171、167
  - 卫星通信：1349、174
  - 物联网：140、141、144、146、148
