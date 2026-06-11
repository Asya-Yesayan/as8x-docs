---
title: ErrorDetails
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.ErrorDetails հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public List<ErrorDetail> ErrorDetails { get; set; }
```

Վերադարձնում կամ նշանակում է սերվերի կողմից վերադարձված սխալի մանրամասների ցուցակը։

Նշանակվում է, երբ սերվերի կողմից սխալի պատասխանում փոխանցված են բազմակի սխալ-գրառումներ (օրինակ՝ SQL սխալների ցուցակ, որոնք ստացվել են [DetailedException](../../DetailedException.md)-ից)։ UI-ն այս ցուցակը կարող է օգտագործել՝ սխալի պատուհանում մանրամասներն առանձին տողերով ցուցադրելու համար։
