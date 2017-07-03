import {customElement, inject} from 'aurelia-framework';

@customElement('label-composite')
@inject(Element)
export class LabelComposite {
    @bindable id;
    @bindable label;
    @bindable descriptor;

    labelControl;
    labelSlot;

    constructor(element) {
        this.element = element;
    }

    attached() {
        // initialize
        this.fieldLabel = this.labelSlot.children[0];
        this.fieldLabel.id = `${this.id}_field`;
        this.fieldLabel.style.display = "block";
        this.fieldLabel.style.width = "100%";
    }

    detached() {
        // dispose
        this.fieldLabel = null;
        this.labelControl = null;
        this.labelSlot = null;
    }
}