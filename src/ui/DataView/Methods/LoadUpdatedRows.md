---
title: LoadUpdatedRows
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.LoadUpdatedRows(object key) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public int LoadUpdatedRows(object key)
```

Թարմացնում է `key`-ին համապատասխան row(ներ)ը Rows հավաքածուում:

Նախապայման: `IsUpdatable` պետք է `true` լինի, հակառակ դեպքում
կնետվի `NotImplementedException`:

Ալգորիթմ.
1. `GetUpdatedRows(key)` — server-ից ստանում է թարմ rows-ը:
2. `AfterLoadUpdatedRows` — post-processing hook:
3. Rows-ում գտնում է key-ին matching rows-ը (`IMatchedUpdateKey.Matched`):
4. Ըստ արդյունքի.
- 0 matched + 0 updated → return -1:
- 0 matched + N updated → ավելացնում է նոր rows:
- 1 matched + 1 updated → replace:
- N matched / N updated → batch replace/delete/add:

Side effects: `Panel.RowAdded`, `Panel.RowDeleted`,
`Panel.ClearSelection`, `Panel.UpdateSelectedRow`:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| key | object | - | Թարմ ստանալիք row-ի բանալին: Կարող է լինել. - Մեկ արժեք — update/add/delete մեկ row: - `IEnumerable` (ոչ `string`) — batch update: |

