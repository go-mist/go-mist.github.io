---
title: Select
description: Read one row or many rows.
---

One row:

```go
user, err := pg.Select(Users.ID, Users.Name, Users.Email).
	From(Users).
	Where(op.Eq(Users.ID, int64(1))).
	One(ctx, db)
```

`One` returns `query.ErrNoRows` when the result is empty, and `query.ErrManyRows` when more than one row matches.

Many rows:

```go
users, err := pg.Select(Users.ID, Users.Name).
	From(Users).
	Where(op.Gt(Users.ID, int64(0))).
	OrderBy(op.Asc(Users.ID)).
	Limit(100).
	All(ctx, db)
```

`Take` returns the first row and ignores the rest.

Next: [Where](../where/).
