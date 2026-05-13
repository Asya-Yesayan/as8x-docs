---
title: StoreValuesIsChecked
nav_exclude: true
---

# DialogWindow.StoreValuesIsChecked հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public bool StoreValuesIsChecked { get; }
```

Վերադարձնում է **true**, եթե երկխոսության պատուհանի արժեքների պահպանման ռեժիմը միացված է (օգտագործողը նշել է երկխոսության պատուհանի վերնագրի վահանակում գտնվող համապատասխան կոճակը)։ Եթե արժեքների պահպանման հնարավորությունը միացված չէ (տես [AllowStoreValues](AllowStoreValues.md)), միշտ վերադարձնում է **false**։

Արժեքը կարող է փոխվել **Ctrl+S** ստեղների համակցության կամ պահպանման կոճակի սեղմման ճանապարհով։
