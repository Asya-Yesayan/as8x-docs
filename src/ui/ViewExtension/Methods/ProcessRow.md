---
title: ProcessRow
parent: "Մեթոդներ"
grand_parent: "ViewExtension"
---

# ViewExtension.ProcessRow(ExtendableRow) մեթոդ

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public virtual bool ProcessRow(ExtendableRow row)
```

Սահմանում է ընդլայնման՝ յուրաքանչյուր տողի մշակման գործողությունը։ Մեթոդը կանչվում է դիտելու ձևի յուրաքանչյուր տողի համար, երբ [EnableRowProcessing](../Properties/EnableRowProcessing.md) հատկության արժեքը **true** է։

Մեթոդը չմշակելու դեպքում վերադարձնում է **true** և տողերի վրա որևէ փոփոխություն չի կատարվում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| row | ExtendableRow | - | Դիտելու ձևի ընթացիկ տողը, որի սյուների արժեքները հնարավոր է կարդալ կամ թարմացնել։ |

**Վերադարձնում է**

**bool** արժեք, որով սահմանվում է՝ տվյալ տողը ներառվում է դիտելու ձևի արդյունքում, թե ոչ։

**Օրինակ**

```c#
private readonly CacheService cacheService = Settings.ServiceProvider.GetRequiredService<CacheService>();
private Dictionary<string, string> employeeGroupsByNumber;

// տողերի մշակման իրավասության միացում
public override bool EnableRowProcessing => true;

// մինչ տողերի մշակումը պահոցից աշխատակիցների խմբերի բեռնում
public override void BeforeExecute()
{
    this.employeeGroupsByNumber = this.cacheService.CadresCache.Items
        .ToDictionary(item => item.EmployeeNumber, item => item.Group2);
}

// յուրաքանչյուր տողի համար UD_Group2 սյունում աշխատակցի խմբի լրացում
public override bool ProcessRow(ExtendableRow row)
{
    var currentRow = (Client.DS.DropDown.Employees.DataRow)row;
    currentRow["UD_Group2"] = this.employeeGroupsByNumber.GetValueOrDefault(currentRow.EmplNum);
    return true;
}
```

