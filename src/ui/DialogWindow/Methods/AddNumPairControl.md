---
title: AddNumPairControl
nav_exclude: true
---

# DialogWindow.AddNumPairControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddNumPairControl(string, string, bool, bool, string, string)](#dialogwindowaddnumpaircontrolstring-string-bool-bool-string-string-մեթոդ) | Երկխոսության պատուհանում ավելացնում է թվային զույգ դաշտ։ |
| [AddNumPairControl(LayoutGroup, string, string, bool, bool, string, string)](#dialogwindowaddnumpaircontrollayoutgroup-string-string-bool-bool-string-string-մեթոդ) | Նշված դասավորման խմբում ավելացնում է թվային զույգ դաշտ։ |

### DialogWindow.AddNumPairControl(string, string, bool, bool, string, string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public NumPairControl AddNumPairControl(string name, string caption, bool isRequired = false, bool storeValue = true,
                                        string separator = null, string comment = null);
```

Երկխոսության պատուհանում ավելացնում է թվային զույգ դաշտ (**NumPairControl**), որը թույլ է տալիս մուտքագրել երկու թիվ՝ բաժանված բաժանարարով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| separator | string | null | Թվերի միջև բաժանարար նիշը կամ տողը։ |
| comment | string | null | Դաշտին համապատասխանող մեկնաբանությունը։ |

**Վերադարձնում է**

Ստեղծված **NumPairControl** դաշտը։

### DialogWindow.AddNumPairControl(LayoutGroup, string, string, bool, bool, string, string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public NumPairControl AddNumPairControl(LayoutGroup container, string name, string caption,
                                        bool isRequired = false, bool storeValue = true,
                                        string separator = null, string comment = null);
```

Նշված դասավորման խմբում ավելացնում է թվային զույգ դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| separator | string | null | Թվերի միջև բաժանարար նիշը կամ տողը։ |
| comment | string | null | Դաշտին համապատասխանող մեկնաբանությունը։ |

**Վերադարձնում է**

Ստեղծված **NumPairControl** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
