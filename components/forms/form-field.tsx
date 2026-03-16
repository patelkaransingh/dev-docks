"use client";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Control, Controller } from "react-hook-form";

type FieldProps = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  textarea?: boolean;
  required?: boolean;
};

export default function FormField({
  control,
  name,
  label,
  placeholder,
  description,
  textarea,
  required,
}: FieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field className="mb-6 gap-1" data-invalid={fieldState.invalid}>
          <FieldLabel className="flex items-center gap-2 ">
            {label}
            {required && <span className="text-destructive">*</span>}
          </FieldLabel>
          {textarea ? (
            <InputGroup>
              <InputGroupTextarea
                className="min-h-24 resize-none"
                {...field}
                placeholder={placeholder}
                rows={6}
                aria-invalid={fieldState.invalid}
              />
              <InputGroupAddon align="block-end">
                <InputGroupText className="tabular-nums">
                  {field.value?.length}/200 characters
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          ) : (
            <Input
              {...field}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
            />
          )}

          {description && <FieldDescription>{description}</FieldDescription>}

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
