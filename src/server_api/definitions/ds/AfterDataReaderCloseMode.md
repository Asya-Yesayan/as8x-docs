---
title: DataSource.AfterDataReaderCloseMode հատկություն
---

```c#
public virtual CallMode AfterDataReaderCloseMode
{
    get { return CallMode.None; }
}
```

[AfterDataReaderClose](AfterDataReaderClose.md)-ի աշխատանքի երկու տարբերակ կա կախված այս հատկության արժեքից՝
- Ամեն տողի համար առանձին կանչ,
- Մեկ կանչ բոլոր տողերի մշակման համար։

Տե՛ս [օրինակը](../ds_guide_row_processing.md#օրինակ-2-1)։
