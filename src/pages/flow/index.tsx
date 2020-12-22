import { Col, Row } from 'antd';
import GGEditor, { Flow } from 'gg-editor';
import TagManager from 'react-gtm-module';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { formatMessage } from 'umi';
import EditorMinimap from './components/EditorMinimap';
import { FlowContextMenu } from './components/EditorContextMenu';
import { FlowDetailPanel } from './components/EditorDetailPanel';
import { FlowItemPanel } from './components/EditorItemPanel';
import { FlowToolbar } from './components/EditorToolbar';
import styles from './index.less';

GGEditor.setTrackable(false);

const tagManagerArgs = {
  gtmId: 'GTM-P33JT7W',
  dataLayer: {
    userId: '002',
  },
  dataLayerName: 'Flow',
};

TagManager.initialize(tagManagerArgs);

export default () => {
  return (
    <PageContainer
      content={formatMessage({
        id: 'flow.description',
        defaultMessage: '',
      })}
    >
      <GGEditor className={styles.editor}>
        <Row className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar />
          </Col>
        </Row>
        <Row className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Flow className={styles.flow} />
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <FlowContextMenu />
      </GGEditor>
    </PageContainer>
  );
};
