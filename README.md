# Next.js 15: Runtime Error with getServerSideProps

This repository demonstrates a common runtime error in Next.js 15 applications when using `getServerSideProps` and navigating directly to a page before data is fetched.

## Problem

When a page uses `getServerSideProps` to fetch data, and a user navigates directly to that page (e.g., by typing the URL or using a bookmark) *before* the data is fetched, a runtime error occurs because the component tries to access `data` before it's available. 

## Solution

This example shows a fix. The solution is to handle potential `null` or `undefined` values for data, ensuring smooth user experience.