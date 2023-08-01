const mapping: Record<string, string> = {
  bookings: 'booking',
  companies: 'company',
  'loyalty-programs': 'loyalty_program',
  ratings: 'rating',
  rides: 'ride',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
