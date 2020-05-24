A simple react pagination module

Steps need to be followed:

Run "npm i @ravimantra/react-pagination"
import simplePagination from '@ravimantra/react-pagination'
Add it as follows: <SimplePagination pageSize={number of rows in a pagination list} data={all data to be in the list} getCurrentPageData={callback to get current page data} />
NOTE: It returns the current page data. You can render it as per your design.