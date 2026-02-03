---
title: SetCheckValue(string, bool)
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.SetCheckValue(string, bool) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.CheckValue](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/CheckValue.html)

**Դաս՝** [Document](../Document.md)

```c#
public void SetCheckValue(string fieldName, 
                          bool value)
```

Նշանակում է փաստաթղթի նշված ներքին անունով դաշտի [համակարգային տիպի](../../../Types/system_types.md) ստուգման հայտանիշը:

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fieldName       | string               | -              | Դաշտի ներքին անունը։ |
| value           | bool                 | -              | Սահմանում է դաշտի [համակարգային տիպում](../../../Types/system_types.md) նշված ծառում կամ թղթապանակում դաշտի արժեքի առկայությունը։ `false` արժեքի դեպքում դաշտի լրացման կամ ցուցադրման ժամանակ չի ստուգվելու արժեքի առկայությունը ծառում կամ թղթապանակում, `true` արժեքի դեպքում դաշտի արժեքը պետք է գոյություն ունենա դաշտի [համակարգային տիպում](../../../Types/system_types.md) նկարագրված ծառում կամ թղթապանակում։ |

