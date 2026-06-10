---
title: InitContextFunctions
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.InitContextFunctions() մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual PopupMenu InitContextFunctions()
```

Ստեղծում և վերադարձնում է ծառ-տեղեկատուի կոնտեքստային մենյուն (**PopupMenu**)։

Մեթոդը չմշակելու դեպքում մենյուում ավտոմատ կերպով ցուցադրվում են համակարգային կոնտեքստային ֆունկցիաները («Ավելացնել», «Հեռացնել», «Դիտել/Խմբագրել», ․․․), որոնց հասանելիությունը կարգավորվում է [AllowAddNode](../Properties/AllowAddNode.md), [AllowDelete](../Properties/AllowDelete.md), [AllowEdit](../Properties/AllowEdit.md) և համանման հատկությունների միջոցով։

**Օրինակ**

```c#
// ծառ-տեղեկատուի կոնտեքստային մենյուի սահմանում
public override PopupMenu InitContextFunctions()
{
    // ծառ-տեղեկատուի համակարգային կոնտեքստային մենյուի ստացում
    var menu = this.Panel.InitContextMenu();
    // կոնտեքստային մենյուում «Բանաձևերի ցանկ» կոնտեքստային ֆունկցիայի ավելացում
    menu.AddContextFunction(nameof(ShowList), "Բանաձևերի ցանկ", ShowList, FunctionAvailability.CurrentRow);
    return menu;

    // Կարևոր․ եթե սկզբից չստացվեր համակարգային կոնտեքստային մենյուն և ստեղծվեր նորը (new PopupMenu();),
    // ապա մենյուում չէին ցուցադրվի համակարգային կոնտեքստային ֆունկցիաները («Դիտել/Խմբագրել», «Պատճենել», «Հեռացնել», ...)
}
```
