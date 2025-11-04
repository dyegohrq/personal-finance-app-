'use client'

import * as React from "react";
import * as LabelPrimitive from '@radix-ui/react-label'
import { Controller, type ControllerProps, type FieldPath, type FieldValues, FormProvider, useFormContext } from "react-hook-form";

const Form = FormProvider;

type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
)

const FormField = < TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
    ...props
}: ControllerProps< TFieldValues, TName >) => {
    return(
        <FormFieldContext.Provider value={{name: props.name}}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext)
    const itemContext = React.useContext(FormFieldContext)
    const { getFieldState } = useFormContext()
}

const FormLabel ({className, ...Props}: React.Component<typeof LabelPrimitive.Root>){
    const { error, formItemId } = useFormField()
}

export {
    Form,
    FormField
}