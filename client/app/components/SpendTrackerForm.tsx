import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { SpendTracker } from "@server/types";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  id: z.string(),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  limit: z.number().min(0, { message: "Limit must be a positive number" }),
  category_id: z.string().min(1, { message: "Please select a category" }),
});

export function SpendTrackerForm({
  initialData,
  onSubmit,
  onClose,
  deleteButton,
}: {
  initialData?: SpendTracker;
  onSubmit: (data: SpendTracker) => void;
  onClose?: () => void;
  deleteButton?: React.ReactNode;
}) {
  const newId = useId();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: initialData?.id || newId,
      name: initialData?.name || "",
      limit: initialData?.limit || 0,
      category_id: initialData?.category_id || "",
    },
  });

  console.log("Form state:", form.formState.defaultValues);
  console.log("Initial category:", initialData?.category_id);

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit(data as SpendTracker);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Tracker Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="limit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Limit</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Limit Amount"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      defaultValue={field.value}
                      placeholder="Select a category"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Food</SelectItem>
                  <SelectItem value="2">Shopping</SelectItem>
                  <SelectItem value="3">Education</SelectItem>
                  <SelectItem value="4">Transport</SelectItem>
                  <SelectItem value="5">Groceries</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <div className="pt-6 pb-2">
          <hr className="border-muted-foreground/50" />
        </div> */}
        <div className="flex gap-2 pt-8">
          {initialData && deleteButton}
          <Button type="submit" className="w-full">
            {initialData ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
