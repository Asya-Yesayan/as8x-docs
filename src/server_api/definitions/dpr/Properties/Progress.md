---
title: DataProcessingRequest.Progress հատկություն
---

## Նկարագիր

**Դաս՝** [DataProcessingRequest](../dpr.md)

```c#
public DPRExecutionProgress Progress { get; }
```

Վերադարձնում է տվյալների մշակման հարցման (`DPR`-ի) կատարման պրոգրեսը:

Այս օբյեկտի միջոցով հնարավոր է կառավարել կատարման փուլերը, UI-ում ցույց տալ այդ փուլերը և UI-ում ցույց տալ հաղորդագրության պատուհան ([MessageBox](../../types/UIRequestExecutionProgress/MessageBox.md)):

Տե՛ս օգտագործման [օրինակը](../../examples/dpr/code.md)։
