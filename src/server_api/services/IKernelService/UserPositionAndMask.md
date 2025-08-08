---
title: IKernelService.UserPositionAndMask(byte, byte, short) մեթոդ  
---

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

* `number` - Վերադարձնում է օգտագործողի դիրքի համարը։
* `mask` - Վերադարձնում է օգտագործողի դիմակը։
* `suid` - Համակարգի օգտագործողի ներքին համարը, որի համար վերադարձվելու են տվյալները։ 
  Չփոխանցելու դեպքում վերադարձվում են ընթացիկ օգտագործողի համար։
