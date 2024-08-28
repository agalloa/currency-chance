export interface GetAllCurrencies {
    terms:      string;
    privacy:    string;
    currencies: Currency[];
}

export interface Currency {
    iso:            string;
    currency_name:  string;
    is_obsolete:    boolean;
    superceded_by?: string;
}
