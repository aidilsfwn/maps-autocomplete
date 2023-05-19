import React from 'react'
import { Row, Col, Typography, Space, List } from 'antd'
import { colors } from '../styles/colors'

const { Text } = Typography

const RecentCard = ({ list }) => {
  if (list.length > 0)
    return (
      <Row style={adStyles.recentContainer}>
        <Col span={24}>
          <Space direction='vertical' size={10} style={{ width: '100%' }}>
            <Text>Recent searches:</Text>
            <List
              style={{ backgroundColor: colors.white }}
              dataSource={list}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.structured_formatting.main_text} description={item.structured_formatting.secondary_text} />
                </List.Item>
              )}
            />
          </Space>
        </Col>
      </Row>
    )
}

const adStyles = {
  recentContainer: {
    backgroundColor: colors.white,
    padding: '2vh',
    margin: '2vh 5vw 1vh 5vw',
    borderRadius: 20,
    boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)',
  },
}

export { RecentCard }
