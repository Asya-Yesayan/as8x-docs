---
title: CreateCopy
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.CreateCopy() մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual void CreateCopy()
```

Սահմանում է ծառ-տեղեկատուի **«Պատճենել»** կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը։

Մեթոդը չմշակելու դեպքում բացվում է ընթացիկ տողում պարունակվող փաստաթղթի պատճենի պատուհանը։

«Պատճենել» կոնտեքստային ֆունկցիայի հասանելիությունը կարգավորվում է [AllowCopy](../Properties/AllowCopy.md) հատկության միջոցով։

**Օրինակ**

```c#
public override void CreateCopy()
{
    // ընթացիկ տողի ստացում
    var currentItem = this.Panel.GetCurrentItem();
    if (currentItem != null)
    {
        // ընթացիկ տողի փաստաթղթի պատճենի ստեղծում՝ դաշտերի արժեքների կրկնօրինակումով
        var copyDoc = (TPlace)DocumentHelper.Copy(currentItem.ISN);
        if (copyDoc != null)
        {
            // պատճենում նոր կոդով՝ սկզբնական դատարկ արժեքով
            copyDoc.Code = string.Empty;
            // պատճենի ցուցադրում ընթացիկ վահանակում
            copyDoc.Show(supportDocumentPanelId: this.Panel.Id);
        }
    }
}
```
