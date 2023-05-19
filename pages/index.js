import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
import { fetchAutoComplete, fetchPlaceDetails } from '../store/autoCompleteSlice'
import { SearchCard, MapCard, RecentCard } from '../components'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const { searchResult, recentSearches, center, activePlaceDetails } = useSelector((state) => state.autoComplete)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(fetchAutoComplete(searchInput))
  }, [searchInput])

  const handleClickItem = (e) => {
    dispatch(fetchPlaceDetails(e))
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Head>
        <title>Maps Autocomplete</title>
      </Head>
      <Layout style={{ height: '100%' }}>
        <SearchCard activePlaceDetails={activePlaceDetails} searchInput={searchInput} onClickItem={(e) => handleClickItem(e)} setSearchInput={(e) => setSearchInput(e.target.value)} searchResult={searchResult} />
        <MapCard center={center} />
        <RecentCard list={recentSearches} />
      </Layout>
    </Layout>
  )
}

export default Home
