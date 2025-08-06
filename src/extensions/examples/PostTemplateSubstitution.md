---
title: "PostTemplateSubstitution-ի օգտագործման օրինակ" 
---

Ստորև նկարագրված է փաստաթղթին կապակցված տպելու ձևանմուշը տպելիս նաև այլ ձևանմուշի տպման օրինակ։ 

Այս օրինակում՝
* [GetReadyTemplateSubstitution](../../server_api/services/ITemplateSubstitutionService/GetReadyTemplateSubstitution.md) մեթոդի միջոցով հաշվարկվում է տպելու ձևանմուշի տեղադրվող արժեքները, օգտագործողի կողմից նկարագրված պարամետրերը և վերադարձվում է նշված արժեքները պարունակող օբյեկտը՝ ստանալով տպելու ձևանմուշի ներքին անունը, տեսակը և կապակված փաստաթուղթը,
* [LoadAndSubstitute](../../server_api/services/ITemplateSubstitutionService/LoadAndSubstitute.md) մեթոդի միջոցով բեռնվում է տպելու ձևանմուշը, լրացվում է [GetReadyTemplateSubstitution](../../server_api/services/ITemplateSubstitutionService/GetReadyTemplateSubstitution.md) մեթոդի միջոցով նախապես հաշվարկված տեղադրվող արժեքներով, պահպանվում է ֆայլը սերվերային պահոցում և վերադարձվում է ֆայլը պարունակող թղթապանակի, ֆայլի անունները `StoragInfo` տիպի օբյեկտով՝ ստանալով տպելու ձևանմուշի ներքին անունը, տեսակը և նախապես հաշվարկված տեղադրվող արժեքները։
* [LoadAndSubstitute](../../server_api/services/ITemplateSubstitutionService/LoadAndSubstitute.md) մեթոդի միջոցով ստացված `StoragInfo` տիպի օբյեկտը կապակցվում է [PostTemplateSubstitution](../definitions/document_extender/PostTemplateSubstitution.md) մեթոդի [TemplateSubstitutionEventArgs](../types/args/TemplateSubstitutionEventArgs.md) պարամետրին [AddSubstitutedFile](../types/args/TemplateSubstitutionEventArgs/AddSubstitutedFile.md) մեթոդի միջոցով՝ ապահովելով հիմնական տպելու ձևանմուշը տպելիս մեկ այլ ձևանմուշի տպումը։

```c#
public override async Task PostTemplateSubstitution(Document sender, TemplateSubstitutionEventArgs<TemplateSubstitution> args)
{
    string templateName = "Cli_FIZ";
    var substitutionType = SubstitutionType.DOCX;
    var templateSubstiution = await this.templateSubstitutionService.GetReadyTemplateSubstitution(
                                            sender, 
                                            templateName, 
                                            substitutionType, 
                                            null);
    var storageInfo = await this.templateSubstitutionService.LoadSubstitutionAndGetStorage(
                                                templateSubstiution.PrintTemplateSubstitution, 
                                                templateName, 
                                                substitutionType);
    args.AddSubstitutedFile(storageInfo);
}
```
