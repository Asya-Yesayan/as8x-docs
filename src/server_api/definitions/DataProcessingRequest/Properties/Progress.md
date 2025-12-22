---
title: DataProcessingRequest.Progress հատկություն
---

## Նկարագիր

**Դաս՝** [DataProcessingRequest](../DataProcessingRequest.md)

```c#
public DPRExecutionProgress Progress { get; }
```

Վերադարձնում է տվյալների մշակման հարցման (`DPR`-ի) կատարման պրոգրեսը:

Այս օբյեկտի միջոցով հնարավոր է կառավարել կատարման փուլերը, UI-ում ցույց տալ այդ փուլերը և UI-ում ցույց տալ հաղորդագրության պատուհան ([MessageBox](../../../Types/UIRequestExecutionProgress/MessageBox.md)):

Տե՛ս օգտագործման [օրինակը](../../../Examples/dpr/code.md)։
