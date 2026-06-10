---
title: Delete
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.Delete() մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual void Delete()
```

Սահմանում է ծառ-տեղեկատուի **«Հեռացնել»** կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը։

Մեթոդը չմշակելու դեպքում ընթացիկ տողը հեռացվում է ծառից։

«Հեռացնել» կոնտեքստային ֆունկցիայի հասանելիությունը կարգավորվում է [AllowDelete](../Properties/AllowDelete.md) հատկության միջոցով։

**Օրինակ**

```c#
public override void Delete()
{
    // ընթացիկ տողի ստացում
    var currentItem = this.Panel.GetCurrentItem();
    if (currentItem != null)
    {
        // ընթացիկ տողի փաստաթղթի բեռնում թղթապանակից
        var document = DocumentHelper.LoadFromFolder(this.Name, currentItem.Key);
        // փակ ստորաբաժանումների հեռացման արգելք
        if (document != null && (bool)document["IsClosed"])
        {
            throw new ASException("Փակ ստորաբաժանումը հնարավոր չէ հեռացնել");
        }
        // ստուգման հաջող անցման դեպքում բազային հեռացման կանչ
        base.Delete();
    }
}
```
