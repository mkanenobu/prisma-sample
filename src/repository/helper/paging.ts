export const pagingQuery = (limit = 10, offset = 10) => ({
  take: limit,
  skip: offset,
});
