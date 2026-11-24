---
title: Where
description: Compare a column with a value.
---

`Where` takes one condition. Combine conditions with `op.And` and `op.Or`.

```go
pg.Select(Users.ID, Users.Name).
	From(Users).
	Where(op.And(
		op.Gt(Users.ID, int64(0)),
		op.Eq(Users.Name, "ada"),
	)).
	All(ctx, db)
```

`op.Like`, `op.ILike`, `op.IsNull`, `op.IsNotNull`, `op.InArray`, and `op.Between` are the other common ones. An empty `op.InArray` is `1 = 0`.

Next: [Update](../update/).
