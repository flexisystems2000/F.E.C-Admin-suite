import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flexisystems.fecadmin',
  appName: 'F.E.C Admin Suite',
  webDir: 'www',

  server: {
    url: 'https://flexisystems2000.github.io/F.E.CAdminpanel/',
    cleartext: false,
    allowNavigation: [
      'flexisystems2000.github.io'
    ]
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 1800,
      launchAutoHide: true,
      backgroundColor: '#075E54',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      splashFullScreen: true,
      splashImmersive: true
    },

    StatusBar: {
      backgroundColor: '#FFFFFF',
      style: 'LIGHT'
    }
  },

  android: {
    backgroundColor: '#FFFFFF'
  }
};

export default config;
