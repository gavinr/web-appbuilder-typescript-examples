// JIMU (WAB) imports:

/// <amd-dependency path="jimu/BaseWidgetSetting" name="BaseWidgetSetting" />
declare var BaseWidgetSetting: any; // there is no ts definition of BaseWidgetSetting (yet!)

// DeclareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
import declare from "../support/declareDecorator";

interface Config {
  demoSetting: string
}
interface Setting {
  textNode?: HTMLInputElement
  config?: Config
}

@declare(BaseWidgetSetting)
class Setting {
  baseClass = 'my-widget-setting';

  postCreate(args: any) {
    //the config object is passed in
    this.setConfig(this.config);
  };

  setConfig(config: Config) {
    this.textNode.value = config.demoSetting;
  };

  getConfig() {
    //WAB will get config object through this method
    return {
      demoSetting: this.textNode.value
    };
  };
};

export = Setting;
