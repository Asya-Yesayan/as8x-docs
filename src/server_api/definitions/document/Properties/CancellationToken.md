---
title: Document.CancellationToken հատկություն
---

## Նկարագիր

**Դաս՝** [Document](../document.md)

```c#
public CancellationToken CancellationToken { get; internal set; }
```

Փաստաթղթի գրանցման ժամանակ դադարեցման տոկեն։ 

Փաստաթղթի գրանցման ժամանակ կանչվող մեթոդներում ([Validate](Validate.md), [Action](Action.md)...) տալիս է հնարավորություն ստուգելու արդյոք UI-ում փաստաթղթի գրանցումը ընդատված է "Դադարեցնել" կոճակի միջոցով , թե ոչ։

