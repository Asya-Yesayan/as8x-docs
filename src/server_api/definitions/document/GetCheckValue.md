---
title: Document.GetCheckValue(string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.CheckValue](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/CheckValue.html)

**Դաս՝** [Document](../document.md)

```c#
public bool GetCheckValue(string fieldName)
```

Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի տիպի ստուգման հայտանիշը: 

`false` արժեքի դեպքում դաշտի լրացման կամ ցուցադրման ժամանակ չի ստուգվում արժեքի առկայությունը ծառում կամ թղթապանակում։ 
`true` արժեքի դեպքում դաշտի արժեքը պետք է գոյություն ունենա դաշտի [համակարգային տիպում](../../types/system_types.md) նկարագրված ծառում կամ թղթապանակում։

**Պարամետրեր**

* `fieldName` - Դաշտի ներքին անունը։

