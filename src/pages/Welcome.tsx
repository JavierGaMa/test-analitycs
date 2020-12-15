import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import TagManager from 'react-gtm-module'
import useGTM from '@elgorditosalsero/react-gtm-hook'
import styles from './Welcome.less';

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

// const dataLayer = [];

const tagManagerArgs = {
  gtmId: 'GTM-P33JT7W',
  dataLayer: {
      userId: '001',
      userProject: 'project',
      count: 0
  }
}

TagManager.initialize(tagManagerArgs)



export default (): React.ReactNode => {

  const { init, UseGTMHookProvider } = useGTM()

  const [count, setCount] = useState(0);


  useEffect(() => init({ id: 'GTM-P33JT7W' }), [])

  // useEffect(()=>{

  //   const temp = {...tagManagerArgs,
  //   dataLayer: {...tagManagerArgs.dataLayer,
  //     count
  //   }
  // };
  //   TagManager.dataLayer(temp)

  // },[count])

  const intl = useIntl();
  return (
    <UseGTMHookProvider >
    <PageContainer>
      <Button onClick={() => {
        setCount(state => state +1)
      }}>
        Press me
      </Button>

      <Button onClick={() => {
       
      }}>
        Press me 2
      </Button>

      {count}
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: '更快更强的重型组件，已经发布。',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="高级表格" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="高级布局" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>
    </PageContainer>
    </UseGTMHookProvider>
  );
};
