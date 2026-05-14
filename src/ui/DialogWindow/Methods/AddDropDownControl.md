---
title: AddDropDownControl
nav_exclude: true
---

# DialogWindow.AddDropDownControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddDropDownControl(string, string, IDropDownView, bool, bool, bool, bool, int)](#dialogwindowadddropdowncontrolstring-string-idropdownview-bool-bool-bool-bool-int-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով (DropDown) դաշտ։ |
| [AddDropDownControl(LayoutGroup, string, string, IDropDownView, bool, bool, bool, bool, int)](#dialogwindowadddropdowncontrollayoutgroup-string-string-idropdownview-bool-bool-bool-bool-int-մեթոդ) | Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկով դաշտ։ |

### DialogWindow.AddDropDownControl(string, string, IDropDownView, bool, bool, bool, bool, int) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DropDownControl AddDropDownControl(string name, string caption, IDropDownView idv, bool isRequired = false,
                                          bool allowAdditionButtons = false, bool storeValue = true,
                                          bool isShowComment = true, int codeLength = -1);
```

Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով դաշտ (**DropDownControl**)՝ տրված դիտելու ձևի (**IDropDownView**) հիման վրա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | popup տեսակի ընտրացանկի դիտելու ձևի (data view) նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| allowAdditionButtons | bool | false | Որոշում է, արդյոք թույլատրվում են դաշտին կից լրացուցիչ կոճակները։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| isShowComment | bool | true | Որոշում է, արդյոք ցուցադրվի կոդին համապատասխանող մեկնաբանությունը։ |
| codeLength | int | -1 | Կոդի դաշտի լայնությունը։ **-1** դեպքում օգտագործվում է լռությամբ լայնությունը։ |

### DialogWindow.AddDropDownControl(LayoutGroup, string, string, IDropDownView, bool, bool, bool, bool, int) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DropDownControl AddDropDownControl(LayoutGroup container, string name, string caption, IDropDownView idv,
                                          bool isRequired = false, bool allowAdditionButtons = false,
                                          bool storeValue = true, bool isShowComment = true, int codeWidth = -1);
```

Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկով դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | popup տեսակի ընտրացանկի դիտելու ձևի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| allowAdditionButtons | bool | false | Որոշում է, արդյոք թույլատրվում են դաշտին կից լրացուցիչ կոճակները։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| isShowComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| codeWidth | int | -1 | Կոդի դաշտի լայնությունը։ |
