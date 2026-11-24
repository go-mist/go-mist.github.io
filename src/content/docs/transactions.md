---
title: Transactions
description: Commit when the function returns nil.
---

`Tx` commits when the function returns nil, and rolls back when it returns an error. A `Tx` inside a `Tx` is a savepoint. The callback receives `mist.Tx`.

```go
err := db.Tx(ctx, func(tx mist.Tx) error {
	_, err := pg.Insert(Users).
		Columns(Users.ID, Users.Name).
		Values(int64(2), "cam").
		Exec(ctx, tx)
	return err
})
```

Queries take `mist.Tx` the same way they take `mist.DB`.

Next: [Migrate](/migrate/).
