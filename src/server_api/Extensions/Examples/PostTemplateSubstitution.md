---
title: "PostTemplateSubstitution-ի օգտագործման օրինակ"
nav_exclude: true
---

# PostTemplateSubstitution-ի օգտագործման օրինակ

Ստորև նկարագրված է փաստաթղթին կապակցված տպելու ձևանմուշը տպելիս նաև այլ ձևանմուշի տպման օրինակ։ 

Այս օրինակում՝
* [GetReadyTemplateSubstitution](../../Services/ITemplateSubstitution/Methods/GetReadyTemplateSubstitution.md) մեթոդի միջոցով հաշվարկվում է տպելու ձևանմուշի տեղադրվող արժեքները, օգտագործողի կողմից նկարագրված պարամետրերը և վերադարձվում է նշված արժեքները պարունակող օբյեկտը,
* [LoadSubstitutionAndGetStorage](../../Services/ITemplateSubstitution/Methods/LoadSubstitutionAndGetStorage.md) մեթոդի միջոցով բեռնվում է տպելու ձևանմուշը, լրացվում է նախապես հաշվարկված տեղադրվող արժեքներով, պահպանվում է սերվերային պահոցում և վերադարձվում է ֆայլը պարունակող թղթապանակի, ֆայլի անունները `StoragInfo` տիպի օբյեկտով,
* `StoragInfo` տիպի օբյեկտը կապակցվում է [PostTemplateSubstitution](../Definitions/DocumentExtender/Methods/PostTemplateSubstitution.md) մեթոդի [TemplateSubstitutionEventArgs](../Types/Args/TemplateSubstitutionEventArgs.md) պարամետրին [AddSubstitutedFile](../Types/Args/TemplateSubstitutionEventArgs/AddSubstitutedFile.md) մեթոդի միջոցով՝ ապահովելով հիմնական տպելու ձևանմուշը տպելիս մեկ այլ ձևանմուշի տպումը։

```c#
public override async Task PostTemplateSubstitution(Document sender, TemplateSubstitutionEventArgs<TemplateSubstitution> args)
{
    args.Result.Add("IsPostAtomic", true);
    if (args.Parameters != null && args.Parameters.TryGetValue("AddSubstitutedFile", out var value) && (bool)value)
    {
        var templateName = "TempName";
        var substitutionType = SubstitutionType.DOCX;
        var templateSubstitution = await this.templateSubstitutionService.GetReadyTemplateSubstitution(sender,
                                     templateName,
                                     substitutionType,
                                     null);
        var storageInfo = await this.templateSubstitutionService.LoadSubstitutionAndGetStorage(
                                templateSubstitution.PrintTemplateSubstitution,
                                templateName,
                                substitutionType);
        args.AddSubstitutedFile(storageInfo);
    }
}
```
