---
title: AddPathEdit
nav_exclude: true
---

# DialogWindow.AddPathEdit մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddPathEdit(string, string, short, DialogType, bool, string, bool)](#dialogwindowaddpatheditstring-string-short-dialogtype-bool-string-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ֆայլի/պանակի ուղու ընտրման դաշտ։ |
| [AddPathEdit(LayoutGroup, string, string, short, DialogType, bool, string, bool)](#dialogwindowaddpatheditlayoutgroup-string-string-short-dialogtype-bool-string-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է ֆայլի/պանակի ուղու ընտրման դաշտ։ |

### DialogWindow.AddPathEdit(string, string, short, DialogType, bool, string, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public BrowsePathEditExt AddPathEdit(string name, string caption, short length, DialogType dialogType,
                                     bool isRequired = false, string dialogFilter = null, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է ֆայլի կամ պանակի ուղու ընտրման դաշտ (**BrowsePathEditExt**)։ Կողքին ավելացվող կոճակը բացում է **dialogType** պարամետրում տրված տիպի համակարգային պատուհան՝ ուղի ընտրելու համար։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Մուտքագրվող ուղու առավելագույն երկարությունը։ |
| dialogType | DialogType | — | Ուղու ընտրման համար օգտագործվող պատուհանի տիպը (ֆայլի բացման, ֆայլի պահպանման, պանակի ընտրման)։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| dialogFilter | string | null | Ֆայլերի ընտրման համար օգտագործվող ֆիլտրը (օրինակ՝ "*.txt")։ **null** դեպքում թույլատրվում են բոլոր ֆայլերը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

### DialogWindow.AddPathEdit(LayoutGroup, string, string, short, DialogType, bool, string, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public BrowsePathEditExt AddPathEdit(LayoutGroup container, string name, string caption, short length,
                                     DialogType dialogType, bool isRequired = false, string dialogFilter = null,
                                     bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է ֆայլի/պանակի ուղու ընտրման դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Մուտքագրվող ուղու առավելագույն երկարությունը։ |
| dialogType | DialogType | — | Ուղու ընտրման համար օգտագործվող պատուհանի տիպը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| dialogFilter | string | null | Ֆայլերի ընտրման ֆիլտրը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |


