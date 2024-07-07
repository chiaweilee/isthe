export const ChinaTelecom = '中国电信';
export const ChinaUnicom = '中国联通';
export const ChinaMobile = '中国移动';
export const ChinaBroadnet = '中国广电';
export const ChinaSatelliteCommunications = '中国卫通';
export const Tiantong1 = '中国电信（天通一号）';

export const DataCard = 'dataCard';
export const VirtualOperator = 'virtualOperator';
export const Satellite = 'satellite';
export const InternetOfThings = 'internetOfThings';
export const specialTypesName: any = {
  [DataCard]: '上网卡',
  [VirtualOperator]: '虚拟运营商',
  [Satellite]: '卫星通信',
  [InternetOfThings]: '物联网',
};

export const MDN = {
  CC: '86',
  MAC: {
    common: {
      '133': ChinaTelecom,
      '153': ChinaTelecom,
      '173': ChinaTelecom,
      '177': ChinaTelecom,
      '180': ChinaTelecom,
      '181': ChinaTelecom,
      '189': ChinaTelecom,
      '190': ChinaTelecom,
      '191': ChinaTelecom,
      '193': ChinaTelecom,
      '199': ChinaTelecom,
      '130': ChinaUnicom,
      '131': ChinaUnicom,
      '132': ChinaUnicom,
      '155': ChinaUnicom,
      '156': ChinaUnicom,
      '166': ChinaUnicom,
      '167': ChinaUnicom,
      '171': ChinaUnicom,
      '175': ChinaUnicom,
      '176': ChinaUnicom,
      '185': ChinaUnicom,
      '186': ChinaUnicom,
      '196': ChinaUnicom,
      '1340': ChinaMobile,
      '1341': ChinaMobile,
      '1342': ChinaMobile,
      '1343': ChinaMobile,
      '1344': ChinaMobile,
      '1345': ChinaMobile,
      '1346': ChinaMobile,
      '1347': ChinaMobile,
      '1348': ChinaMobile,
      '135': ChinaMobile,
      '136': ChinaMobile,
      '137': ChinaMobile,
      '138': ChinaMobile,
      '139': ChinaMobile,
      '1440': ChinaMobile,
      '148': ChinaMobile,
      '150': ChinaMobile,
      '151': ChinaMobile,
      '152': ChinaMobile,
      '157': ChinaMobile,
      '158': ChinaMobile,
      '159': ChinaMobile,
      '172': ChinaMobile,
      '178': ChinaMobile,
      '182': ChinaMobile,
      '183': ChinaMobile,
      '184': ChinaMobile,
      '187': ChinaMobile,
      '188': ChinaMobile,
      '1951': ChinaMobile,
      '197': ChinaMobile,
      '198': ChinaMobile,
      '192': ChinaBroadnet,
    },
    [DataCard]: {
      '145': ChinaUnicom,
      '147': ChinaMobile,
      '149': ChinaTelecom,
    },
    [VirtualOperator]: {
      '1700': ChinaTelecom,
      '1701': ChinaTelecom,
      '1702': ChinaTelecom,
      '1762': ChinaTelecom,
      '1703': ChinaMobile,
      '1705': ChinaMobile,
      '1706': ChinaMobile,
      '165': ChinaMobile,
      '1704': ChinaUnicom,
      '1707': ChinaUnicom,
      '1708': ChinaUnicom,
      '1709': ChinaUnicom,
      '171': ChinaUnicom,
      '167': ChinaUnicom,
    },
    [Satellite]: {
      '1349': ChinaSatelliteCommunications,
      '174': Tiantong1,
    },
    [InternetOfThings]: {
      '140': ChinaTelecom,
      '141': ChinaMobile,
      '148': ChinaMobile,
      '144': ChinaUnicom,
      '146': ChinaUnicom,
    },
  },
  length: 11,
};

export const DefaultOptions = {
  loose: false,
  rules: {
    [DataCard]: true,
    [VirtualOperator]: true,
    [Satellite]: true,
    [InternetOfThings]: true,
  },
};
