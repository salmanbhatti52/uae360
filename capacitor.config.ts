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
      serverClientId: "598717051286-89srp6tvqk24hdfbg7p8quuh84ckrscj.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
