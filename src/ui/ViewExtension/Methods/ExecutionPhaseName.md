---
title: ExecutionPhaseName
parent: "Մեթոդներ"
grand_parent: "ViewExtension"
---

# ViewExtension.ExecutionPhaseName() մեթոդ

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public virtual string ExecutionPhaseName()
```

Սահմանում է ընդլայնման կատարման փուլի (phase) անունը։ Փուլի անունը ցուցադրվում է դիտելու ձևի կատարման պրոգրեսի պատուհանում՝ ընդլայնման կիրառման ընթացքում։

Մեթոդը չմշակելու դեպքում վերադարձնում է **null**, որի դեպքում փուլի անունը պրոգրեսի պատուհանում չի ցուցադրվում։

**Օրինակ**

```c#
private readonly CacheService cacheService = Settings.ServiceProvider.GetRequiredService<CacheService>();
private Dictionary<string, string> employeeGroupsByNumber;

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

// ընդլայնման կատարման փուլի անվան սահմանում՝ պրոգրեսի պատուհանում ցուցադրման համար
public override string ExecutionPhaseName()
{
    return "Աշխատակիցների տվյալների խմբագրում";
}
```
