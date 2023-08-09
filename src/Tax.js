import React, { useState } from 'react';
import styled from 'styled-components';

function Tax() {
    const [taxRate, setTaxRate] = useState(0);
    const [amount, setAmount] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [total, setTotal] = useState(0);

    // vergi oranını seçmek için
    const handleTaxRateSelect = (rate) => {
        setTaxRate(rate);
    };

    // tutar girişi için
    const handleAmountChange = (e) => {
        setAmount(e.target.value); // input alanına girilen değeri yakalamak için
    };

    // vergiyi hesaplar ve toplamı günceller
    const calculateTaxAndTotal = () => {
        const parsedAmount = parseFloat(amount); //kullanıcının girdiği değeri sayıya çevirir
        // NaN ise hesaplama yapılmaz, NaN değilse çalışır
        if (!isNaN(parsedAmount)) {
            setSubtotal(parsedAmount);
            const calculatedTaxAmount = (parsedAmount * taxRate) / 100;
            setTaxAmount(calculatedTaxAmount); // vergi miktarı güncellenir
            setTotal(parsedAmount + calculatedTaxAmount)
        }
    };

    const Header = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: #2D4356;
    `;

    const Subheader = styled.h2`
    text-align: center;
    font-size: 2rem;
    color: #2D4356;
    `;

    const Button = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;

    button {
        margin: 0 10px;
        width: 9rem;
        height: 2.7rem;
        font-size: 1.3rem;
        font-weight: 500;
        border: 1px solid #435B66;
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
        border: 1px solid #435B66;
        border-radius: 7px;
        background: transparent;
        width: 20rem;
        margin-top: 3rem;
        padding: 7px;

        p {
            position: relative;
            left: 18%;
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
                    <Subheader>Vergi Oranını Seçiniz..</Subheader>
                    {/* bu bölüme className yazdım çünkü styled comp ile style verdiğimde input çalışmadı */}
                    <div className='tax'>
                        <div onClick={() => handleTaxRateSelect(1)}>%1</div>
                        <div onClick={() => handleTaxRateSelect(8)}>%8</div>
                        <div onClick={() => handleTaxRateSelect(18)}>%18</div>
                        <div>Yüzde Gir:</div>
                        <input type='number' onChange={(e) => handleTaxRateSelect(e.target.value)} />
                        <p>Vergi Oranı: {taxRate}%</p>
                    </div>
                </section>

                <section>
                    {/* bu bölüme className yazdım çünkü styled comp ile style verdiğimde input çalışmadı */}
                    <div className='amount'>
                        <p>Tutar:</p>
                        <input type='number' onChange={handleAmountChange} />
                    </div>
                </section>

                <section>
                    <Button>
                        <button onClick={calculateTaxAndTotal}>Vergi Dahil</button>
                        <button onClick={() => setTotal(subtotal)}>Vergi Hariç</button>
                    </Button>
                </section>

                <section>
                    <Total>
                        <div>
                            <p>Ara Toplam: {subtotal}</p>
                            <p>Vergi: {taxAmount}</p>
                            <p>Genel Toplam: {total}</p>
                        </div>
                    </Total>
                </section>
            </main>
        </div>
    )
}

export default Tax;