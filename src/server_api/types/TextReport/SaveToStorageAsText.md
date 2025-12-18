---
title: TextReport.SaveToStorageAsText(StorageInfo, bool, bool, bool) մեթոդ
---

```c#
public async Task SaveToStorageAsText(StorageInfo storageInfo, bool replaceTags = false,
                                      bool htmlformat = false, bool toUnicode = false)
```

Պահպանում է հաշվետվության տեքսը ֆայլի մեջ։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| storageInfo     | StorageInfo          | -              | StorageInfo տիպի օբյեկտ, որը պարունակում է այն թղթապանակի ու ֆայլի անունները, որտեղ պահվելու է հաշվետվության տեքստը։ |
| replaceTags     | bool                 | false          | Հաշվետվության տեքստից թեգերի հեռացման հայտանիշ։ |
| htmlformat      | bool                 | false          | Հաշվետվության տեքստի HTML ֆորմատով պահման հայտանիշ։ |
| toUnicode       | bool                 | false          | Հաշվետվության տեքստի Unicode կոդավորմամբ պահման հայտանիշ։ `false` արժեքի դեպքում տեքստը պահվելու է `Ansi` կոդավորմամբ։ |
