---
title: SaveToStorageAsText(StorageInfo, bool, bool, bool)
parent: "Մեթոդներ"
grand_parent: "IExecutionProgress"
---

# IExecutionProgress.SaveToStorageAsText(StorageInfo, bool, bool, bool) մեթոդ

## Նկարագիր

**Դաս՝** [IExecutionProgress](../../IExecutionProgress.md)

```c#
public Task SaveToStorageAsText(StorageInfo storageInfo, 
                               bool replaceTags = false, 
                               bool htmlFormat = false, 
                               bool toUnicode = false);
```

Պահպանում է [տեքստային հաշվետվության](../../TextReport.md) պարունակությունը ֆայլի մեջ։

Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում տեքստային հաշվետվությունը մնում է անփոփոխ։

**Պարամետրեր**


| Անվանում    | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                                    |
| ----------- | ------------- | --------------- | ----------------------------------------------------------------- |
| storageInfo | StorageInfo   | -               | [Տեքստային հաշվետվությունը](../../TextReport.md) պարունակող ֆայլի, թղթապանակի անունները։                 |
| replaceTags | bool          | false           | Հաշվետվության տեքստից թեգերի հեռացման հայտանիշ։ |
| htmlFormat  | bool          | false           | Հաշվետվության տեքստի HTML ֆորմատով պահպանման հայտանիշ։   |
| toUnicode   | bool          | false           | Հաշվետվության տեքստի Unicode կոդավորմամբ պահման հայտանիշ։ **false** արժեքի դեպքում տեքստը պահվելու է **Ansi** կոդավորմամբ։   |
