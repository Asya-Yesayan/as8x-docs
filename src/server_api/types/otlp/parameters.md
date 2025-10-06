---
layout: page
title: "OTLP-ի աշխատանքի համար անհրաժեշտ պարամետրեր"
sublinks: 
- { title: "OTLPAUTOPROCTRACING", ref: otlpautoproctracing }
- { title: "OTLPDOCSMETERENABLED", ref: otlpdocsmeterenabled }
- { title: "OTLPDPRMETERENABLED", ref: otlpdprmeterenabled } 
- { title: "OTLPDSMETERENABLED", ref: otlpdsmeterenabled } 
- { title: "OTLPDOCSTRACING", ref: otlpdocstracing }
- { title: "OTLPDPRTRACING", ref: otlpdprtracing }
- { title: "OTLPDSTRACING", ref: otlpdstracing }
- { title: "OTLPENABLED", ref: otlpenabled }
- { title: "OTLPENDPOINT", ref: otlpendpoint }
- { title: "OTLPPROCMETERENABLED", ref: otlpprocmeterenabled }
- { title: "OTLPPROTOCOL", ref: otlpprotocol }
---

## Բովանդակություն

- [Ներածություն](#ներածություն)
- [OTLPAUTOPROCTRACING](#otlpautoproctracing)
- [OTLPDOCSMETERENABLED](#otlpdocsmeterenabled)
- [OTLPDPRMETERENABLED](#otlpdprmeterenabled)
- [OTLPDSMETERENABLED](#otlpdsmeterenabled)
- [OTLPDOCSTRACING](#otlpdocstracing)
- [OTLPDPRTRACING](#otlpdprtracing)
- [OTLPDSTRACING](#otlpdstracing)
- [OTLPENABLED](#otlpenabled)
- [OTLPENDPOINT](#otlpendpoint)
- [OTLPPROCMETERENABLED](#otlpprocmeterenabled)
<div class="version-block" data-product-id="bank" data-version="250626.000" markdown="1">

- [OTLPPROTOCOL](#otlpprotocol)

</div>

## Ներածություն

<div class="version-block" data-product-id="bank" data-version="250626.000" markdown="1">

Այս բաժնում նշված բոլոր պարամետրերը կազդեն միայն այն դեպքում, երբ [OTLPENABLED](#otlpenabled) պարամետրի արժեքը **true** է և [OTLPENDPOINT](#otlpendpoint)-ում նշված է OTLP collector-ի հասցեն։

</div>

<div class="version-block" data-product-id="bank" data-version-exclude="250626.000" markdown="1">

Այս բաժնում նշված բոլոր պարամետրերը կազդեն միայն այն դեպքում, երբ [OTLPENABLED](#otlpenabled) պարամետրի արժեքը **true** է։

</div>

## OTLPAUTOPROCTRACING

Պարամետրում հարկավոր է նշել trace լինող [ժամաչափով պարբերական ֆունկցիաների](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/CreateCallBackOnTimer.html) անունները՝ իրարից անջատելով ստորակետերով։ Օրինակ **"Receive, BLAutoCheckStop"**:

Եթե պարամետրի արժեքը սկսվում է "-"-ով, ապա բոլոր [ժամաչափով պարբերական ֆունկցիաների](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/CreateCallBackOnTimer.html) trace կարվեն՝ բացառությամբ նշվածների։ Օրինակ **"-CacheRefresher, ReportNotifier"**:

Պարամետրը կարող է պարունակել առավելագույնը 512 սիմվոլ։

## OTLPDOCSMETERENABLED

Պարամետրի **true** արժեքի դեպքում փաստաթղթի գրանցման ժամանակ ավելանում է՝
* **հիստոգրամ**, որը արձանագրում է փաստաթղթի գրանցման տևողությունը,
* **counter**, որը ցույց է տալիս գրանցված փաստաթղերի ընդհանուր քանակը։

## OTLPDPRMETERENABLED

Պարամետրի **true** արժեքի դեպքում տվյալների մշակման հարցումների (DPR) կատարման ժամանակ ավելանում է հիստոգրամ, որը արձանագրում է կատարման տևողությունը։

## OTLPDSMETERENABLED

Պարամետրի **true** արժեքի դեպքում տվյալների աղբյուրի կատարման ժամանակ ավելանում է հիստոգրամ, որը արձանագրում է կատարման տևողությունը։

## OTLPDOCSTRACING    

Պարամետրում հարկավոր է նշել trace լինող փաստաթղթերի անունները՝ իրարից անջատելով ստորակետերով։ Օրինակ **"WordDocs, AtmInds, MobUsers"**:

Եթե պարամետրի արժեքը սկսվում է "-"-ով, ապա բոլոր փաստաթղթերը trace կարվեն՝ բացառությամբ նշվածների։ Օրինակ **"-CREATDOC, DocCap"**:

Պարամետրը կարող է պարունակել առավելագույնը 512 սիմվոլ։

## OTLPDPRTRACING    

Պարամետրում հարկավոր է նշել trace լինող տվյալների մշակման հարցումների (DPR) անունները՝ իրարից անջատելով ստորակետերով։ Օրինակ **"UsersAccessDPR, UpdateStatistics"**:

Եթե պարամետրի արժեքը սկսվում է "-"-ով, ապա բոլոր տվյալների մշակման հարցումները (DPR) trace կարվեն՝ բացառությամբ նշվածների։ Օրինակ **"-UsersAccessDPR, RefreshDefinitions"**:

Պարամետրը կարող է պարունակել առավելագույնը 512 սիմվոլ։

## OTLPDSTRACING   

Պարամետրում հարկավոր է նշել trace լինող տվյալների աղբյուների անունները՝ իրարից անջատելով ստորակետերով։ Օրինակ **"TemplGrp, AggrSec"**:

Եթե պարամետրի արժեքը սկսվում է "-"-ով, ապա բոլոր տվյալների աղբյուրները trace կարվեն՝ բացառությամբ նշվածների։ Օրինակ **"-UserProp, AtmInd, OLPGRP"**:

Պարամետրը կարող է պարունակել առավելագույնը 512 սիմվոլ։

## OTLPENABLED  

Ցույց է տալիս, արդյոք թույլատրված է trace-երի և մետրիկաների գրանցումը համակարգում։

## OTLPENDPOINT

Պարամետրում հարկավոր է նշել OTLP collector-ի հասցեն, որտեղ պետք է արտահանվեն գրանցված trace-երը և մետրիկաները։

## OTLPPROCMETERENABLED 

Պարամետրի **true** արժեքի դեպքում գրանցվում են մետրիկաներ սերվիսում երկար տևող հարցումների (Document, Data source, DPR jobs) մասին՝
* հերթում սպասող երկար տևող հարցումների քանակը,
* կատարվող երկար տևող հարցումների քանակը,
* ավարտված երկար տևող հարցումների քանակը։

<div class="version-block" data-product-id="bank" data-version="250626.000" markdown="1">

## OTLPPROTOCOL 

Սահմանում է OTLP պրոտոկոլի տեսակը։ Ընդունում է հետևյալ արժեքները՝
* `0` - gRPC,
* `1` - HTTP Protobuf: 

</div>
