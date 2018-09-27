// JIMU (WAB) imports:

/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare var BaseWidget: any; // there is no ts definition of BaseWidget (yet!)

// DeclareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
import declare from './support/declareDecorator';

// Esri imports:
import FeatureLayer from 'esri/layers/FeatureLayer';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Query from 'esri/tasks/support/Query';
import SceneView from 'esri/views/SceneView';

// Dojo imports:
// import * as on from 'dojo/on';

interface IConfig {
  demoSetting: string;
}
interface IWidget {
  baseClass: string;
  config?: IConfig;
}

@declare(BaseWidget)
class Widget implements IWidget {
  public baseClass: string = 'my-widget';
  public config: IConfig;

  private sceneView: SceneView;
  private widgetWrapper: HTMLElement;

  private postCreate(args: any) {
    const self: any = this;
    self.inherited(arguments);
    this.widgetWrapper.innerHTML = this.config.demoSetting;
    this.createLayer();
  }

  /**
   * Example of adding a layer to the map, and querying the features.
   */
  private createLayer() {
    const layer = new FeatureLayer({
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Recreation/FeatureServer/0',
    });
    layer.when(() => {
      this.queryLayer(layer);
    });
    this.sceneView.map.layers.add(layer);
  }

  private queryLayer(layer: FeatureLayer) {
    const query = new Query();
    query.where = 'facility = 7';
    query.outFields = ['*'];
    layer.queryFeatures(query).then((results: FeatureSet) => {
      console.log('query results:', results.features);
    });
  }
}

export = Widget;
