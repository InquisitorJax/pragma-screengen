export const staffTemplateSpec =
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
            },
            {
                "field": "phoneNumber",
                "map": "phoneNumber"
            },
            {
                "field": "address1",
                "map": "address1"
            },
            {
                "field": "address2",
                "map": "address2"
            },
            {
                "field": "address3",
                "map": "address3"
            },
            {
                "field": "sectionCode",
                "map": "sectionCode"
            },
            {
                "field": "sectionDescription",
                "map": "sectionDescription"
            },
            //fields not included in staff-data
            {
                "field": "initials",
                "map": "initials"
            },
            {
                "field": "postNumber",
                "map": "postNumber"
            },
            {
                "field": "personnelNumber",
                "map": "personnelNumber"
            },
            {
                "field": "mobileNumber",
                "map": "mobileNumber"
            },
            {
                "field": "email",
                "map": "email"
            },
            {
                "field": "tradeCode",
                "map": "tradeCode"
            },
            {
                "field": "tradeDescription",
                "map": "tradeDescription"
            },
            {
                "field": "costElementCode",
                "map": "costElementCode"
            },
            {
                "field": "costElementDescription",
                "map": "costElementDescription"
            },
            {
                "field": "calendarCode",
                "map": "calendarCode"
            },
            {
                "field": "calendarDescription",
                "map": "calendarDescription"
            },
            {
                "field": "siteCurrencyCode",
                "map": "siteCurrencyCode"
            },
            {
                "field": "siteCurrencyDescription",
                "map": "siteCurrencyDescription"
            },
            {
                "field": "normalTime",
                "map": "normalTime"
            },
            {
                "field": "overtime1",
                "map": "overtime1"
            },
            {
                "field": "overtime2",
                "map": "overtime2"
            },
            {
                "field": "overtime3",
                "map": "overtime3"
            },


        ],
        "body": {
            "elements": [
                {
                    "element": "h2",
                    "content": "Header",
                    "styles": ["custom-header"]
                },
                {
                    "element": "group",
                    "title": "Header Info",
                    "elements": [{
                        element: "input",
                        "title": "Code",
                        "field": "code",
                        "attributes": {
                            "required": "true"
                        }
                    },
                        {
                            element: "input",
                            "title": "Description",
                            "field": "description",
                            "attributes": {
                                "readonly": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Site",
                            "field": "siteCode",
                            "description": "${model.siteDescription}"
                        }]
                },
                {
                    "element": "h2",
                    "content": "Personal Details",
                    "styles": ["custom-header"]
                },
                {
                    "element": "group",
                    "title": "Personal Info",
                    "elements": [
                        {
                            element: "input",
                            "title": "Initials",
                            "field": "initials"
                        },
                        {
                            element: "input",
                            "title": "First name",
                            "field": "firstName",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Last name",
                            "field": "lastName",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Job title",
                            "field": "jobTitle"
                        },
                        {
                            element: "input",
                            "title": "Post number",
                            "field": "postNumber"
                        },
                        {
                            element: "input",
                            "title": "Personnel number",
                            "field": "personnelNumber"
                        },
                    ]
                },
                {
                    "element": "group",
                    "title": "Contact Info",
                    "elements": [
                        {
                            element: "input",
                            "title": "Phone",
                            "field": "phoneNumber"
                        },
                        {
                            element: "input",
                            "title": "Mobile",
                            "field": "mobileNumber"
                        },
                        {
                            element: "input",
                            "title": "Email",
                            "field": "email"
                        },
                        {
                            element: "input",
                            "title": "Address 1",
                            "field": "address1"
                        },
                        {
                            element: "input",
                            "title": "Address 2",
                            "field": "address2"
                        },
                        {
                            element: "input",
                            "title": "Address 3",
                            "field": "address3"
                        },
                    ]
                },
                {
                    "element": "h2",
                    "content": "Maintenance Manager",
                    "styles": ["custom-header"]
                },
                {
                    "element": "group",
                    "title": "Maintenance",
                    "elements": [
                        {
                            element: "input",
                            "title": "Section",
                            "field": "sectionCode",
                            "description": "sectionDescription",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Trade",
                            "field": "tradeCode",
                            "description": "tradeDescription",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Cost element",
                            "field": "costElementCode",
                            "description": "costElementDescription",
                            "attributes": {
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Calendar",
                            "field": "calendarCode",
                            "description": "calendarDescription",
                            "attributes": {
                                "required": "true"
                            }
                        },
                    ]
                },
                {
                    "element": "group",
                    "title": "Rates per hour",
                    "elements": [
                        {
                            element: "input",
                            "title": "Site currency",
                            "field": "siteCurrencyCode",
                            "description": "siteCurrencyDescription",
                            "attributes": {
                                "readonly": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Normal time",
                            "field": "normalTime",
                            "attributes": {
                                /*  TODO: numeric input / formatting? */
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Overtime 1",
                            "field": "overtime1",
                            "attributes": {
                                /*  TODO: numeric input / formatting? */
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Overtime 2",
                            "field": "overtime2",
                            "attributes": {
                                /*  TODO: numeric input / formatting? */
                                "required": "true"
                            }
                        },
                        {
                            element: "input",
                            "title": "Overtime 3",
                            "field": "overtime3",
                            "attributes": {
                                /*  TODO: numeric input / formatting? */
                                "required": "true"
                            }
                        },
                    ]
                },
                {
                    "element": "group",
                    "title": "Notifications",
                    "elements": [
                        {
                            "title": "Email on Work Order Approval",
                            "field": "emailOnApprovedWO",
                            "element": "checkbox"
                        },
                        {
                            "title": "SMS on Work Order Approval",
                            "field": "smsOnApprovedWO",
                            "element": "checkbox"
                        },
                        {
                            "title": "SMS for Critical Assets Only",
                            "field": "smsForCriticalAsset",
                            "element": "checkbox"
                        },
                    ]
                },
                {
                    "element": "h2",
                    "content": "Geographic Data",
                    "styles": ["custom-header"]
                },
                {
                    "element": "group",
                    "title": "Geographic Location",
                    "attributes": {
                        /*  TODO: correct? */
                        "disabled": "true"
                    }
                },
                {
                    "element": "group",
                    "title": "Geographic Notes",
                    "attributes": {
                        /*  TODO: correct? */
                        "disabled": "true"
                    }
                },
            ]

        }
    };
