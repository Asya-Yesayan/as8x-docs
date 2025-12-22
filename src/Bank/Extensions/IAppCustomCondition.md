---
---

<div class="version-block" data-product-id="bank" data-version="250626.000, 250929.000" markdown="1">

# IAppCustomCondition, C# Ֆունկցիա (Այո/Ոչ)

## C# Ֆունկցիա (Այո/Ոչ)

«Վարկային հոսքագիծ» ենթահամակարգում յուրահատուկ անցման փուլի համար նախատեսված ինտերֆեյս։

``` c#
namespace ArmSoft.AS8X.Bank.Subsystems;

public interface IAppCustomCondition
{
    Task<bool> Evaluate(AppProcessContext context, CancellationToken cancellationToken);
}
```

Անցման փուլի հաշվարկման համար հարկավոր է իրականացնել այս ինտերֆեյսը և ստացված C# ֆայլը ներմուծել որպես [սերվերային մոդուլ](../Definitions/ServerSideModule/server_side_module_guide.md)։

Տե՛ս [ձեռնարկը](loan_app.md)
</div>
