---
title: ITemplateSubstitutionService.MergeFile մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [MergeFile(SubstitutionType, StorageInfo, StorageInfo, bool, bool)](#itemplatesubstitutionservicemergefilesubstitutiontype-storageinfo-storageinfo-bool-bool-մեթոդ) | Միավորում է երկու տպելու ձևանմուշից ստեղծված `docx` ֆայլեր՝ տեղադրելով մեկ ընդհանուր ֆայլի մեջ։ |
| [MergeFile(SubstitutionType, byte\[\], byte\[\], bool, bool)](#itemplatesubstitutionservicemergefilesubstitutiontype-byte-byte-bool-bool-մեթոդ) | Միավորում է երկու տպելու ձևանմուշից ստեղծված `docx` ֆայլեր՝ տեղադրելով մեկ ընդհանուր ֆայլի մեջ։ |

### ITemplateSubstitutionService.MergeFile(SubstitutionType, StorageInfo, StorageInfo, bool, bool) մեթոդ

#### Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.MergePrintFiles](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/MergePrintFiles.html)

**Դաս՝** [ITemplateSubstitutionService](../ITemplateSubstitutionService.md)

```c#
public Task MergeFile(SubstitutionType type, 
                      StorageInfo targetFile, 
                      StorageInfo sourceFile, 
                      bool insertPageBreak,
                      bool check = false)
```

Միավորում է երկու տպելու ձևանմուշից ստեղծված `docx` ֆայլեր՝ տեղադրելով մեկ ընդհանուր ֆայլի մեջ։
Միավորված ֆայլը գրանցում է `targetFile`-ի մեջ։

**Պարամետրեր**

* `type` - [Տպելու ձևանմուշի տիպ](../../types/SubstitutionType.md): 
* `targetFile` - Առաջին ֆայլի նույնականացուցիչը սերվերում, որին կավելանա երկրորդ ֆայլը։
* `sourceFile` - Երկրորդ ֆայլի նույնականացուցիչը սերվերում։
* `insertPageBreak` - Երկու ֆայլերի պարունակությունների միջև break-ի նշանի տեղադրման հայտանիշ։
* `check` - Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։

### ITemplateSubstitutionService.MergeFile(SubstitutionType, byte[], byte[], bool, bool) մեթոդ

#### Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.MergePrintFiles](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/MergePrintFiles.html)

**Դաս՝** [ITemplateSubstitutionService](../ITemplateSubstitutionService.md)

```c#
public Task<Stream> MergeFile(SubstitutionType type, byte[] targetFile, 
                              byte[] sourceFile, bool insertPageBreak, 
                              bool check = false)
```

Միավորում է երկու տպելու ձևանմուշից ստեղծված `docx` ֆայլեր՝ տեղադրելով մեկ ընդհանուր ֆայլի մեջ։ 
Միավորված ֆայլը վերադարձնում է որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):

**Պարամետրեր**

* `type` - [Տպելու ձևանմուշի տիպ](../../types/SubstitutionType.md):
* `targetFile` - Առաջին ֆայլի նույնականացուցիչը սերվերում։
* `sourceFile` - Երկրորդ ֆայլի նույնականացուցիչը սերվերում։
* `insertPageBreak` - Երկու ֆայլերի պարունակությունների միջև break-ի նշանի տեղադրման հայտանիշ։
* `check` - Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։

