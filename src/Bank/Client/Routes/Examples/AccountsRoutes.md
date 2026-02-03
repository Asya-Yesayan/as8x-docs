---
sublinks:
- { title: "Օրինակ CreateGeneralAccForCli", ref: օրինակ-1 }
nav_exclude: true
---

<div class="version-block" data-product-id="bank" data-version="250626.000, 250929.000" markdown="1">

# Օրինակ AccountsRoutes

## Բովանդակություն
- [CreateGeneralAccForCli-ի օգտագործման օրինակ](#օրինակ-1)

## Օրինակ 1
Նոր հաշվի ստեղծման օրինակ։

```c#
public static async Task CreateGeneralAccForCli(BankApiClient apiClient)
{
    try
    {
        // ստեղծում է հաճախորդի հաշիվ՝ նշելով հաճախորդին և արժույթը
        var res = await apiClient.Accounts.CreateGeneralAccForCli(new()
        {
            CliCode = "00000001",
            Cur = "000"
        });

        Console.WriteLine(res.Acc);         //Վերադարձվում է ձևովորված հաշվի համարը
        Console.WriteLine(res.IsFinalState);
    }
    catch (ApiException ex)
    {
        // մեթոդի կանչի ընթացքում սխալի առաջացման դեպքում տպում է սխալի մանրամասները
        Console.WriteLine(ex.Code);
        Console.WriteLine(ex.Message);
        Console.WriteLine(ex.StatusCode);
    }
}
```

</div>
