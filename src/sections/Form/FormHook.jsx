"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { YupFormSchema } from "@/schemas/yupFormSchema";

import styles from "./Form.module.scss";

const FormHook = () => {
    const initialValues = {
        defaultValues: {
            userName: "",
            tel: "",
            email: "",
            message: "",
        },
        resolver: yupResolver(YupFormSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
        console.log("FormData:", data);
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <section id='form' className={styles.container}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>Зв&#39;язатися з нами</h3>
                <div className={styles.inputGroup}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='userName'
                        placeholder=' '
                        maxLength='50'
                        {...register("userName")}
                    />
                    <label htmlFor='userName' className={styles.formLabel}>
                        Ваше ім&#39;я
                    </label>
                    <p className={styles.error}>{errors.userName?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='tel'
                        className={styles.formInput}
                        id='tel'
                        placeholder=' '
                        maxLength='13'
                        {...register("tel")}
                    />
                    <label htmlFor='tel' className={styles.formLabel}>
                        Номер телефону
                    </label>
                    <p className={styles.error}>{errors.tel?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type='email'
                        className={styles.formInput}
                        id='email'
                        placeholder=' '
                        {...register("email")}
                    />
                    <label htmlFor='email' className={styles.formLabel}>
                        Ваша пошта
                    </label>
                    <p className={styles.error}>{errors.email?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        className={
                            styles.formInputTextarea + " " + styles.formInput
                        }
                        cols='30'
                        rows='2'
                        id='message'
                        placeholder=' '
                        {...register("message")}
                    />
                    <label htmlFor='message' className={styles.formLabel}>
                        Ваше повідомлення
                    </label>
                    <p className={styles.error}>{errors.message?.message}</p>
                </div>
                <button
                    type='submit'
                    className={styles.formButton}
                    disabled={isErrors || isSubmitting}
                >
                    Відправити
                </button>
            </form>
        </section>
    );
};

export default FormHook;
