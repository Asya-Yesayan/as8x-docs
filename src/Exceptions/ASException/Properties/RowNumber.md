---
title: RowNumber
parent: "Հատկություններ"
grand_parent: "ASException"
---

# ASException.RowNumber հատկություն

**Դաս՝** [ASException](../../ASException.md)

```c#
public int RowNumber { get; set; } = -1;
```

Վերադարձնում կամ նշանակում է սխալի հետ կապված ցուցակի (Grid-ի) տողի համարը։

Լռությամբ արժեքը **-1** է. այդ արժեքի դեպքում սխալը կոնկրետ տողի հետ կապված չէ։ Արժեքավորվում է [ASException](../Methods/ASException.md) դասի կոնստրուկտորի **rowNum** պարամետրով, երբ սխալը կապված է [Field](Field.md) հատկությամբ նշված ցուցակի (Grid-ի) կոնկրետ տողի հետ։
