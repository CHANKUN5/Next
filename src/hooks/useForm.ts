'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface UseFormProps<T> {
    initialValues: T;
    onSubmit: (values: T) => void;
    validate?: (values: T) => Partial<Record<keyof T, string>>;
}

export function useForm<T>({ initialValues, onSubmit, validate }: UseFormProps<T>) {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleManualChange = (name: keyof T, value: any) => {
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length > 0) return;
        }

        setIsSubmitting(true);
        try {
            await onSubmit(values);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleManualChange,
        handleSubmit,
        resetForm,
    };
}
