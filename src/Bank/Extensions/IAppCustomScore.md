---
---

<div class="version-block" data-product-id="bank" data-version="250626.000, 250929.000" markdown="1">

# IAppCustomScore, C# Ֆունկցիա (ցուցանիշ)

## C# Ֆունկցիա (ցուցանիշ)

«Վարկային հոսքագիծ» ենթահամակարգում յուրահատուկ ցուցանիշի համար նախատեսված ինտերֆեյս։

``` c#
namespace ArmSoft.AS8X.Bank.Subsystems;

public interface IAppCustomScore
{
    Task<decimal> Evaluate(AppProcessContext context, CancellationToken cancellationToken);
}
```

Ցուցանիշի հաշվարկման համար հարկավոր է իրականացնել այս ինտերֆեյսը և ստացված C# ֆայլը ներմուծել որպես [սերվերային մոդուլ](../../server_api/Extensions/Definitions/ServerSideModule/server_side_module_guide.md)։

Տե՛ս [ձեռնարկը](loan_app.md)
</div>
