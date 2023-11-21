module.exports = {
  expo: {
    name: 'Konto bratislava Native app',
    slug: 'konto-native',
    version: '1.0.1',
    orientation: 'portrait',
    scheme: 'konto-native',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.bratislava.paas',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    experiments: {
      tsconfigPaths: true,
    },
    plugins: ['expo-router'],
    owner: 'bratislava',
  },
}
