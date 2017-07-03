import {inject, bindable} from 'aurelia-framework';
import {DynamicViewLoader, listTemplate1, populateTemplate, GroupWorker, TemplateParser, isMobile} from 'pragma-views';

import {staffOrderGroupItems} from './../../resources/staff-grouping';
import {staffMembers}  from './../../resources/staff-data';
import {staffTemplate} from './../../resources/staff-template';
import {staffTemplateSpec} from './../../resources/staff-template-spec';

@inject(Element, DynamicViewLoader, GroupWorker)
export class Welcome {
    /**
     * Property holding the view loader
     */
    dynamicViewLoader;

    /**
     * Property holding the group worker that is used by the master list container
     */
    groupWorker;

    /**
     * Record id of the resource we are working with e.g. workorder id, staff id...
     * When this is set, it kicks off a process to fetch the model, see function selectedIdChanged
     */
    @bindable selectedId;

    /**
     * Options used on the master list drop down menu
     */
    @bindable masterListOptions;

    /**
     * Options used in the details drop down menu
     */
    @bindable detailOptions;

    /**
     * What items are allowed for grouping
     */
    @bindable groupingOrder;

    /**
     * template to use in the master list container
     */
    @bindable listTemplate;

    /**
     * Id to use when usign cache
     */
    @bindable cacheId;

    /**
     * Model representing selected staff member
     */
    @bindable model;

    /**
     * Determine if the master list is visible or not
     */
    @bindable isMasterVisible;

    /**
     * What action was selected on master toolbar
     */
    @bindable masterToolbarSelectedId;

    /**
     * What action was selected on the details toolbar
     */
    @bindable detailToolbarSelectedId;

    /**
     * constructor
     * @param element: DOMElement
     * @param dynamicViewLoader: DynamicViewLoader
     * @param groupWorker: GroupWorker
     */
    constructor(element, dynamicViewLoader, groupWorker) {
        this.element = element;
        this.dynamicViewLoader = dynamicViewLoader;
        this.groupWorker = groupWorker;
        this.groupingOrder = staffOrderGroupItems;
        this.cacheId = "temp-cache";
        this.isMasterVisible = true;
        this.templateParser = new TemplateParser("model");

        this.listTemplate = populateTemplate(listTemplate1, {
            "__field1__": "${id}",
            "__field2__": "",
            "__field3__": "${firstName}",
            "__field4__": "${lastName}",
            "__field5__": "${jobTitle}"
        });
    }

    /**
     * Aurelia life cycle event
     */
    attached() {
        this.refreshData();
        this.templateParser.parse(staffTemplateSpec).then(html => this.changeDetailTemplate(html));

        this.refreshDataHandler = this.refreshData.bind(this);
        this.masterListOptions = [
            {
                id: 1,
                title: "Refresh",
                iconName: null,
                call: this.refreshDataHandler
            }
        ];

        this.detailOptions = [
            {
                id: 1,
                title: "Wazaaap",
                iconName: "search",
                call: _ => alert("wazaaap'")
            }
        ]
    }

    /**
     * Aurelia life cycle event
     */
    detached() {
        this.groupWorker.disposeCache(this.cacheId);
        this.refreshDataHandler = null;
        this.masterListOptions = null;
        this.detailOptions = null;
    }

    /**
     *
     */
    refreshData() {
        this.groupWorker.createCache(this.cacheId, staffMembers);
    }

    /**
     * Display this html in the details page
     */
    changeDetailTemplate(templateHtml) {
        this.dynamicViewLoader.load(templateHtml, this.detailsElement, this);
    }

    /**
     * Aurelia triggered event when selectedId property changes
     */
    selectedIdChanged() {
        this.model = staffMembers.find(item => item.id == this.selectedId);

        if (isMobile()) {
            this.isMasterVisible = false;
        }
    }

    /**
     * masterToolbarSelectedId changed, execute the defined function
     */
    masterToolbarSelectedIdChanged() {
        if (this.masterToolbarSelectedId == -1) {
            return;
        }

        this.masterListOptions.find(item => item.id == this.masterToolbarSelectedId).call();
        this.masterToolbarSelectedId == -1
    }

    /**
     * detailToolbarSelectedIdChanged changed, execute the defined function
     */
    detailToolbarSelectedIdChanged() {
        if (this.detailToolbarSelectedId == -1) {
            return;
        }

        this.detailOptions.find(item => item.id == this.detailToolbarSelectedId).call();
        this.detailToolbarSelectedId == -1
    }
}