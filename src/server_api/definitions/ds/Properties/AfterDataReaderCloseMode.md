---
title: DataSource.AfterDataReaderCloseMode հատկություն
---

## Նկարագիր

**Դաս՝** [DataSource](../../ds.md)

```c#
public virtual CallMode AfterDataReaderCloseMode
{
    get { return CallMode.None; }
}
```

[AfterDataReaderClose](../Methods/AfterDataReaderClose.md)-ի աշխատանքի երկու տարբերակ կա կախված այս հատկության արժեքից՝
- Ամեն տողի համար առանձին կանչ,
- Մեկ կանչ բոլոր տողերի մշակման համար։

Տե՛ս [օրինակը](../../ds_guide_row_processing.md)։
