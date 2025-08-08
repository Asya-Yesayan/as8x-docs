---
title: Document.TemplateSubstitutionIsExtended հատկություն
---

## Նկարագիր

**Դաս՝** [Document](../document.md)

```c#
public virtual bool TemplateSubstitutionIsExtended { get; }
```

Այս հատկության `true` արժեքի դեպքում փաստաթղթի տպելու ձևանմուշի լրացվող արժեքների հաշվարկը անհրաժեշտ է իրականացնել [TemplateSubstitutionEx](TemplateSubstitutionEx.md) մեթոդի միջոցով, հակառակ դեպքում՝ [TemplateSubstitution](TemplateSubstitution.md) մեթոդի միջոցով։

Այս մեթոդի մշակման դեպքում տպելու ձևանմուշում արժեքները ավելացվում են տիպիզացված ձևով, ոչ թե object տիպով։

Հատկության լռությամբ արժեքը `false` է։
