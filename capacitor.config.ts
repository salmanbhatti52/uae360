import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.uae360.app',
  appName: '360UAE',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      useDialog: false,
      showSpinner: true,
      spinnerColor: "#FFFFFF",
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#000000",
      androidSplashResourceName: "splash"
    },
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "346937437512-cfsv6opbsmusjjmcoccni34i08d3dke5.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
