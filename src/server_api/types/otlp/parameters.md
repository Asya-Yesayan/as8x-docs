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
nav_exclude: true
---

# OTLP-ի աշխատանքի համար անհրաժեշտ պարամետրեր

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

Այս բաժնում նշված բոլոր պարամետրերը կազդեն միայն այն դեպքում, երբ [OTLPENABLED](#otlpenabled) պարամետրի արժեքը **true** է և [OTLPENDPOINT](#otlpendpoint)-ում նշված է OTLP collector-ի հասցեն։

## OTLPAUTOPROCTRACING

Պարամետրում հարկավոր է նշել trace լինող [ժամաչափով պարբերական ֆունկցիաների](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/CreateCallBackOnTimer.html) անունները՝ իրարից անջատելով ստորակետերով։ Օրինակ **"Receive, BLAutoCheckStop"**:

Եթե պարամետրի արժեքը սկսվում է "-"-ով, ապա բոլոր [ժամաչափով պարբերական ֆունկցիաների](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/CreateCallBackOnTimer.html) trace կարվեն՝ բացառությամբ նշվածների։ Օրինակ **"-CacheRefresher, ReportNotifier"**:

Պարամետրը կարող է պարունակել առավելագույնը 512 սիմվոլ։

## OTLPDOCSMETERENABLED

Պարամետրի **true** արժեքի դեպքում ավելանում են հետևյալ մետրիկաները՝
* **armsoft_docs_store_histogram** հիստոգրամը, որը արձանագրում է փաստաթղթի գրանցման տևողությունը,
* **armsoft_docs_stored_counter** counter-ը, որը ցույց է տալիս գրանցված փաստաթղերի ընդհանուր քանակը։

## OTLPDPRMETERENABLED

Պարամետրի **true** արժեքի դեպքում **armsoft_dpr_execution_histogram** հիստոգրամը, որը արձանագրում է տվյալների մշակման հարցումների (DPR) կատարման տևողությունը։

## OTLPDSMETERENABLED

Պարամետրի **true** արժեքի դեպքում ավելանում է **armsoft_ds_execution_histogram** հիստոգրամը, որը արձանագրում է տվյալների աղբյուրի կատարման տևողությունը։

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

Պարամետրի true արժեքի դեպքում ավելանում են հետևյալ մետրիկաները՝
* **armsoft_process_enqueued_counter** counter-ը, որը ցույց է տալիս հերթում սպասող «Սերվիսային ասինխրոն պրոցեսների» քանակը,
* **armsoft_process_executing_counter** counter-ը, որը ցույց է տալիս կատարվող «Սերվիսային ասինխրոն պրոցեսների» քանակը,
* **armsoft_process_completed_counter** counter-ը, որը ցույց է տալիս ավարտված «Սերվիսային ասինխրոն պրոցեսների» քանակը։

<div class="version-block" data-product-id="bank" data-version="250626.000" markdown="1">

## OTLPPROTOCOL 

Սահմանում է OTLP պրոտոկոլի տեսակը։ Ընդունում է հետևյալ արժեքները՝
* `0` - gRPC,
* `1` - HTTP Protobuf: 

</div>

## OTLPDOCOTHMTRENABLED

Պարամետրի **true** արժեքի դեպքում ավելանում են հետևյալ մետրիկաները՝
* **armsoft_docs_loaded_counter** counter-ը, որը ցույց է տալիս [IDocumentService.Load](../../Services/IDocument/Methods/Load.md) մեթոդով բեռնված փաստաթղթերի քանակը,
* **armsoft_docs_loaded_from_folder_counter** counter-ը, որը ցույց է տալիս [IDocumentService.LoadFromFolder](../../Services/IDocument/Methods/LoadFromFolder.md) մեթոդով բեռնված փաստաթղթերի քանակը,
* **armsoft_docs_load_histogram** հիստոգրամը, որը արձանագրում է [IDocumentService.Load](../../Services/IDocument/Methods/Load.md) մեթոդով փաստաթղթի բեռնման տևողությունը,
* **armsoft_docs_load_from_folder_histogram** հիստոգրամը, որը արձանագրում է [IDocumentService.LoadFromFolder](../../Services/IDocument/Methods/LoadFromFolder.md) մեթոդով փաստաթղթի բեռնման տևողությունը։
* trace-ներ՝ [IDocumentService.Load](../../Services/IDocument/Methods/Load.md), [IDocumentService.LoadFromFolder](../../Services/IDocument/Methods/LoadFromFolder.md) մեթոդներով փաստաթղթի բեռնման ժամանակ։
