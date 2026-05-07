---
title: GetUpdatedRows
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.GetUpdatedRows(object key) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual List<R> GetUpdatedRows(object key)
```

Ստանում է server-ից թարմ rows-ը ըստ `key`-ի:

DataSource տեսակի դեպքում կատարում է `ds.ExecuteDS`:
Այլ տեսակների դեպքում կնետի `NotImplementedException`
(subclass-ն պետք է override կատարի):

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| key | object | - | Թարմ ստանալիք row-ի բանալին: Կարող է լինել. - Մեկ արժեք (string-ի եթե string է, ObjectId-ն, int, կամ այլ տիպ): - `IEnumerable` (ոչ `string`)՝ batch update-ի համար: |

**Վերադարձնում է**

Server-ից ստացված թարմ <typeparamref name="R"/> rows-ի ցանկ:

