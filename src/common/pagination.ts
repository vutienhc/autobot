export class Pagination<PaginationObject> {
  constructor(
    public readonly items: PaginationObject[],
    public readonly totalItem: number,
    public readonly itemCount: number,
    public readonly limit: number,
    public readonly totalPage: number,
    public readonly page: number,
  ) {}
}
export function createPaginationObject<T>(
  items: T[],
  totalItem: number,
  page: number,
  limit: number,
) {
  const totalPage = Math.ceil(totalItem / limit);
  return new Pagination<T>(
    items,
    totalItem,
    items.length,
    limit,
    totalPage,
    page,
  );
}
