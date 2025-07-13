# Allergy Archive App (allergy-archive)

An attempt to create an app to help manage and track foods you have eaten that are safe to ingest based on your allergies.
This was started originally as a personal project, but I figured if this could help even one person to prevent an allergic reaction,
or alleviate some of the stress around food allergies then that is a win in my book. I also decided to make the app open source in this process.
Eventually I might add some premium features like hosting some sort of backend sync in the cloud, but I will also make the code for that open source
if you do not wish to pay and want to host your own servers.

Currently, the app has not been released, and I am working to get it finished and out on the IOS App Store. I will eventually work the
Android side as well. My immediate goal is to be able to add a food item based on name, brand, store, and a section for personal comments that will
be saved to the local device and able to be searched from the home page. This will at least allow people to start tracking food items
they know are safe and reference the list. 

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
quasar dev:ios # for ios
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
