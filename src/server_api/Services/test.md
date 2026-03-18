---
title: "Թեստային էջ"
nav_exclude: true
---

# Թեստային էջ

Some test content.

```mermaid
mindmap
  root((Մեծ համակարգերի ճարտարապետություն (AS-8X)))
    Էվոլյուցիա
      4x (Հին)
        Տեխնոլոգիա: VB6
        Երկմակարդակ (Կլիենտ -> Բազա)
      8x (Նոր)
        Եռամակարդակ (Կլիենտ -> Սերվիս -> Բազա)
        Ասինխրոն մշակում
        Dependency Injection
    Կարգավորման ֆայլեր
      8xClientSettings.json
      appsettings.json
      config.as
    Հիմնական պրոյեկտներ
      ՀԾ-Բանկ
      Ձեռնարկություն
      ՄՌԿ
    Սերվիսային շերտ (API)
      Տվյալներ և Բազա
        IDBService (Տրանզակցիաներ)
        IDataSourceService
        IOlapDBService
      Բիզնես տրամաբանություն
        IDocumentService (Փաստաթղթեր)
        IKernelService (Մնացորդներ)
        IAccountingService (Հաշվապահություն)
        IFactService (Փաստեր)
      Համակարգային սերվիսներ
        IParametersService
        IUserService & RolesService
        NotificationManagementService
        IMailService
    Տվյալների պահպանում (SQL)
      Ծանուցումներ
        dbo.NOTIFICATIONGROUPS
        dbo.NOTIFICATIONSUBSCRIBERS
      Աշխատանքներ (Jobs)
        job.JOBS
        job.SCHEDULES
        job.JOBSTEPS
    Ինտեգրացիա
      Integration սերվիսներ
      WebServicesManager
```

