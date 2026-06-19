---
title: AfterExecute
parent: "Մեթոդներ"
grand_parent: "ViewExtension"
---

# ViewExtension.AfterExecute() մեթոդ

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public virtual void AfterExecute()
```

Նախատեսված է ընդլայնման տողերի մշակումից հետո կատարվող գործողությունների սահմանման համար։ Մեթոդը կանչվում է [ProcessRow](ProcessRow.md) մեթոդի վերջին կանչից հետո՝ մեկ անգամ՝ ընդլայնման յուրաքանչյուր կիրառման ընթացքում։

Մեթոդը չմշակելու դեպքում որևէ գործողություն չի կատարվում։

**Օրինակ**

```c#
private int processedCount;

public override bool EnableRowProcessing => true;

// մինչ տողերի մշակումը հաշվիչի սկզբնավորում
public override void BeforeExecute()
{
    this.processedCount = 0;
}

// յուրաքանչյուր տողի համար մշակված տողերի քանակի ավելացում
public override bool ProcessRow(ExtendableRow row)
{
    this.processedCount++;
    return true;
}

// բոլոր տողերի մշակումից հետո ընդհանուր մշակված տողերի քանակի լոգավորում
public override void AfterExecute()
{
    System.Diagnostics.Debug.WriteLine($"Մշակվել է {this.processedCount} տող");
}
```
