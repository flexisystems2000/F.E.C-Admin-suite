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

  android: {
    backgroundColor: '#ffffff'
  }
};

export default config;
