---
title: Edit
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.Edit() մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual void Edit()
```

Սահմանում է ծառ-տեղեկատուի **«Դիտել/Խմբագրել»** կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը։

Մեթոդը չմշակելու դեպքում բացվում է ընթացիկ տողում պարունակվող փաստաթղթի պատուհանը։

«Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի հասանելիությունը կարգավորվում է [AllowEdit](../Properties/AllowEdit.md), [AllowView](../Properties/AllowView.md) հատկությունների միջոցով։

**Օրինակ**

```c#
public override void Edit()
{
    // ընթացիկ տողի ստացում
    var currentItem = this.Panel.GetCurrentItem();
    if (currentItem != null)
    {
        // ընթացիկ տողի փաստաթղթի բեռնում թղթապանակից
        var document = DocumentHelper.LoadFromFolder(this.Name, currentItem.Key);
        if (document != null)
        {
            // դաշտերի արժեքների սահմանում (օրինակ՝ "Note" դաշտի)
            document["Note"] = "Edited";
            // փաստաթղթի ցուցադրում խմբագրման իրավասությանը համապատասխան ռեժիմով
            document.Show(!this.AllowEdit, this.Panel.Id);
        }
    }
}
```
