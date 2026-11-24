---
title: Migrate
description: Apply a folder of forward migrations.
---

`migrate.Run` applies directories whose names are not yet in the migration table. There is no down migration. To undo a change that has already been applied, write a new directory whose `migration.sql` changes the schema forward again.

```
mist ddl -dir . -migrations migrations -write -name init
mist migrate -migrations migrations
```

Each migration is a directory:

```
migrations/20261123135846_init/migration.sql
migrations/20261123135846_init/snapshot.json
```

From Go:

```go
applied, err := migrate.Run(ctx, pg.Migrator(db), migrate.Config{
	Folder: "migrations",
})
```

A statement that fails rolls the whole batch back on PostgreSQL, HighGo, SQLite, and SQL Server. MySQL and MariaDB commit each DDL statement, so earlier statements in that migration can remain. Oracle and Dameng do not wrap DDL in a transaction.

Changing an already applied `migration.sql` makes `Run` return `HashError`. Leave the old directory as it is.

Next: [Dialects](/dialects/).
