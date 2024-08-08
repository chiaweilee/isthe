import { FC, memo, useMemo } from 'react';
import { ApiHeader as Header } from '../../components/ApiHeader';
import { apiHeaderSel, useSiteStore } from 'dumi-theme-antd-style/dist/store';
import NpmFilled from 'dumi-theme-antd-style/dist/slots/ApiHeader/NpmFilled';

const ApiHeader: FC = memo(() => {
  const props = useSiteStore(apiHeaderSel);
  const { pkg } = props;

  const packages = useMemo(
    () => [
      {
        label: 'NPM',
        icon: <NpmFilled />,
        children: 'NPM',
        url: `https://www.npmjs.com/package/${pkg}`,
      },
    ],
    [pkg],
  );

  return <Header serviceList={packages} {...props} />;
});

export default ApiHeader;
