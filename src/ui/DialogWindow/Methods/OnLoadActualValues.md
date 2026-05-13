---
title: OnLoadActualValues
nav_exclude: true
---

# DialogWindow.OnLoadActualValues() մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public virtual void OnLoadActualValues();
```

Բեռնում է երկխոսության պատուհանի դաշտերի փաստացի (պահպանված) արժեքները՝ պահպանվող արժեքների ցուցակի (**StoredValues**) միջոցով։ Մեթոդը կատարում է ձևափոխություն աջակցվող դաշտերի համար ([StoreValueDescriptor.Supported]) և **LoadingSavedValuesToControls** ճշտում է ձևափոխման ընթացքում։ Եթե [LoadStoredValues](../Properties/LoadStoredValues.md) ճշմարիտ չէ, ոչինչ չի կատարում։
