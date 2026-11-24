---
title: Connect
description: Open a pool for one dialect.
---

```go
db, err := pg.Open(ctx, os.Getenv("DATABASE_URL"))
if err != nil {
	return err
}
defer db.Close()
```

Each `Open` returns its own pool. That pool implements `mist.DB`.

| Dialect | Open | Example |
|---|---|---|
| PostgreSQL, HighGo, KingbaseES | `pg.Open` | `postgres://user:pass@127.0.0.1:5432/app?sslmode=disable` |
| MySQL, MariaDB | `mysql.Open` | `user:pass@tcp(127.0.0.1:3306)/app` |
| SQLite | `sqlite.Open` | `app.db` |
| Oracle | `oracle.Open` | `oracle://user:pass@127.0.0.1:1521/service` |
| SQL Server | `mssql.Open` | `sqlserver://user:pass@127.0.0.1:1433?database=app` |
| Dameng | `dm.Open` | `dm://user:pass@127.0.0.1:5236` |

HighGo uses port `5866`. KingbaseES uses port `54321`. Import paths are `github.com/go-mist/mist/dialect/pg` and the same pattern for `mysql`, `sqlite`, `oracle`, `mssql`, and `dm`.

Limits for each database are on [Dialects](/dialects/).

Next: [Insert](/insert/).
