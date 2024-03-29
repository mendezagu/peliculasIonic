// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: '968ad671c7539067661c8bd98d7c7ade',
  baseUrl: 'https://api.themoviedb.org/3',
  images: 'http://image.tmdb.org/t/p',

  firebaseConfig : {
    apiKey: "AIzaSyAoDbMtaVuL4Mufzp5MjTQxpNVZOhloaWw",
    authDomain: "movieapp-647d3.firebaseapp.com",
    projectId: "movieapp-647d3",
    storageBucket: "movieapp-647d3.appspot.com",
    messagingSenderId: "442419463689",
    appId: "1:442419463689:web:00276922b0974195719ad8",
    measurementId: "G-4NZ2XXN6MM"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance  if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
