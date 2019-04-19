/// <amd-dependency path="dojo/text!./Subwidget.html" name="template" />
declare var template: any;

import declare from '../support/declareDecorator';
import WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';
import _WidgetsInTemplateMixin from 'dijit/_WidgetsInTemplateMixin';

// This line tells Typescript that our Subwidget extends from WidgetBase,
// so when we call built-in properties or functions (like .placeAt()), 
// Typescript will not error:
interface Subwidget extends WidgetBase {};

@declare(WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin)
class Subwidget {
  private templateString: string = template;

  baseClass: string = 'subwidget';

  constructor(params?: any, srcNodeRef?: dojo.NodeOrString) {
    // lang.mixin(this, params);
  }
}

export default Subwidget;