interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['App Administrator'],
  customerRoles: [],
  tenantRoles: ['Rider', 'Driver', 'App Administrator', 'Customer Support', 'Business Owner'],
  tenantName: 'Company',
  applicationName: 'Sv Travels',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
