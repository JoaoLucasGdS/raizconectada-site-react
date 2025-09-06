import React, { useState } from 'react';
import './css/Forms.css';

function Forms() {
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
            newErrors.nome = 'O campo Nome Completo não pode ser em branco.';
        } else if (formData.nome.trim().split(' ').length < 2) {
            newErrors.nome = 'Por favor, insira seu nome e sobrenome.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'O campo e-mail não pode ser em branco.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Por favor, insira um formato de e-mail válido.';
        }

        if (!formData.mensagem.trim()) {
            newErrors.mensagem = 'A mensagem não pode ser em branco.';
        } else if (formData.mensagem.length < 30) {
            newErrors.mensagem = `A mensagem deve ter ao menos 30 caracteres. Faltam ${30 - formData.mensagem.length}.`;
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Formulário válido! Enviando dados:", formData);
            alert(`Obrigado por sua mensagem, ${formData.nome}!`);
            setFormData({ nome: '', email: '', mensagem: '' });
        } else {
            console.log("Formulário inválido. Erros:", validationErrors);
        }
    };

    return (
        <div>
            <section className="letter-first">
                <div className="first-text">
                    <div className="form-intro-text">
                        <h1 className="second-h1"><span>FALE CONOSCO</span></h1>
                        <p>Para nós, sua opinião é um pilar.</p>
                    </div>

                    <div className="form-container">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome completo:</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        placeholder="Seu nome completo"
                                    />
                                    {errors.nome && <span className="error-message">{errors.nome}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="seu.email@exemplo.com"
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensagem">Deixe-nos uma mensagem:</label>
                                    <textarea
                                        name="mensagem"
                                        id="mensagem"
                                        minLength="30"
                                        maxLength="500"
                                        value={formData.mensagem}
                                        onChange={handleChange}
                                        placeholder="Sua mensagem..."
                                    ></textarea>
                                    {errors.mensagem && <span className="error-message">{errors.mensagem}</span>}
                                </div>
                                <button type="submit">Enviar</button>
                            </form>
                        </div>    
                    </div>
                </section>
            </div>
    );
}

export default Forms;
