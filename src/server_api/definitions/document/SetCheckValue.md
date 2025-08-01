---
title: Document.SetCheckValue(string, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.CheckValue](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/CheckValue.html)

```c#
public void SetCheckValue(string fieldName, bool value)
```

Նշանակում է փաստաթղթի նշված ներքին անունով դաշտի [համակարգային տիպի](../../types/system_types.md) ստուգման հայտանիշը:

**Պարամետրեր**

- `fieldName` - Դաշտի ներքին անունը։
- `value` - Սահմանում է դաշտի [համակարգային տիպում](../../types/system_types.md) նշված ծառում կամ թղթապանակում դաշտի արժեքի առկայությունը։ `false` արժեքի դեպքում դաշտի լրացման կամ ցուցադրման ժամանակ չի ստուգվելու արժեքի առկայությունը ծառում կամ թղթապանակում, `true` արժեքի դեպքում դաշտի արժեքը պետք է գոյություն ունենա դաշտի [համակարգային տիպում](../../types/system_types.md) նկարագրված ծառում կամ թղթապանակում։

