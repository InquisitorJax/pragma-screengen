export const staffTemplate =
{
    "type": "view",
    "fields": [
        {
            "field": "isActive",
            "map": "isActive"
        },
        {
            "field": "firstName",
            "map": "firstName"
        },
        {
            "field": "lastName",
            "map": "lastName"
        },
        {
            "field": "jobTitle",
            "map": "jobTitle"
        },
        {
            "field": "description",
            "map": "description"
        },
        {
            "field": "code",
            "map": "code"
        },
        {
            "field": "sectionCode",
            "map": "sectionCode"
        },
        {
            "field": "sectionDescription",
            "map": "sectionDescription"
        },
        {
            "field": "siteCode",
            "map": "siteCode"
        },
        {
            "field": "siteDescription",
            "map": "siteDescription"
        },
        {
            "field": "emailOnApprovedWO",
            "map": "emailOnApprovedWO"
        },
        {
            "field": "smsOnApprovedWO",
            "map": "smsOnApprovedWO"
        },
        {
            "field": "smsForCriticalAsset",
            "map": "smsForCriticalAsset"
        },
        {
            "field": "jobTitle",
            "map": "jobTitle"
        }
    ],
    "body": {
        "tabsheet" : [
            {
                "id": "tabHeader",
                "title": "Staff Header",
                "groups": [
                    {
                        "id": "headerGroup",
                        "title": "Header",
                        "elements": [
                            {
                                "title": "Is Active",
                                "field": "isActive",
                                "element": "checkbox",
                                "attributes": {
                                    /** currently doesn't work **/
                                    "disabled": "true"
                                }
                            },
                            {
                                "element": "br",
                                "attributes": {
                                    "height": "3px"
                                }
                            },
                            {
                                "element": "input",
                                "title": "Code",
                                "field": "code",
                                "attributes": {
                                    "required": "true"
                                }
                            },
                            {
                                "element": "input",
                                "title": "Description",
                                "field": "description",
                                "attributes": {
                                    "readonly": "true"
                                }
                            },
                            {
                                "element": "input",
                                "title": "Site",
                                "field": "siteCode",
                                "description": "siteDescription",
                                "attributes": {
                                    "required": "true"
                                }
                            }
                        ]
                    },
                    {
                        "id": "maintenanceGroup",
                        "title": "Maintenance Manager",
                        "elements": [
                            {
                                "element": "input",
                                "title": "Section",
                                "field": "sectionCode",
                                "description": "sectionDescription",
                                "attributes": {
                                    "required": "true"
                                }
                            },
                            {
                                "element": "checkbox",
                                "title": "Email on Approved Work Order",
                                "field": "emailOnApprovedWO"
                            },
                            {
                                "element": "checkbox",
                                "title": "SMS on Approved Work Order",
                                "field": "smsOnApprovedWO"
                            },
                            {
                                "element": "checkbox",
                                "title": "SMS on Critical Asset",
                                "field": "smsForCriticalAsset"
                            },

                        ]
                    }

                ]
            },
            {
                "id": "tabPersonalInfo",
                "title" : "Personal Info",
                "groups": [
                    {
                        "id": "personalInfoGroup",
                        "title": "Personal Info",
                        "elements" : [
                            {
                                "title": "First Name",
                                "field": "firstName",
                                "element": "input",
                            },
                            {
                                "title": "Last Name",
                                "field": "lastName",
                                "element": "input",
                            },
                            {
                                "title": "Job Title",
                                "field": "jobTitle",
                                "element": "input",
                            },
                        ]
                    }
                ]
            }
        ]
    }
};
