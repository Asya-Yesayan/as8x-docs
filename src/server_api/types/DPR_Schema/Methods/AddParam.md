---
title: AddParam(string, string, string, FieldType, object, bool, bool)
nav_exclude: true
---

# DPR.Schema.AddParam(string, string, string, FieldType, object, bool, bool) մեթոդ

```c#
public void AddParam(string name, 
                     string armenianCaption, 
                     string englishCaption, 
                     FieldType fieldType, 
                     object defaultValue = null, 
                     bool isRequired = false, 
                     bool isMultiSelect = false)
```

Ավելացնում է պարամետրի նկարագրությունը տվյալների մշակման հարցման (**DPR**) սխեմայում։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|---------|-------|-----------------|----------------|
| name | string | - | Պարամետրի ներքին անունը (կոդը): |
| armenianCaption | string | - | Պարամետրի հայերեն անվանումը: |
| englishCaption | string | - | Պարամետրի անգլերեն անվանումը: |
| fieldType | FieldType | - | Պարամետրի համակարգային տիպը: |
| defaultValue | object | null | Պարամետրի լռությամբ արժեքը: |
| isRequired | bool | false | Պարամետրի պարտադիր լրացման հայտանիշ։ |
| isMultiSelect | bool | false | Ցույց է տալիս, թե արդյոք հնարավոր է ընտրել մի քանի արժեքներ: |
