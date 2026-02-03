---
sublinks:
- { title: "Օրինակ AttachReservedCardToClient, GetCardAgreementFiles", ref: օրինակ-1 }
nav_exclude: true
---

<div class="version-block" data-product-id="bank" data-version="250626.000, 250929.000" markdown="1">

# Օրինակ CardsRoutes

## Բովանդակություն
- [AttachReservedCardToClient-ի, GetCardAgreementFiles-ի օգտագործման օրինակ](#օրինակ-1)

## Օրինակ 1
Ռեզերվացրած քարտը հաճախորդի կցման և այդ քարտի կարգավորված անհրաժեշտ պայմանագրերի ներբեռնման օրինակ։

```c#
private static async Task GetCardAgreementFiles2(BankApiClient apiClient, string exportDirectory)
{
    try
    {
        // տրված հաճախորդին կցում է տրված ռեզերվացրած քարտը
        var res = await apiClient.Cards.AttachReservedCardToClient(new()
        {
            ClientCode = "12345678", // հաճախորդի կոդ
            CardNumber = "9051010203040506", // քարտի համար
        });

        // Ներբեռնում է ստացված ISN-ով քարտի համար կարգավորված անհրաժեշտ պայմանագրերի փաստաթղթերը
        var resFiles = await apiClient.Cards.GetCardAgreementFiles(res.CardISN, Language.Armenian);

        // նշված թղթապանակի գոյություն չունենալու դեպքում ստեղծում է այն
        if (!Directory.Exists(exportDirectory))
        {
            Directory.CreateDirectory(exportDirectory);
        }

        // ցիկլով անցնում է ֆայլերի վրայով
        foreach (var fileInfo in resFiles.FilesInfo)
        {
            Console.WriteLine(fileInfo.FileName);

            // ֆայլի պարունակությունը պահպանում է նշված թղթապանակում
            await File.WriteAllBytesAsync(Path.Combine(exportDirectory, fileInfo.FileName), fileInfo.Data);
        }
    }
    catch (ApiException ex)
    {
        // մեթոդի կանչի ընթացքում սխալի առաջացման դեպքում տպում է սխալի մանրամասները
        Console.WriteLine(ex.Code); // սխալի կոդ
        Console.WriteLine(ex.Message); // սխալի հաղորդագրություն
        Console.WriteLine(ex.StatusCode); // սխալի վիճակի կոդ
    }
}
```

</div>
