---
title: ViewParametersReport
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ViewParametersReport() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public void ViewParametersReport()
```

Ցուցադրում է DataView-ի բոլոր parameters-ի textual report-ը:

Report-ը ցուցադրում է յուրաքանչյուր parameter-ի.
- Կոդ, անուն, տիպ:
- Արժեք (filter type + value string-ի ձևաչափով, կամ plain):
- Երկար արժեքները (>150 char) ճեղքվում են ըստ `","`:

DataSource տեսակի դեպքում report-ը ներառում է DataSource-ի անունը:
Exceptions-ը handle-վում է `Settings.ErrorHandler`-ի կողմից:

