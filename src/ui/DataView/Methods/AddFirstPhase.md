---
title: AddFirstPhase
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AddFirstPhase() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
protected virtual void AddFirstPhase()
```

Ավելացնում է progress-ի առաջին (initial) փուլը "ProcessingData" անվամբ:

Կոչվում է `BackgroundWorkerDoWorkEventHandler`-ի կողմից background thread-ում:
Override-ի դեպքում կարելի է փոխել initial phase-ի անունը կամ total-ը:

