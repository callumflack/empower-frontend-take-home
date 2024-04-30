export const transactions = {
  accounts: [
    {
      account_id: "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      balances: {
        available: 110.94,
        current: 110.94,
        iso_currency_code: "USD",
        limit: null,
        unofficial_currency_code: null,
      },
      mask: "0000",
      name: "Plaid Checking",
      official_name: "Plaid Gold Standard 0% Interest Checking",
      subtype: "checking",
      type: "depository",
    },
  ],
  transactions: [
    {
      account_id: "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      account_owner: null,
      amount: 28.34,
      iso_currency_code: "USD",
      unofficial_currency_code: null,
      category: ["Food and Drink", "Restaurants", "Fast Food"],
      category_id: "13005032",
      check_number: null,
      counterparties: [
        {
          name: "DoorDash",
          type: "marketplace",
          logo_url: "https://plaid-counterparty-logos.plaid.com/doordash_1.png",
          website: "doordash.com",
          entity_id: "YNRJg5o2djJLv52nBA1Yn1KpL858egYVo4dpm",
          confidence_level: "HIGH",
        },
        {
          name: "Burger King",
          type: "merchant",
          logo_url:
            "https://plaid-merchant-logos.plaid.com/burger_king_155.png",
          website: "burgerking.com",
          entity_id: "mVrw538wamwdm22mK8jqpp7qd5br0eeV9o4a1",
          confidence_level: "VERY_HIGH",
        },
      ],
      date: "2023-09-28",
      datetime: "2023-09-28T15:10:09Z",
      authorized_date: "2023-09-27",
      authorized_datetime: "2023-09-27T08:01:58Z",
      location: {
        address: null,
        city: null,
        region: null,
        postal_code: null,
        country: null,
        lat: null,
        lon: null,
        store_number: null,
      },
      name: "Dd Doordash Burgerkin",
      merchant_name: "Burger King",
      merchant_entity_id: "mVrw538wamwdm22mK8jqpp7qd5br0eeV9o4a1",
      logo_url: "https://plaid-merchant-logos.plaid.com/burger_king_155.png",
      website: "burgerking.com",
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null,
      },
      payment_channel: "online",
      pending: true,
      pending_transaction_id: null,
      personal_finance_category: {
        primary: "FOOD_AND_DRINK",
        detailed: "FOOD_AND_DRINK_FAST_FOOD",
        confidence_level: "VERY_HIGH",
      },
      personal_finance_category_icon_url:
        "https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png",
      transaction_id: "yhnUVvtcGGcCKU0bcz8PDQr5ZUxUXebUvbKC0",
      transaction_code: null,
      transaction_type: "digital",
    },
    {
      account_id: "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      account_owner: null,
      amount: 72.1,
      iso_currency_code: "USD",
      unofficial_currency_code: null,
      category: ["Shops", "Supermarkets and Groceries"],
      category_id: "19046000",
      check_number: null,
      counterparties: [
        {
          name: "Walmart",
          type: "merchant",
          logo_url: "https://plaid-merchant-logos.plaid.com/walmart_1100.png",
          website: "walmart.com",
          entity_id: "O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM",
          confidence_level: "VERY_HIGH",
        },
      ],
      date: "2023-09-24",
      datetime: "2023-09-24T11:01:01Z",
      authorized_date: "2023-09-22",
      authorized_datetime: "2023-09-22T10:34:50Z",
      location: {
        address: "13425 Community Rd",
        city: "Poway",
        region: "CA",
        postal_code: "92064",
        country: "US",
        lat: 32.959068,
        lon: -117.037666,
        store_number: "1700",
      },
      name: "PURCHASE WM SUPERCENTER #1700",
      merchant_name: "Walmart",
      merchant_entity_id: "O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM",
      logo_url: "https://plaid-merchant-logos.plaid.com/walmart_1100.png",
      website: "walmart.com",
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null,
      },
      payment_channel: "in store",
      pending: false,
      pending_transaction_id: "no86Eox18VHMvaOVL7gPUM9ap3aR1LsAVZ5nc",
      personal_finance_category: {
        primary: "GENERAL_MERCHANDISE",
        detailed: "GENERAL_MERCHANDISE_SUPERSTORES",
        confidence_level: "VERY_HIGH",
      },
      personal_finance_category_icon_url:
        "https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png",
      transaction_id: "lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje",
      transaction_code: null,
      transaction_type: "place",
    },
  ],
  item: {
    available_products: ["balance", "identity", "investments"],
    billed_products: ["assets", "auth", "liabilities", "transactions"],
    consent_expiration_time: null,
    error: null,
    institution_id: "ins_3",
    item_id: "eVBnVMp7zdTJLkRNr33Rs6zr7KNJqBFL9DrE6",
    update_type: "background",
    webhook: "https://www.genericwebhookurl.com/webhook",
  },
  total_transactions: 1,
  request_id: "45QSn",
};

export const categories = {
  categories: [
    {
      category_id: "10000000",
      group: "special",
      hierarchy: ["Bank Fees"],
    },
    {
      category_id: "10001000",
      group: "special",
      hierarchy: ["Bank Fees", "Overdraft"],
    },
    {
      category_id: "12001000",
      group: "place",
      hierarchy: ["Community", "Animal Shelter"],
    },
  ],
  request_id: "ixTBLZGvhD4NnmB",
};
