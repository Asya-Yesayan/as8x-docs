---
title: OnNodeValidation
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.OnNodeValidation(OnNodeValidationEventArgs args) մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual void OnNodeValidation(OnNodeValidationEventArgs args)
```

Սահմանում է ծառի տողի խմբագրման երկխոսության պատուհանում **«OK»** կոճակի սեղմման արդյունքում կատարվող ստուգման գործողությունը։

Մեթոդը չմշակելու դեպքում ոչ մի լրացուցիչ ստուգում չի կատարվում։ Ժառանգ դասերը կարող են այս մեթոդով կատարել մուտքագրված տվյալների վալիդացիա և սխալի դեպքում սահմանել համապատասխան վիճակը args պարամետրի միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | OnNodeValidationEventArgs | - | Տողի ստուգման իրադարձության արգումենտները, որոնք պարունակում են ստուգման ենթակա տողի տվյալները և ստուգման արդյունքը սահմանելու հնարավորությունը։ |

**Օրինակ**

```c#
public override void OnNodeValidation(OnNodeValidationEventArgs args)
{
    // լրացուցիչ ստուգում նոր հանգույց ավելացնելու դեպքում՝ կոդը պետք է լինի A-Z միջակայքում
    if (args.DialogWindow.Mode == DialogWindowMode.NewMode && (args.Key.CompareTo("A") < 0 || args.Key.CompareTo("Z") > 0))
    {
        // վալիդացիայի ձախողման դեպքում սխալի հաղորդագրության սահմանում
        args.DialogWindowValidationArgs.ErrorMessage = LanguageService.IsArmenian ? "Ավելացնել նոր հանգույցներ հնարավոր է միայն A-Z կոդերով"
                                                                                  : "It is possible to add new nodes only with codes from A to Z";
        // վալիդացիայի ձախողման հայտանիշի սահմանում
        args.DialogWindowValidationArgs.IsValid = false;
        // կուրսորի տեղափոխում կոդը մուտքագրելու դաշտ
        args.DialogWindowValidationArgs.SetFocusTo = args.DialogWindow.GetControl("codeControl");
    }
}
```
