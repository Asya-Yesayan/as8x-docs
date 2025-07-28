---
title: Document.Properties հատկություն
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsDoc.Properties](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Properties.html)

```c#
public Dictionary<string, object> Properties { get; set; }
```

Այս հատկությունը օգտագործվում է 8X-ից 4X օբյեկտներ փոխանցելու կամ 4X-ից 8X եկող օբյեկտների պահպանման համար։

4X-ից 8X եկած բարդ օբյեկտները օգտագործելու համար անհրաժեշտ է դրանք բերել c#-ական տիպերի [DeserializeComplexObjects](DeserializeComplexObjects.md) մեթոդի միջոցով։

8X-ից 4X գնացող բարդ օբյեկտներն էլ անհրաժեշտ է բերել 4X-ի կողմից աջակցվող տիպերի [SerializeComplexObjects](SerializeComplexObjects.md) մեթոդի միջոցով։

