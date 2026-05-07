---
title: IsProgressCanceled
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.IsProgressCanceled() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
protected bool IsProgressCanceled()
```

Ստուգում է՝ արդյոք progress-ը չեղարկվել է օգտագործողի կողմից:

Ստուգում ըստ `Type`-ի.
- `DataSource` → `dataSourceProgressWindow?.Canceled` OR
`dataSourceProgressControlInside?.Canceled`:
- `SelfCalculated` → `Progress?.Canceled` OR `ProgressInside?.Canceled`:
- Այլ → `false`:

Կոչել background thread-ում data loading loop-ի ժամանակ:

**Վերադարձնում է**

`true` → progress-ը Cancel է կատարվել:
`false` → progress-ը դեռ ակտիվ է կամ progress-ը գոյություն չունի:

