-- AlterTable
ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT date_trunc('second', now()),
ALTER COLUMN "updated_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "purchases" ALTER COLUMN "created_at" SET DEFAULT date_trunc('second', now()),
ALTER COLUMN "updated_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "user_balance" ALTER COLUMN "created_at" SET DEFAULT date_trunc('second', now()),
ALTER COLUMN "updated_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT date_trunc('second', now()),
ALTER COLUMN "updated_at" SET DEFAULT now();
