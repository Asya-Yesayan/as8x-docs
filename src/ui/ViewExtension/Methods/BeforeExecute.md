---
title: BeforeExecute
parent: "Մեթոդներ"
grand_parent: "ViewExtension"
---

# ViewExtension.BeforeExecute() մեթոդ

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public virtual void BeforeExecute()
```

Նախատեսված է ընդլայնման տողերի մշակումից առաջ կատարվող գործողությունների սահմանման համար։ Մեթոդը կանչվում է [ProcessRow](ProcessRow.md) մեթոդի առաջին կանչից առաջ՝ մեկ անգամ՝ ընդլայնման յուրաքանչյուր կիրառման ընթացքում։

Մեթոդը չմշակելու դեպքում որևէ գործողություն չի կատարվում։

**Օրինակ**

```c#
private readonly CacheService cacheService = Settings.ServiceProvider.GetRequiredService<CacheService>();
private Dictionary<string, string> employeeGroupsByNumber;

// մինչ տողերի մշակումը պահոցից աշխատակիցների խմբերի բեռնում Dictionary-ով՝ արագ որոնման համար
public override void BeforeExecute()
{
    this.employeeGroupsByNumber = this.cacheService.CadresCache.Items
        .ToDictionary(item => item.EmployeeNumber, item => item.Group2);
}
```
