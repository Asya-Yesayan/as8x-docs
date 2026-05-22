---
title: Add
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.Add() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void Add()
```

Սահմանում է դիտելու ձևի «Ավելացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ [IsDocumentBased](../Properties/IsDocumentBased.md) հատկության false արժեքի դեպքում։

«Ավելացնել» կոնտեքստային ֆունկցիայի վարքագիծը կարգավորվում է [AllowAdd](../Properties/AllowAdd.md), [IsAddEnabled](../Properties/IsAddEnabled.md), [IsDocumentBased](../Properties/IsDocumentBased.md) հատկությունների միջոցով։

**Օրինակ**

```c#
public override void Add()
{
    // ցուցադրվող դիալոգի սահմանում
    var dialog = new TemplateDialog(this, TemplateMode.Add, 0, -1);
    // դիալոգի ցուցադրում
    bool? result = dialog.ShowDialog();
    // դիալոգի կատարման դեպքում դիտելու ձևի պանելի տողերի թարմացում՝ ավելացված տողը ցուցադրելու նպատակով
    if (result.HasValue && result.Value)
    {
        this.Panel.Update(dialog.RowId);
    }
}
```

![Add_Function](../../images/DataView/Add_Function.png)

![Add_Window](../../images/DataView/Add_Window.png)

