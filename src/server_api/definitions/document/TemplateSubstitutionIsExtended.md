---
title: Document.TemplateSubstitutionIsExtended հատկություն
---

```c#
public virtual bool TemplateSubstitutionIsExtended { get; }
```

Այս հատկության `true` արժեքի դեպքում փաստաթղթի տպելու ձևանմուշի լրացվող արժեքների հաշվարկի համար անհրաժեշտ է մշակել [TemplateSubstitutionEx](TemplateSubstitutionEx.md) մեթոդի միջոցով՝ [TemplateSubstitution](TemplateSubstitution.md)-ի փոխարեն։

Այս մեթոդի մշակման դեպքում տպելու ձևանմուշում արժեքները ավելանում են տիպիզացված ձևով, ոչ թե object տիպով։

