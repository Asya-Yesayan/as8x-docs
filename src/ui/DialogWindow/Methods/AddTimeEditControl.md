---
title: AddTimeEditControl
nav_exclude: true
---

# DialogWindow.AddTimeEditControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddTimeEditControl(string, string, bool, bool, bool)](#dialogwindowaddtimeeditcontrolstring-string-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ժամի մուտքագրման դաշտ (**TimeEditControl**)։ |
| [AddTimeEditControl(LayoutGroup, string, string, bool, bool, bool)](#dialogwindowaddtimeeditcontrollayoutgroup-string-string-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է ժամի մուտքագրման դաշտ։ |

### DialogWindow.AddTimeEditControl(string, string, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TimeEditControl AddTimeEditControl(string name, string caption, bool showSeconds = false,
                                          bool isRequired = false, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է ժամի մուտքագրման դաշտ (**TimeEditControl**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| showSeconds | bool | false | **true** արժեքի դեպքում ցուցադրվում են վայրկյանները։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |


### DialogWindow.AddTimeEditControl(LayoutGroup, string, string, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TimeEditControl AddTimeEditControl(LayoutGroup container, string name, string caption,
                                          bool showSeconds = false, bool isRequired = false, bool storeValue = true);
```

Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ժամի մուտքագրման դաշտ (**TimeEditControl**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը (LayoutGroup), որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| showSeconds | bool | false | **true** արժեքի դեպքում ցուցադրվում են վայրկյանները։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

