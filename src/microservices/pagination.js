export const getPaginationQuerys = (query) => {
  let search = query.search || ''
  let page = parseInt(query.page) || 0
  let size = parseInt(query.size) || 7
  let status = query.status || null
  let underage = query.underage || null

  return { search, page, size, status, underage }
}

export const getPagination = (page, size) => {
  const limit = size ? +size : 10
  const offset = page ? page * limit : 0

  return { limit, offset }
}

export const getPagingData = (data) => {
  const totalItems = data.totalDocs
  const items = data.docs
  const currentPage = data.page
  const totalPages = data.totalPages

  return { totalItems, items, totalPages, currentPage }
}
