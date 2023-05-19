import React from 'react'
import { Row, Col, Input, Space, List, Image } from 'antd'
import { colors } from '../styles/colors'

const SearchCard = ({ onClickItem, searchInput, setSearchInput, searchResult }) => {
  return (
    <Row style={adStyles.searchContainer}>
      <Col span={24}>
        <Space direction='vertical' size={20} style={{ width: '100%' }}>
          <Input allowClear placeholder='Enter a location...' value={searchInput} onChange={setSearchInput} />
          {searchResult.length > 0 && (
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
                  <Image
                    src={
                      'data:image/png;base64,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'
                    }
                    height={'12px'}
                    width={'86px'}
                  />
                </Row>
              }
            />
          )}
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
