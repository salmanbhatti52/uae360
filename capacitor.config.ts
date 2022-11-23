import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
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
      serverClientId: "598717051286-96hgbo1769ha8f8fdfh7q7uk3qbe9h9h.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
