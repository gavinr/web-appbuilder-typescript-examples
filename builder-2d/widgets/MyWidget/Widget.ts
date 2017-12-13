// JIMU (WAB) imports:

/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare var BaseWidget: any; // there is no ts definition of BaseWidget (yet!)

// DeclareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
import declare from "./support/declareDecorator";

// Esri imports:
import esri = require('esri');
import FeatureLayer = require('esri/layers/FeatureLayer');
import Query = require('esri/tasks/query');
import EsriMap = require('esri/map');

// Dojo imports:
import * as on from 'dojo/on';

interface Config {
  demoSetting: string
}
interface Widget {
  widgetWrapper?: Element
  config?: Config
}

@declare(BaseWidget)
class Widget {
  baseClass = 'my-widget';

  map: EsriMap;

  postCreate(args: any) {
    // not allowed in option strict this.inherited(arguments);
    let self: any = this;
    self.inherited(arguments);
    this.widgetWrapper.innerHTML = this.config.demoSetting;
    this.createLayer();
  };

  /**
   * Example of adding a layer to the map, and querying the features.
   */
  createLayer() {
    const layer = new FeatureLayer('https://sampleserver6.arcgisonline.com/arcgis/rest/services/Recreation/FeatureServer/0');
    on.once(this.map, 'update-end', (evt) => {
      console.log('evt', evt);
      this.queryLayer(layer);
    });
    this.map.addLayers([layer]);
  };

  queryLayer(layer: FeatureLayer) {
    const query = new Query();
    query.where = 'facility = 8';
    query.outFields = ['*'];
    layer.queryFeatures(query).then((results) => {
      console.log('query results:', results.features);
    });
  }
};

export = Widget;