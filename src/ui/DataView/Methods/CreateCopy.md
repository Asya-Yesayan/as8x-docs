---
title: CreateCopy
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.CreateCopy() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void CreateCopy()
```

Սահմանում է դիտելու ձևի «Պատճենել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ [IsDocumentBased](../Properties/IsDocumentBased.md) հատկության false արժեքի դեպքում։

Մեթոդը չմշակելու դեպքում որևէ գործողություն չի կատարվում։

«Պատճենել» կոնտեքստային ֆունկցիայի վարքագիծը կարգավորվում է [AllowCreateCopy](../Properties/AllowCreateCopy.md), [IsCreateCopyEnabled](../Properties/IsCreateCopyEnabled.md), IsDocumentBased հատկությունների միջոցով։

**Օրինակ**

```c#
public override void CreateCopy()
{
    // ընթացիկ տողի ստացում
    var focusedRow = (DataRow)this.Panel.FocusedRow();
    // ցուցադրվող դիալոգի սահմանում
    var dialog = new EntArbitraryInfoRequestDialog(DialogWindowMode.NewMode, focusedRow.Id, true);
    // դիալոգի ցուցադրում
    var dialogResult = dialog.ShowDialog();
    // դիալոգի կատարման դեպքում դիտելու ձևի պանելի տողերի թարմացում՝ պատճենման արդյունքում ավելացված տողը ցուցադրելու նպատակով
    if (dialogResult.HasValue && dialogResult.Value)
    {
        this.Panel.Update(dialog.ID);
    }
}
```

