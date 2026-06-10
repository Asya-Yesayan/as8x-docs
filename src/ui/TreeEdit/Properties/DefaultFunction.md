---
title: DefaultFunction
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.DefaultFunction հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual string DefaultFunction { get; internal set; }
```

Սահմանում է ծառ-տեղեկատուի լռությամբ բացվող կոնտեքստային ֆունկցիան՝ ընթացիկ տողի կրկնակի սեղմում կատարելիս։ Հատկությունը ConfigureFromDefinition մեթոդի կանչի արդյունքում չի արժեքավորվում. ցանկալի արժեքը սահմանվում է ժառանգող դասում՝ override-ի միջոցով։

Հատկության արժեքավորված չլինելու դեպքում լռությամբ բացվում է **«Դիտել/Խմբագրել»** կոնտեքստային ֆունկցիան։

**Օրինակ**

```c#
// ծառ-տեղեկատուի կոնտեքստային մենյուի սահմանում
public override PopupMenu InitContextFunctions()
{
    // ծառ-տեղեկատուի համակարգային կոնտեքստային մենյուի ստացում
    var p = this.Panel.InitContextMenu();
    // կոնտեքստային մենյուում «Բանաձևերի ցանկ» կոնտեքստային ֆունկցիայի ավելացում
    p.AddContextFunction(nameof(ShowList), "Բանաձևերի ցանկ", ShowList, FunctionAvailability.CurrentRow);
    return p;

    // Կարևոր․ եթե սկզբից չստացվեր համակարգային կոնտեքստային մենյուն և ստեղծվեր նորը (new PopupMenu();), 
    // ապա մենյուում չէին ցուցադրվի համակարգային կոնտեքստային ֆունկցիաները («Դիտել/Խմբագրել», «Պատճենել», «Հեռացնել», ...)
}

// ընթացիկ տողի կրկնակի սեղմման դեպքում լռությամբ կատարվում է «Բանաձևերի ցանկ» կոնտեքստային ֆունկցիան
public override string DefaultFunction => nameof(ShowList);
```
