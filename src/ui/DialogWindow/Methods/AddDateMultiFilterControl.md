---
title: AddDateMultiFilterControl
nav_exclude: true
---

# DialogWindow.AddDateMultiFilterControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddDateMultiFilterControl(string, string, MultiFilterTypes, bool, bool, bool, bool)](#dialogwindowadddatemultifiltercontrolstring-string-multifiltertypes-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ամսաթվային ֆիլտրման դաշտ։ |
| [AddDateMultiFilterControl(LayoutGroup, string, string, MultiFilterTypes, bool, bool, bool, bool)](#dialogwindowadddatemultifiltercontrollayoutgroup-string-string-multifiltertypes-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է ամսաթվային ֆիլտրման դաշտ։ |

### DialogWindow.AddDateMultiFilterControl(string, string, MultiFilterTypes, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DateMultiFilterControl AddDateMultiFilterControl(string name, string caption,
                                                        MultiFilterTypes supportedFilterTypes,
                                                        bool useLongDate = false, bool showDateNavigatorPopup = true,
                                                        bool isRequired = false, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է ամսաթվային ֆիլտրման դաշտ (**DateMultiFilterControl**)՝ ֆիլտրի մի քանի տիպերի աջակցությամբ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| supportedFilterTypes | MultiFilterTypes | — | Դաշտի կողմից աջակցվող ֆիլտրի տիպերի հավաքածուն։ |
| useLongDate | bool | false | **true** արժեքի դեպքում օգտագործվում է երկար ամսաթվային ֆորմատը։ |
| showDateNavigatorPopup | bool | true | Որոշում է, արդյոք ցուցադրվի **DateNavigator** popup տեսակի պատուհանը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

### DialogWindow.AddDateMultiFilterControl(LayoutGroup, string, string, MultiFilterTypes, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DateMultiFilterControl AddDateMultiFilterControl(LayoutGroup container, string name, string caption,
                                                        MultiFilterTypes supportedFilterTypes,
                                                        bool useLongDate = false, bool showDateNavigatorPopup = true,
                                                        bool isRequired = false, bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է ամսաթվային ֆիլտրման դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| supportedFilterTypes | MultiFilterTypes | — | Դաշտի կողմից աջակցվող ֆիլտրի տիպերի հավաքածուն։ |
| useLongDate | bool | false | **true** արժեքի դեպքում օգտագործվում է երկար ամսաթվային ֆորմատը։ |
| showDateNavigatorPopup | bool | true | Որոշում է, արդյոք ցուցադրվի **DateNavigator** popup տեսակի պատուհանը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
