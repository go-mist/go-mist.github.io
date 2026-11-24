---
title: Delete
description: Delete rows that match a condition.
---

```go
n, err := pg.Delete(Users).
	Where(op.Eq(Users.ID, int64(1))).
	Exec(ctx, db)
```

`n` is the number of rows affected.

Next: [Transactions](/transactions/).
