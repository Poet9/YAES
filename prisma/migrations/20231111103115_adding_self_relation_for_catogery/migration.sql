-- AlterTable
ALTER TABLE "Product_category" ADD COLUMN     "categoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "Product_category" ADD CONSTRAINT "Product_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Product_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
