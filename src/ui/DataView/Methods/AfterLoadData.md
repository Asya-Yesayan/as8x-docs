---
title: AfterLoadData
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AfterLoadData() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void AfterLoadData()
```

Մեթոդը կանչվում է դիտելու ձևի տվյալները բեռնելուց առաջ։ Սովորաբար օգտագործվում է լրացուցիչ հաշվարկներ, տվյալների թարմացումներ իրականացնելու համար։

**Օրինակ**

```c#
public override void AfterLoadData()
{
    foreach (var row in this.Rows)
    {
        if (row.Comment == "Ծառայության գնացուցակ (ՀԾ-Ձեռնարկություն)")
        {
            row.Comment = string.Empty;
        }
    }
}
```