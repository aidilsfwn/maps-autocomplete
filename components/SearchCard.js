import React from 'react'
import { Row, Col, Input, Space, List, Image, Layout, Typography } from 'antd'
import _ from 'lodash'
import { colors } from '../styles/colors'

const { Text } = Typography

const SearchCard = ({ activePlaceDetails, onClickItem, searchInput, setSearchInput, searchResult }) => {
  const renderContent = () => {
    if (searchResult.length > 0)
      return (
        <List
          style={{ backgroundColor: colors.white }}
          dataSource={searchResult}
          bordered
          renderItem={(item) => (
            <List.Item onClick={() => onClickItem(item)}>
              <List.Item.Meta title={item.structured_formatting.main_text} description={item.structured_formatting.secondary_text} />
            </List.Item>
          )}
          footer={
            <Row style={{ justifyContent: 'flex-end' }}>
              <Image src={'/google_on_white.png'} height={'18px'} width={'59px'} />
            </Row>
          }
        />
      )
    else if (!_.isEmpty(activePlaceDetails))
      return (
        <Layout style={{ borderRadius: 10, padding: '1vh 0.8vw 1vh 0.8vw' }}>
          <Space direction='vertical' size={10}>
            <Text>Now showing:</Text>
            <Space direction='vertical' size={4}>
              <Text strong>{activePlaceDetails.name}</Text>
              <Text strong italic>
                {activePlaceDetails.address}
              </Text>
            </Space>
            <Row style={{ justifyContent: 'flex-end' }}>
              <Image src={'/google_on_white.png'} height={'18px'} width={'59px'} />
            </Row>
          </Space>
        </Layout>
      )
    else return null
  }

  return (
    <Row style={adStyles.searchContainer}>
      <Col span={24}>
        <Space direction='vertical' size={20} style={{ width: '100%' }}>
          <Input allowClear placeholder='Enter a location...' value={searchInput} onChange={setSearchInput} />
          {renderContent()}
        </Space>
      </Col>
    </Row>
  )
}

const adStyles = {
  searchContainer: {
    backgroundColor: colors.white,
    padding: '2vh',
    margin: '2vh 5vw 1vh 5vw',
    borderRadius: 20,
    boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)',
  },
}

export { SearchCard }
