---
title: UserPositionAndMask
parent: "Մեթոդներ"
grand_parent: "IKernelService"
---

# IKernelService.UserPositionAndMask(byte, byte, short) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.UserPositionAndMask](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/UserPositionAndMask.html)

**Դաս՝** [IKernelService](../IKernelService.md)

```c#
public void UserPositionAndMask(out byte number, 
                                out byte mask, 
                                short suid = -1)
```

Վերադարձնում է համակարգի օգտագործողի դիրքի համարը և դիմակը։ 
Նախատեսված է տվյալների աղբյուրների SQL հարցումներում օգտագործողի իրավասությունների ստուգման համար։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| number          | byte                 | -              | Վերադարձնում է օգտագործողի դիրքի համարը։ |
| mask            | byte                 | -              | Վերադարձնում է օգտագործողի դիմակը։ |
| suid            | short                | -1             | Համակարգի օգտագործողի ներքին համարը, որի համար վերադարձվելու են տվյալները։ Չփոխանցելու դեպքում վերադարձվում են ընթացիկ օգտագործողի համար։ |
