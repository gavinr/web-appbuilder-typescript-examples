// JIMU (WAB) imports:

/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare var BaseWidget: any; // there is no ts definition of BaseWidget (yet!)

// DeclareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
import declare from "./support/declareDecorator";

// Esri imports:
import FeatureLayer = require('esri/layers/FeatureLayer');
import Query = require('esri/tasks/support/Query');
import SceneView = require('esri/views/SceneView');

// Dojo imports:
// import * as on from 'dojo/on';

interface Config {
  demoSetting: string
}
interface Widget {
  widgetWrapper?: Element
  config?: Config
}

@declare(BaseWidget)
class Widget {
  baseClass = 'demo-widget';

  sceneView: SceneView;

  postCreate(args: any) {
    // not allowed in option strict this.inherited(arguments);
    BaseWidget.prototype.postCreate.call(this, args);
    this.widgetWrapper.innerHTML = this.config.demoSetting;
    this.createLayer();
  };

  /**
   * Example of adding a layer to the map, and querying the features.
   */
  createLayer() {
    const layer = new FeatureLayer({
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Recreation/FeatureServer/0'
    });
    layer.then((evt) => {
      this.queryLayer(layer);
    });
    this.sceneView.map.layers.add(layer);
  };

  queryLayer(layer: FeatureLayer) {
    const query = new Query();
    query.where = 'facility = 7';
    query.outFields = ['*'];
    layer.queryFeatures(query).then((results) => {
      console.log('query results:', results.features);
    });
  }
};

export = Widget;