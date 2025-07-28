---
title: Document.PostTemplateSubstitution(Document, TemplateSubstitutionEventArgs<TemplateSubstitution>) մեթոդ
---

```c#
public virtual Task PostTemplateSubstitution(Document sender, TemplateSubstitutionEventArgs<TemplateSubstitution> args)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և անջատված է [TemplateSubstitutionIsExtended](TemplateSubstitutionIsExtended.md) հատկությունը։ 

Հանդիսանում է 4x համակարգում նկարագրված PostTemplateSubstitution իրադարձության համարժեքը:

Մեթոդում իմաստ չունի փոխել փաստաթղթի հատկությունները, գեներացնել հաշվառումները և այլն, քանի որ փաստաթուղթը արդեն գրանցվել է տվյալների պահոցում։

Հանդիսանում է 4x համակարգում նկարագրված [BeforeCommit](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCommit.html) իրադարձության համարժեքը:

