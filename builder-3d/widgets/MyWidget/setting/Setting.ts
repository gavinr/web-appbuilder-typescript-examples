// JIMU (WAB) imports:

/// <amd-dependency path="jimu/BaseWidgetSetting" name="BaseWidgetSetting" />
declare var BaseWidgetSetting: any; // there is no ts definition of BaseWidgetSetting (yet!)

// DeclareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
import declare from '../support/declareDecorator';

import IConfig from '../config';
// import EsriMap from 'esri/map';

interface ISetting {
  config?: IConfig;
}

@declare(BaseWidgetSetting)
class Setting implements ISetting {
  baseClass = 'my-widget-setting';
  public config: IConfig;

  // all inputs:
  private textNode: HTMLInputElement;

  postCreate(args: any) {
    let self: any = this;
    self.inherited(arguments);
    this.setConfig(this.config);
  };

  setConfig(config: IConfig) {
    this.textNode.value = config.demoSetting;
  };

  getConfig() {
    // WAB will get config object through this method
    return {
      demoSetting: this.textNode.value
    };
  };
};

export = Setting;
