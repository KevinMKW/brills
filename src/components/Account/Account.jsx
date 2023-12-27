import { Button } from "react-bootstrap";

const Account = () => {
    return (
        <div>
            <h1>Account</h1>
            <form >
                <label htmlFor="name" className="form-label" style={{width: '100%'}} >
                    <span>Name</span>
                    <input type="text" id="name" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus"/>
                </label>

                <label htmlFor="email" className="form-label mt-2" style={{width: '100%'}} >
                    <span>Email</span>
                    <input type="email" id="email" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus " readOnly />
                    <small className="description">Account email addresses cannot be changed at this time.</small>
                </label>

                <label htmlFor="number" className="form-label mt-2" style={{width: '100%'}} >
                    <span>Income</span>
                    <input type="number" id="number" value="0.00" name="income" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus " readOnly />
                    <small className="description">Brills will show your income minus your total outgoings in <span className="balanced safe">green</span> when you have 10% or more of your income remaining, <span className="balanced risk">orange</span> when you have less than 10%, or <span className="balanced unsafe">red</span> when you have less than 5%.</small>
                </label>

                <label htmlFor="currency" className="form-label mt-2" style={{width: '100%'}} >
                    <span>Currency</span>
                    <select name="currency" id="currency" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus ">
                        <option value="AFN">Afghanistan Afghani (؋)</option>
                        <option value="ALL">Albania Lek (Lek)</option>
                        <option value="ANG">Netherlands Antilles Guilder (ƒ)</option>
                        <option value="ARS">Argentina Peso ($)</option>
                        <option value="AUD">Australia Dollar ($)</option>
                        <option value="AWG">Aruba Guilder (ƒ)</option>
                        <option value="AZN">Azerbaijan Manat (₼)</option>
                        <option value="BAM">Bosnia and Herzegovina Convertible Mark (KM)</option>
                        <option value="BBD">Barbados Dollar ($)</option>
                        <option value="BGN">Bulgaria Lev (лв)</option>
                        <option value="BMD">Bermuda Dollar ($)</option>
                        <option value="BND">Brunei Darussalam Dollar ($)</option>
                        <option value="BOB">Bolivia Bolíviano ($b)</option>
                        <option value="BRL">Brazil Real (R$)</option>
                        <option value="BSD">Bahamas Dollar ($)</option>
                        <option value="BWP">Botswana Pula (P)</option>
                        <option value="BYN">Belarus Ruble (Br)</option>
                        <option value="BZD">Belize Dollar (BZ$)</option>
                        <option value="CAD">Canada Dollar ($)</option>
                        <option value="CHF">Switzerland Franc (CHF)</option>
                        <option value="CLP">Chile Peso ($)</option>
                        <option value="CNY">China Yuan Renminbi (¥)</option>
                        <option value="COP">Colombia Peso ($)</option>
                        <option value="CRC">Costa Rica Colon (₡)</option>
                        <option value="CUP">Cuba Peso (₱)</option>
                        <option value="CZK">Czech Republic Koruna (Kč)</option>
                        <option value="DKK">Denmark Krone (kr)</option>
                        <option value="DOP">Dominican Republic Peso (RD$)</option>
                        <option value="EGP">Egypt Pound (£)</option>
                        <option value="EUR">Euro Member Countries (€)</option>
                        <option value="FJD">Fiji Dollar ($)</option>
                        <option value="FKP">Falkland Islands (Malvinas) Pound (£)</option>
                        <option value="GBP" selected="">Great British Pound (£)</option>
                        <option value="GGP">Guernsey Pound (£)</option>
                        <option value="GHS">Ghana Cedi (¢)</option>
                        <option value="GIP">Gibraltar Pound (£)</option>
                        <option value="GTQ">Guatemala Quetzal (Q)</option>
                        <option value="GYD">Guyana Dollar ($)</option>
                        <option value="HKD">Hong Kong Dollar ($)</option>
                        <option value="HNL">Honduras Lempira (L)</option>
                        <option value="HRK">Croatia Kuna (kn)</option>
                        <option value="HUF">Hungary Forint (Ft)</option>
                        <option value="IDR">Indonesia Rupiah (Rp)</option>
                        <option value="ILS">Israel Shekel (₪)</option>
                        <option value="IMP">Isle of Man Pound (£)</option>
                        <option value="INR">India Rupee (₹)</option>
                        <option value="IRR">Iran Rial (﷼)</option>
                        <option value="ISK">Iceland Krona (kr)</option>
                        <option value="JEP">Jersey Pound (£)</option>
                        <option value="JMD">Jamaica Dollar (J$)</option>
                        <option value="JPY">Japan Yen (¥)</option>
                        <option value="KGS">Kyrgyzstan Som (лв)</option>
                        <option value="KHR">Cambodia Riel (៛)</option>
                        <option value="KPW">Korea (North) Won (₩)</option>
                        <option value="KRW">Korea (South) Won (₩)</option>
                        <option value="KYD">Cayman Islands Dollar ($)</option>
                        <option value="KZT">Kazakhstan Tenge (лв)</option>
                        <option value="LAK">Laos Kip (₭)</option>
                        <option value="LBP">Lebanon Pound (£)</option>
                        <option value="LKR">Sri Lanka Rupee (₨)</option>
                        <option value="LRD">Liberia Dollar ($)</option>
                        <option value="MKD">Macedonia Denar (ден)</option>
                        <option value="MNT">Mongolia Tughrik (₮)</option>
                        <option value="MUR">Mauritius Rupee (₨)</option>
                        <option value="MXN">Mexico Peso ($)</option>
                        <option value="MYR">Malaysia Ringgit (RM)</option>
                        <option value="MZN">Mozambique Metical (MT)</option>
                        <option value="NAD">Namibia Dollar ($)</option>
                        <option value="NGN">Nigeria Naira (₦)</option>
                        <option value="NIO">Nicaragua Cordoba (C$)</option>
                        <option value="NOK">Norway Krone (kr)</option>
                        <option value="NPR">Nepal Rupee (₨)</option>
                        <option value="NZD">New Zealand Dollar ($)</option>
                        <option value="OMR">Oman Rial (﷼)</option>
                        <option value="PAB">Panama Balboa (B/.)</option>
                        <option value="PEN">Peru Sol (S/.)</option>
                        <option value="PHP">Philippines Peso (₱)</option>
                        <option value="PKR">Pakistan Rupee (₨)</option>
                        <option value="PLN">Poland Zloty (zł)</option>
                        <option value="PYG">Paraguay Guarani (Gs)</option>
                        <option value="QAR">Qatar Riyal (﷼)</option>
                        <option value="RON">Romania Leu (lei)</option>
                        <option value="RSD">Serbia Dinar (Дин.)</option>
                        <option value="RUB">Russia Ruble (₽)</option>
                        <option value="SAR">Saudi Arabia Riyal (﷼)</option>
                        <option value="SBD">Solomon Islands Dollar ($)</option>
                        <option value="SCR">Seychelles Rupee (₨)</option>
                        <option value="SEK">Sweden Krona (kr)</option>
                        <option value="SGD">Singapore Dollar ($)</option>
                        <option value="SHP">Saint Helena Pound (£)</option>
                        <option value="SOS">Somalia Shilling (S)</option>
                        <option value="SRD">Suriname Dollar ($)</option>
                        <option value="SVC">El Salvador Colon ($)</option>
                        <option value="SYP">Syria Pound (£)</option>
                        <option value="THB">Thailand Baht (฿)</option>
                        <option value="TRY">Turkey Lira (₺)</option>
                        <option value="TTD">Trinidad and Tobago Dollar (TT$)</option>
                        <option value="TVD">Tuvalu Dollar ($)</option>
                        <option value="TWD">Taiwan New Dollar (NT$)</option>
                        <option value="UAH">Ukraine Hryvnia (₴)</option>
                        <option value="USD">United States Dollar ($)</option>
                        <option value="UYU">Uruguay Peso ($U)</option>
                        <option value="UZS">Uzbekistan Som (лв)</option>
                        <option value="VEF">Venezuela Bolívar (Bs)</option>
                        <option value="VND">Viet Nam Dong (₫)</option>
                        <option value="XCD">East Caribbean Dollar ($)</option>
                        <option value="YER">Yemen Rial (﷼)</option>
                        <option value="ZAR">South Africa Rand (R)</option>
                        <option value="ZWD">Zimbabwe Dollar (Z$)</option>
                    </select>
                </label>

                <Button className="my-4" style={{width: '100%'}} >Save</Button>
            </form>

            <details className="text-danger" open="">
                <summary>
                    <strong>Delete Account</strong>
                </summary>

                <p className="text-danger">Are you sure you want to delete your account? This action cannot be undone. The following information will be immediately deleted:</p>

                <ul>
                    <li>Your account details, including your saved name, email address, income, and currency</li>
                    <li>All your saved bills</li>
                </ul>

                <div className="d-grid">
                    <div className="row gap-2">
                        <a href="#" className="col btn btn-lg btn-delete">Delete Account</a>
                        <a href="#" className="col btn btn-lg btn-cancel justify-self-center">Cancel</a>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default Account;
