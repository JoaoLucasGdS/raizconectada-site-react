import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/Forms.css';

function Forms() {
    const { t } = useTranslation();

    const messages = {
        errors: {
            nomeBlank: t("form.errors.nomeBlank"),
            nomeIncomplete: t("form.errors.nomeIncomplete"),
            emailBlank: t("form.errors.emailBlank"),
            emailInvalid: t("form.errors.emailInvalid"),
            mensagemBlank: t("form.errors.mensagemBlank"),
            mensagemShort: (charsLeft) => t("form.errors.mensagemShort", { charsLeft })
        },
        placeholders: {
            nome: t("form.placeholders.nome"),
            email: t("form.placeholders.email"),
            mensagem: t("form.placeholders.mensagem")
        },
        labels: {
            nome: t("form.labels.nome"),
            email: t("form.labels.email"),
            mensagem: t("form.labels.mensagem")
        },
        intro: {
            title: t("form.intro.title"),
            subtitle: t("form.intro.subtitle")
        },
        submit: t("form.submit")
    };

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.nome.trim()) {
            newErrors.nome = messages.errors.nomeBlank;
        } else if (formData.nome.trim().split(' ').length < 2) {
            newErrors.nome = messages.errors.nomeIncomplete;
        }

        if (!formData.email.trim()) {
            newErrors.email = messages.errors.emailBlank;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = messages.errors.emailInvalid;
        }

        if (!formData.mensagem.trim()) {
            newErrors.mensagem = messages.errors.mensagemBlank;
        } else if (formData.mensagem.length < 30) {
            newErrors.mensagem = messages.errors.mensagemShort(30 - formData.mensagem.length);
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert(`${t("form.success")} ${formData.nome}!`);
            setFormData({ nome: '', email: '', mensagem: '' });
        }
    };

    return (
        <div>
            <section className="letter-first">
                <div className="first-text">
                    <div className="form-intro-text">
                        <h1 className="second-h1"><span>{messages.intro.title}</span></h1>
                        <p>{messages.intro.subtitle}</p>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="nome">{messages.labels.nome}</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder={messages.placeholders.nome}
                                />
                                {errors.nome && <span className="error-message">{errors.nome}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{messages.labels.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={messages.placeholders.email}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensagem">{messages.labels.mensagem}</label>
                                <textarea
                                    name="mensagem"
                                    id="mensagem"
                                    minLength="30"
                                    maxLength="500"
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    placeholder={messages.placeholders.mensagem}
                                ></textarea>
                                {errors.mensagem && <span className="error-message">{errors.mensagem}</span>}
                            </div>
                            <button type="submit">{messages.submit}</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Forms;
