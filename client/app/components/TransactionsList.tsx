import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { TransactionWithCategory } from "@/types";
import { format } from "date-fns";

export function TransactionsList({
  transactions,
}: {
  transactions: TransactionWithCategory[];
}) {
  return (
    <Table>
      {/* <TableHeader>
        <TableRow>
          <TableHead>Purchase</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader> */}
      <TableBody>
        {transactions.map((t, i) => (
          <TableRow key={`${t.account_id}-${i}`}>
            {/* <TableCell className="min-w-[80px]">
              {format(new Date(t.date), "MMM d")}
            </TableCell> */}
            <TableCell className="flex-1 flex items-center gap-2">
              <span className="pr-12">{format(new Date(t.date), "MMM d")}</span>
              <span className="font-medium">{t.merchant_name}</span>
              <span className="text-muted-foreground/70">{t.categoryName}</span>
            </TableCell>
            <TableCell className="min-w-[140px] text-right tabular-nums">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: t.iso_currency_code,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(t.amount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
