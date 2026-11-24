---
title: Insert
description: Insert one row.
---

```go
n, err := pg.Insert(Users).
	Columns(Users.ID, Users.Name).
	Values(int64(1), "ada").
	Exec(ctx, db)
```

`n` is the number of rows affected. Columns you leave out stay at the database default.

The same call exists on `mysql`, `sqlite`, `oracle`, `mssql`, and `dm`. The examples on this site use `pg`.

Next: [Select](/select/).
