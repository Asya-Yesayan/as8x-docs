---
title: "TemplateSubstitutionEventArgs դաս" 
---

Այս դասը պարունակում է փաստաթղթի տպելու ձևանմուշի տվյալներ և օգտագործվում է [DocumentExtender](../../definitions/document_extender.md)-ի [PostTemplateSubstitution](../../definitions/document_extender/PostTemplateSubstitution.md), [PostTemplateSubstitutionEx](../../definitions/document_extender/PostTemplateSubstitutionEx.md) մեթոդներում։

```c#
public class TemplateSubstitutionEventArgs<T> where T : ITemplateSubstitution
{
    public Dictionary<string, bool> Mode { get; set; }
    public Dictionary<string, object> Parameters { get; set; }
    public T Result { get; set; }
}
```

**Հատկություններ**

* `Mode` - Տպելու ձևանմուշի տվյալների խմբերի և յուրաքանչյուր խմբի թույլատրված լինելու հայտանիշների բազմությունը։
* `Parameters` - Փաստաթղթի [TemplateSubstitutionParameters](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/TemplateSubstitutionParameters.html) մեթոդի կանչի արդյունքում ձևավորված տպելու ձևանմուշի լրացվող արժեքների բազմությունը։
* `Result` - Փաստաթղթի [TemplateSubstitution](../../../server_api/definitions/document/TemplateSubstitution.md) մեթոդի կանչի արդյունքում ձևավորված տպելու ձևանմուշի լրացվող արժեքների բազմությունը։