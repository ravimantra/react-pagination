import React from 'react'

import { SimplePagination } from 'react-pagination'
import 'react-pagination/dist/index.css'

const App = () => {
  const getCurrentPageData = data => {
    console.log(data)
  }
  return (
    <SimplePagination
      pageSize="3"
      data={[1, 3, 6, 78, 11, 10, 8, 13]}
      getCurrentPageData={getCurrentPageData}
    />
  )
}

export default App
