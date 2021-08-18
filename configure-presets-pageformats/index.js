
import 'https://cdn.img.ly/packages/imgly/cesdk-js/1.0.0-rc.7/cesdk.umd.js';

let config = {
  baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.0.0-rc.7/assets',
  presets: {
    // highlight-pageFormats
    pageFormats: {
      'din-a6': {
        // highlight-meta
        meta: {
          default: true
        },
        // highlight-meta
        // highlight-width
        width: 148,
        // highlight-width
        // highlight-height
        height: 105,
        // highlight-height
        // highlight-unit
        unit: 1, // Millimeter
        // highlight-unit
        // highlight-bleedMargin
        bleedMargin: 2
        // highlight-bleedMargin
      },
      'twitter-profile': {
        width: 400,
        height: 400,
        unit: 0 // Pixel
      },
      'american-letter': {
        width: 8.5,
        height: 11,
        unit: 2, // Inch
        bleedMargin: 1
      }
      // highlight-pageFormats
    }
  }
};

CreativeEditorSDK.init('#cesdk_container', config).then((instance) => {
  /** do something with the instance of CreativeEditor SDK **/
});