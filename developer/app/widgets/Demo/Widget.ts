/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare var BaseWidget: any;

import * as dojoDeclare from 'dojo/_base/declare';
// import * as BaseWidget from 'jimu/BaseWidget';

export = dojoDeclare([BaseWidget], {
  baseClass: 'demo-widget',

  postCreate() {
    this.inherited(arguments);
    console.log('Demo Widget Alive!');
    this.widgetWrapper.innerHTML = this.config.demoSetting;
  }
});