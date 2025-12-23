---
title: Document.CancellationToken հատկություն
---

## Նկարագիր

**Դաս՝** [Document](../Document.md)

```c#
public CancellationToken CancellationToken { get; internal set; }
```

Փաստաթղթի գրանցման ժամանակ դադարեցման տոկեն։ 

Փաստաթղթի գրանցման ժամանակ կանչվող մեթոդներում ([Validate](../Methods/Validate.md), [Action](../Methods/Action.md)...) տալիս է հնարավորություն ստուգելու արդյոք UI-ում փաստաթղթի գրանցումը ընդատված է "Դադարեցնել" կոճակի միջոցով , թե ոչ։

