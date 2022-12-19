
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
          "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
          "pluginId": "cordova-plugin-nativegeocoder",
        "clobbers": [
          "nativegeocoder"
        ]
        },
      {
          "id": "onesignal-cordova-plugin.OneSignalPlugin",
          "file": "plugins/onesignal-cordova-plugin/dist/index.js",
          "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
          "OneSignal"
        ]
        },
      {
          "id": "onesignal-cordova-plugin.NotificationReceivedEvent",
          "file": "plugins/onesignal-cordova-plugin/dist/NotificationReceivedEvent.js",
          "pluginId": "onesignal-cordova-plugin"
        },
      {
          "id": "onesignal-cordova-plugin.Subscription",
          "file": "plugins/onesignal-cordova-plugin/dist/Subscription.js",
          "pluginId": "onesignal-cordova-plugin"
        },
      {
          "id": "onesignal-cordova-plugin.OSNotification",
          "file": "plugins/onesignal-cordova-plugin/dist/OSNotification.js",
          "pluginId": "onesignal-cordova-plugin"
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-nativegeocoder": "3.4.1",
      "onesignal-cordova-plugin": "3.3.0"
    };
    // BOTTOM OF METADATA
    });
    