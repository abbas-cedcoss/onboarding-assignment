import { Col, Image, Row, Typography } from 'antd'
import React from 'react';
import checked from '../../../assets/images/checked.png';
const { Title, Text } = Typography;

function Stepfour() {
  return (
    <React.Fragment>
      <Row justify='center' align='middle'>
        <Row justify='center' align='middle'>
          <Col>
            <Image preview={false} src={checked} />
          </Col>
        </Row>
        <Row justify='center' align='middle'>
          <Col span={24}>
            <Title level={2}><b>Congratulations, Eren</b></Title>
            <Text type='secondary'>You have completed onboarding, you can start using Eden!</Text>
          </Col>
        </Row>
      </Row><br />
    </React.Fragment>
  )
}

export default Stepfour