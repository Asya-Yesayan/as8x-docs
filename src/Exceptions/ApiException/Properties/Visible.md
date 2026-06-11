---
title: Visible
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.Visible հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public bool Visible { get; set; } = true;
```

Վերադարձնում կամ նշանակում է, արդյոք սխալը պետք է ցուցադրվի օգտագործողին։

Լռությամբ արժեքը **true** է. այդ դեպքում սխալի պատուհանը UI-ի կողմից ցուցադրվում է։ **false** արժեքի դեպքում սխալը մշակվում է՝ առանց UI-ում սխալի պատուհանը ցուցադրելու։ Այս հատկությունը նշանակվում է **false** այն դեպքերում, երբ սերվերից ստացված սխալն առաջացած է [InvisibleException](../../InvisibleException.md)-ից։
