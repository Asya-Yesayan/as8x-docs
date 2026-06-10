---
title: Show
parent: "Մեթոդներ"
grand_parent: "MessageBox"
---

# MessageBox.Show(string, string, MessageBoxButton, MessageBoxImage, MessageBoxResult, Window, int, string, bool) մեթոդ

## Նկարագիր

**Դաս՝** [MessageBox](../MessageBox.md)

```c#
public static MessageBoxResult Show(string messageBoxText,
                                    string caption = null,
                                    MessageBoxButton button = MessageBoxButton.OK,
                                    MessageBoxImage icon = MessageBoxImage.None,
                                    MessageBoxResult defaultResult = MessageBoxResult.None,
                                    Window owner = null,
                                    int timeToLive = -1,
                                    string helpID = null,
                                    bool enableRememberTheAnswer = false)
```

Ցուցադրում է հաղորդագրության մոդալ պատուհանը և վերադարձնում է օգտագործողի ընտրած կոճակին համապատասխան արդյունքը (**MessageBoxResult**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| messageBoxText | string | - | Պատուհանում ցուցադրվող հաղորդագրության տեքստը։ |
| caption | string | null | Պատուհանի գլխագիրը։ Բացակայության դեպքում ցուցադրվում է ընթացիկ ծրագրի անվանումը։ |
| button | MessageBoxButton | MessageBoxButton.OK | Պատուհանում ցուցադրվող կոճակների հավաքածուն (**OK**, **OKCancel**, **YesNo** կամ **YesNoCancel**)։ |
| icon | MessageBoxImage | MessageBoxImage.None | Պատուհանում ցուցադրվող պատկերակը։ |
| defaultResult | MessageBoxResult | MessageBoxResult.None | Լռությամբ ընտրված կոճակին համապատասխան արդյունքը, որը ստանում է ֆոկուսը պատուհանի առաջին ակտիվացման ժամանակ։ |
| owner | Window | null | Հաղորդագրության պատուհանի ծնող պատուհանը։ **null** արժեքի դեպքում որպես ծնող պատուհան ընտրվում է ընթացիկ ակտիվ պատուհանը, իսկ դրա բացակայության դեպքում՝ ծրագրի բացված պատուհաններից առաջինը։ |
| timeToLive | int | -1 | Պատուհանի ցուցադրման տևողությունը՝ վայրկյաններով։ Եթե պարամետրի արժեքը մեծ է 0-ից, ապա լռությամբ ընտրված կոճակի (defaultResult) վրա ցուցադրվում է պատուհանի ավտոմատ փակվելուն մնացած ժամանակը, իսկ նշված ժամանակի ավարտից հետո պատուհանը ավտոմատ կերպով փակվում է՝ ընտրելով այդ կոճակը։ 0 կամ բացասական արժեքի դեպքում ավտոմատ փակման մեխանիզմը չի կիրառվում, և պատուհանը մնում է բաց մինչև օգտագործողի կողմից փակելը։ |
| helpID | string | null | Պատուհանի **«Օգնություն»** կոճակի նույնացուցիչը (id)։ Պարամետրի ոչ դատարկ արժեքի դեպքում պատուհանում ցուցադրվում է **«Օգնություն»** կոճակը, իսկ կոճակը կամ **F1** ստեղնը սեղմելիս բացվում է տվյալ id-ին համապատասխան օգնության պատուհանը։ |
| enableRememberTheAnswer | bool | false | **«Կիրառել պատասխանը հաջորդների համար նույնպես»** նշիչի ցուցադրման ռեժիմը։ true արժեքի դեպքում պատուհանում ցուցադրվում է նշիչը, և դրա ընտրման դեպքում նույն պատասխանը ավտոմատ կիրառվում է նմանատիպ հաջորդ հարցումների համար՝ առանց պատուհանը կրկին ցուցադրելու։ false արժեքի դեպքում նշիչը չի ցուցադրվում։ |



 