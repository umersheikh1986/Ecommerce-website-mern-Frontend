export const ITEM_PER_PAGE = 4;
export function discountedPrice(item) {
  return Math.round(item.price * (1 - item.discountPercentage / 100), 2);
}
