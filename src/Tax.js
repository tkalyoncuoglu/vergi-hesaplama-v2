import React, { useState } from 'react';
import styled from 'styled-components';

function Tax() {
    const [taxRate, setTaxRate] = useState(0);
    const [amount, setAmount] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [total, setTotal] = useState(0);

    const handleTaxRateSelect = (rate) => {
        setTaxRate(rate);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const calculateTaxAndTotal = () => {
        const parsedAmount = parseFloat(amount);
        if (!isNaN(parsedAmount)) {
            setSubtotal(parsedAmount);
            const calculatedTaxAmount = (parsedAmount * taxRate) / 100;
            setTaxAmount(calculatedTaxAmount);
            setTotal(parsedAmount + calculatedTaxAmount)
        }
    };

    const Header = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: #2D4356;
    `;

    const TaxRatePar = styled.p`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    color: #435B66;
    `;

    const PerArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        cursor: pointer;
        margin-right: 10px;
        border: 2px solid #435B66;
        border-radius: 7px;
        padding: 10px;
        font-size: 1.2rem;
        font-weight: 500;

        &:hover{
            background-color: #435B66;
            color: #ffffff;
        }
    }

    p{
        margin-right: 10px;
        border: 2px solid #435B66;
        border-radius: 7px;
        padding: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    input {
        width: 8rem;
        height: 2.6rem;
        border: 2px solid #435B66;
        border-radius: 7px;
        background: transparent;
        font-size: 1.2rem;
        color: black;

        &:hover{
            border: 2px solid #B9C9C9;
        }
    }
    `;

    const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 600;
    p{
        border: 2px solid #435B66;
        border-radius: 7px;
        padding: 10px;
        margin-left: 20px;
    }

    input{
        width: 7rem;
        height: 2.6rem;
        border: 2px solid #435B66;
        border-radius: 7px;
        background: transparent;
        font-size: 1.2rem;
        margin-left: 5px;
        color: black;

        &:hover{
            border: 2px solid #B9C9C9;
        }
    }
    `;

    const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    button {
        margin: 0 5px;
        width: 9rem;
        height: 2.7rem;
        font-size: 1.3rem;
        font-weight: 500;
        border: 2px solid #435B66;
        border-radius: 7px;
        background: transparent;

        &:hover{
            background-color: #435B66;
            color: #ffffff;
        }
    }
    `;

    const Total = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 500;
    div {
        border: 2px solid #435B66;
        border-radius: 7px;
        background: transparent;
        width: 15rem;
        margin-top: 3rem;
        padding: 7px;
        p {
            position: relative;
            left: 18%
        }
    }
    `;

    return (
        <div>
            <header>
                <Header>Vergi Hesaplama</Header>
            </header>
            <main>
                <section>
                    <TaxRatePar>Vergi Oranını Seçiniz..</TaxRatePar>
                    <PerArea>
                        <div onClick={() => handleTaxRateSelect(1)}>%1</div>
                        <div onClick={() => handleTaxRateSelect(8)}>%8</div>
                        <div onClick={() => handleTaxRateSelect(18)}>%18</div>
                        <p>Yüzde Gir:</p>
                        <input type='number' onChange={(e) => handleTaxRateSelect(e.target.value)} />
                    </PerArea>
                </section>

                <section>
                    <Form>
                        <div>
                            <p>Vergi Oranı: {taxRate}%</p>
                        </div>
                        <div>
                            <p>Tutar:</p>
                        </div>
                        <div>
                            <input type='text' onChange={handleAmountChange} />
                        </div>
                    </Form>
                </section>

                <section>
                    <ButtonArea>
                        <button onClick={calculateTaxAndTotal}>Vergi Dahil</button>
                        <button onClick={() => setTotal(subtotal)}>Vergi Hariç</button>
                    </ButtonArea>
                </section>

                <section>
                    <div>
                        <Total>
                            <div>
                                <p>Ara Toplam: {subtotal}</p>
                                <p>Genel Toplam: {total}</p>
                                <p>Vergi: {taxAmount}</p>
                            </div>
                        </Total>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Tax;