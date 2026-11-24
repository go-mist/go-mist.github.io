---
title: Update
description: Change rows that match a condition.
---

```go
n, err := pg.Update(Users).
	Set(Users.Name, "bea").
	Where(op.Eq(Users.ID, int64(1))).
	Exec(ctx, db)
```

`n` is the number of rows affected.

Next: [Delete](../delete/).
