// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: 'C2007028377d9690458e3b59dfda78a11122a841c9dc9fd499e234b16ce9d948b',
  client_secret: 'a9b8c7254dcaf62148eadd59a0edcb8b6b38980c2eb32a2145703e11fc5d8ddf',
  redirect_uri: 'http://localhost:4200/rooms',
  scope: 'spark:all spark:kms'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
