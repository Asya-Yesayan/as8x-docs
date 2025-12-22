---
title: Document.StoreGrids(StoreGridsEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [StoreGrid](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/StoreGrid.html)

**Դաս՝** [Document](../../Document.md)

```c#
public virtual Task StoreGrids(StoreGridsEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից փաստաթուղթը [IDocumentService](../../../Services/IDocument/IDocumentService.md).[Store](../../../Services/IDocument/Methods/Store.md) մեթոդի միջոցով տվյալների պահոցում գրանցելուց։

Մեթոդի գերբեռնումը նախատեսված է փաստաթղթի ցանկալի աղյուսակները DOCSG աղյուսակի մեջ չպահպանելու և այլ տեղերում պահպանելու համար։

Այլ տեղում պահպանված աղյուսակները հարկավոր է ավելացնել `args.IgnoreGrids` ցուցակում։

```c#
args.IgnoreGrids.AddRange([Grid("CLIENTS"), Grid("STMDATES")]);
```

Մշակման դեպքում ծրագրավորողը պետք է ապահովի աղյուսակի ճիշտ բեռնումը մշակելով [DoLoadGrids](DoLoadGrids.md) մեթոդը։

