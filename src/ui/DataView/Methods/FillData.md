---
title: FillData
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.FillData(object filledList) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public void FillData(object filledList)
```

Փոխարինում է Rows հավաքածուն `filledList`-ի բովանդակությամբ:

Մաքրում է Rows-ն (եթե ոչ-դատարկ) և refill-ում: Կոչվում է
`DataViewProgressWindow_ProcessRows`-ի կողմից batch-ի ժամանակ:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| filledList | object | - | `IEnumerable{R}`-ի typecast-վող object: Null-ը կնետի `NullReferenceException`: Կոչվում է progress flow-ի կողմից: |

