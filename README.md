A simple react pagination module

Steps need to be followed:

1. Run "npm i @ravimantra/react-pagination"
2. import simplePagination from '@ravimantra/react-pagination'
3. Add it as follows: 
  <SimplePagination pageSize={number of rows in a pagination list} data={all data to be in the list} getCurrentPageData={callback to get current page data} />

Styling:
Customise it as per your requirements
Classes: containerClass, prevButton, nextButton, pageNumberText

NOTE: It returns the current page data. You can render it as per your design.