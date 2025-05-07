-- Custom SQL migration file, put you code below! --
DO $$ BEGIN
 ALTER TABLE "activity" ADD "binusian_only" BOOLEAN NOT NULL;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "activity" ADD "require_confirmation" BOOLEAN NOT NULL;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;