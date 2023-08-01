import React, { useState } from 'react';

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

    return (
        <div>
            <header>
                <h1>Vergi Hesaplama</h1>
            </header>
            <main>
                <section>
                    <p>Vergi Oranını Seçiniz..</p>
                    <div>
                        <div onClick={() => handleTaxRateSelect(1)}>%1</div>
                        <div onClick={() => handleTaxRateSelect(8)}>%8</div>
                        <div onClick={() => handleTaxRateSelect(18)}>%18</div>
                        <div>Yüzde Gir</div>
                        <div>
                            <input type='number' onChange={(e) => handleTaxRateSelect(e.target.value)} />
                        </div>
                    </div>
                </section>

                <section>
                    <form>
                        <div>
                            <p>Vergi Oranı: {taxRate}%</p>
                        </div>
                        <div>
                            <p>Tutar:</p>
                            <input type='number' onChange={handleAmountChange} />
                        </div>
                    </form>
                </section>

                <section>
                    <div>
                        <button onClick={calculateTaxAndTotal}>Vergi Dahil</button>
                        <button onClick={() => setTotal(subtotal)}>Vergi Hariç</button>
                    </div>
                </section>

                <section>
                    <div>
                        <div>
                            <p>Ara Toplam:</p>
                            <p>{subtotal}</p>
                        </div>
                        <div>
                            <p>Vergi:</p>
                            <p>{taxAmount}</p>
                        </div>
                        <div>
                            <p>Genel Toplam:</p>
                            <p>{total}</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Tax;