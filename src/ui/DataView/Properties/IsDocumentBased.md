---
title: IsDocumentBased
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.IsDocumentBased հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool IsDocumentBased { get; }
```

Սահմանում է դիտելու ձևի տողերի փաստաթուղթ հանդիսանալու հայտանիշը։

Հատկության լռությամբ արժեքը true է, եթե դիտելու ձևի տողերը ներկայացնող դասը իրականացնում է `IRowWithISN` ինտերֆեյսը։

**Օրինակ**

```c#
public class TemplUDPDataRow : ExtendableRow, IRowWithISN
{
    public string Name { get; set; }
    public int fISN { get; set; }

    public int GetISN()
    {
        return this.fISN;
    }
}
```

```c#
public class TemplUDP : DataView<TemplUDPDataRow, ParameterCollection>
```