const ProductConstant = [
    { key: 'paymeth', label: 'Payment Methods', description: 'Access to 100+ globally' },
    { key: 'link', label: 'Link', description: 'Accelerated checkout' },
    { key: 'financialConn', label: 'Financial Connections', description: 'Linked financial account data' },
    { key: 'identity', label: 'Identity', description: 'Online identity verification' },
    { key: 'atlas', label: 'Atlas', description: 'Start-up incorporation' },
]

// product global section
const ProductGlobal = [
    {
        svg: (
            <svg class="ProductIcon ProductIcon--Terminal " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                <title>Terminal</title>

                <path d="M36.98 14.05l-6.31 1.36L9.33 20l-7.35 1.58A2.52 2.52 0 0 0 0 24.05v13.42C0 38.87 1.12 40 2.5 40h35c1.38 0 2.5-1.13 2.5-2.53V16.53c0-.77-.34-1.49-.93-1.97a2.48 2.48 0 0 0-2.09-.5z" fill="#9B66FF"></path><path d="M28.59 0H11.58A2.54 2.54 0 0 0 9 2.5v25c0 1.38 1.15 2.5 2.58 2.5h16.84A2.54 2.54 0 0 0 31 27.5v-25A2.5 2.5 0 0 0 28.59 0z" fill="url(#product-icon-terminal-SiteMobileMenu-a)"></path><path d="M31 15.34V27.5c0 1.38-1.15 2.5-2.58 2.5H11.58A2.54 2.54 0 0 1 9 27.5v-7.43l.33-.07 21.34-4.59.33-.07z" fill="url(#product-icon-terminal-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-terminal-SiteMobileMenu-a" x1="20" y1="1.97" x2="20" y2="17.6" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset=".33" stop-color="#15E8E2"></stop><stop offset=".74" stop-color="#1FD3E0"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-terminal-SiteMobileMenu-b" x1="31" y1="22.67" x2="5.34" y2="22.67" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset=".64" stop-color="#625AF5"></stop><stop offset="1" stop-color="#8A62FC"></stop></linearGradient></defs>
            </svg>
        ),
        label: "Terminal",
        description: "In-person payments",
    },
    {
        svg: (
            <svg class="ProductIcon ProductIcon--Radar " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                <title>Radar</title>

                <path d="M24.87 4.46a1.26 1.26 0 0 0-1.8.2l-4.6 5.82L3.42 29.45c.27.22.54.45.78.7a9.42 9.42 0 0 1 1.13 1.32l.1.13a9.15 9.15 0 0 1 .8 1.43c.29.62.5 1.28.65 1.95a2.5 2.5 0 0 0 2.45 1.93H38.7a1.27 1.27 0 0 0 1.27-1.3 42.43 42.43 0 0 0-15.1-31.15z" fill="#9A66FF"></path><path d="M27.8 21.98A33.82 33.82 0 0 0 5.95 4.28a1.29 1.29 0 0 0-1.56.98L.1 25.4a2.54 2.54 0 0 0 1.4 2.88 9.48 9.48 0 0 1 2.72 1.87l.17.17c.35.36.67.74.96 1.15l.1.13a9.15 9.15 0 0 1 .8 1.43l20.94-9.31a1.29 1.29 0 0 0 .62-1.74z" fill="url(#product-icon-radar-SiteMobileMenu-a)"></path><path d="M18.46 10.48l.47.38a33.82 33.82 0 0 1 8.87 11.12 1.29 1.29 0 0 1-.62 1.74L6.25 33.03a9.15 9.15 0 0 0-.8-1.43l-.1-.13-.23-.3c-.23-.3-.47-.58-.74-.85a9.7 9.7 0 0 0-.95-.86l15.03-18.98z" fill="url(#product-icon-radar-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-radar-SiteMobileMenu-a" x1="13.98" y1="4.24" x2="13.98" y2="33.03" gradientUnits="userSpaceOnUse"><stop offset=".26" stop-color="#FF5091"></stop><stop offset=".91" stop-color="#E03071"></stop></linearGradient><linearGradient id="product-icon-radar-SiteMobileMenu-b" x1="15.68" y1="10.48" x2="15.68" y2="33.03" gradientUnits="userSpaceOnUse"><stop stop-color="#6E00F5"></stop><stop offset="1" stop-color="#9860FE"></stop></linearGradient></defs>
            </svg>
        ),
        label: "Radar",
        description: "Fraud prevention",
    },
    {
        svg: (
            <svg class="ProductIcon ProductIcon--Authorization " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                <title>Authorization</title>

                <path fill="#96F" d="M9.1381 4.1033c-.07474-1.1211.81447-2.07156 1.9381-2.07156H35.5c1.3807 0 2.5 1.11929 2.5 2.5V28.9556c0 1.1236-.9505 2.0128-2.0716 1.938C21.5483 29.935 10.0968 18.4834 9.1381 4.1033Z"></path><path fill="url(#product-icon-authorization-SiteMobileMenu-a)" d="M2.1381 11.1033c-.07474-1.1211.81447-2.07156 1.93806-2.07156H28.5c1.3807 0 2.5 1.11926 2.5 2.49996v24.4239c0 1.1236-.9505 2.0128-2.0716 1.938C14.5483 36.935 3.09678 25.4834 2.1381 11.1033Z"></path><path fill="url(#product-icon-authorization-SiteMobileMenu-b)" fill-rule="evenodd" d="M30.9998 30.1351c-10.4-2.5385-18.5648-10.7033-21.10332-21.10336H28.4998c1.3807 0 2.5 1.11926 2.5 2.49996v18.6034Z" clip-rule="evenodd"></path><defs><linearGradient id="product-icon-authorization-SiteMobileMenu-a" x1="16.2942" x2="16.2075" y1="16.7651" y2="36.4202" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset=".33" stop-color="#15E8E2"></stop><stop offset=".74" stop-color="#1FD3E0"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-authorization-SiteMobileMenu-b" x1="22.0036" x2="26.4551" y1="27.9902" y2="5.55009" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset=".63979" stop-color="#625AF5"></stop><stop offset="1" stop-color="#8A62FC"></stop></linearGradient></defs>
            </svg>
        ),
        label: "Authorization",
        description: "Acceptence optimisations",
    },
];



// Revenue and finance
const RevenueFinance = [
    {
        key: 'billing',
        svg: (<svg class="ProductIcon ProductIcon--Billing " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

            <title>Billing</title>

            <path d="M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 0 0 0 2.46v30.08a2.46 2.46 0 0 0 3.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z" fill="url(#product-icon-billing-SiteMobileMenu-a)"></path><path d="M26.5 39a13.5 13.5 0 1 0 0-27 13.5 13.5 0 0 0 0 27z" fill="#00D924"></path><path d="M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0 1 26 12z" fill="url(#product-icon-billing-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-billing-SiteMobileMenu-a" x1="13" y1="6.35" x2="13" y2="35.03" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD748"></stop><stop offset="1" stop-color="#FFC148"></stop></linearGradient><linearGradient id="product-icon-billing-SiteMobileMenu-b" x1="19.5" y1="12.01" x2="19.5" y2="30.19" gradientUnits="userSpaceOnUse"><stop stop-color="#00A600"></stop><stop offset="1" stop-color="#00D924"></stop></linearGradient></defs>
        </svg>),
        label: "Billing",
        description: 'Subscriptions and usage-based',
    },
    {
        key: 'revenueRecognition',
        svg: (<svg class="ProductIcon ProductIcon--RevRec " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    
            <title>Revenue Recognition</title>
          
          <path d="M24.4531 3.37679c.0004-.4707-.1391-.9309-.4008-1.32216-.2616-.39126-.6337-.69594-1.0689-.87535-.4351-.179408-.9138-.225461-1.3752-.1323-.4614.09315-.8847.32131-1.2161.65551L3.57784 18.493c-.33493.3321-.56335.7565-.65614 1.219-.09278.4626-.04573.9422.13515 1.3779.18089.4356.48742.8076.88051 1.0683.39309.2608.85494.3986 1.32665.3958h4.74979L24.4531 8.12657V3.37679z" fill="url(#product-icon-revrec-SiteMobileMenu-a)"></path><path d="M33.7627 8.12634h-9.3096V20.1789c0 .6299-.2502 1.2339-.6956 1.6793-.4453.4454-1.0494.6956-1.6793.6956H10.0138V36.625c0 .6299.2502 1.234.6956 1.6793.4454.4454 1.0494.6956 1.6793.6956h21.374c.6299 0 1.2339-.2502 1.6793-.6956.4454-.4453.6956-1.0494.6956-1.6793V10.5012c0-.62983-.2502-1.23389-.6956-1.67927-.4454-.44538-1.0494-.69559-1.6793-.69559z" fill="#9A66FF"></path><path d="M24.4531 20.1789V8.12634L10.0138 22.5538h12.0644c.6299 0 1.234-.2502 1.6793-.6956.4454-.4454.6956-1.0494.6956-1.6793z" fill="url(#product-icon-revrec-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-revrec-SiteMobileMenu-a" x1="13.7647" y1="1" x2="13.7647" y2="22.3532" gradientUnits="userSpaceOnUse"><stop offset=".270725" stop-color="#FF5091"></stop><stop offset="1" stop-color="#E03071"></stop></linearGradient><linearGradient id="product-icon-revrec-SiteMobileMenu-b" x1="16.0302" y1="22.3652" x2="24.2719" y2="6.84356" gradientUnits="userSpaceOnUse"><stop stop-color="#6E00F5"></stop><stop offset="1" stop-color="#9860FE"></stop></linearGradient></defs>
        </svg>),
        label: "Revenue Recognition",
        description: 'Accounting automation',
    },
    {
        key: 'tax',
        svg: (<svg class="ProductIcon ProductIcon--Tax " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    
            <title>Tax</title>
          
          <path d="M19.049.00995851C22.4341.325767 25.7367 1.28014 28.7794 2.83046c3.0426 1.55031 5.756 3.66123 8.0012 6.2142.9142 1.03954.6576 2.61624-.4624 3.42994L20.5259 23.9483c-1.6569 1.2039-3.98.0202-3.98-2.0279V2.40011c0-1.38439 1.1247-2.518749 2.5031-2.39015149z" fill="url(#product-icon-tax-SiteMobileMenu-a)"></path><circle cx="17.6666" cy="24.3334" transform="rotate(-90 17.6666 24.3334)" fill="#96F" r="15.6666"></circle><path d="M31.099 16.2665l-10.5731 7.6818c-1.6569 1.2038-3.98.0201-3.98-2.028V8.70618c.37-.02614.7436-.03943 1.1202-.03943 5.7019 0 10.6924 3.04605 13.4329 7.59975z" fill="url(#product-icon-tax-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-tax-SiteMobileMenu-a" x1="27.6927" y1="-.106484" x2="27.6927" y2="20.5734" gradientUnits="userSpaceOnUse"><stop offset=".23665" stop-color="#FF5191"></stop><stop offset="1" stop-color="#E03071"></stop></linearGradient><linearGradient id="product-icon-tax-SiteMobileMenu-b" x1="23.3061" y1="24.96" x2="18.8407" y2="7.43349" gradientUnits="userSpaceOnUse"><stop stop-color="#6E00F5"></stop><stop offset="1" stop-color="#9860FE"></stop></linearGradient></defs>
        </svg>),
        label: "Tax",
        description: 'Sales tax & VAT automation',
    },
    {
        key: 'invocing',
        svg: (<svg class="ProductIcon ProductIcon--Invoicing " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    
            <title>Invoicing</title>
          
          <path d="M12.5001 1C11.1194 1 10.0001 2.11929 10.0001 3.5V36.3314C10.0001 37.4628 9.24028 38.4532 8.14746 38.7462L36.1472 31.24C37.2401 30.9472 38.0001 29.9567 38.0001 28.8252V3.5C38.0001 2.11929 36.8808 1 35.5001 1H12.5001Z" fill="#00D924"></path><path d="M1.25338 24.5476C0.0575759 25.238 -0.352092 26.7668 0.338338 27.9626L5.81522 37.449C6.38097 38.4289 7.53438 38.9067 8.62734 38.6138L34.7744 31.6076L24.5869 13.9626C23.8969 12.7668 22.3676 12.3571 21.1718 13.0476L1.25338 24.5476Z" fill="url(#product-icon-invoicing-SiteMobileMenu-a)"></path><path d="M8.40173 38.6633C8.4771 38.6504 8.55237 38.6339 8.62737 38.6138L34.7744 31.6076L24.5869 13.9626C23.897 12.7668 22.3677 12.3571 21.1719 13.0476L10.0002 19.4976V36.3314C10.0002 37.3728 9.35638 38.2947 8.40173 38.6633Z" fill="url(#product-icon-invoicing-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-invoicing-SiteMobileMenu-a" x1="17.3897" y1="20.25" x2="17.3893" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD748"></stop><stop offset="1" stop-color="#FFC148"></stop></linearGradient><linearGradient id="product-icon-invoicing-SiteMobileMenu-b" x1="21.5889" y1="12.7122" x2="21.5881" y2="38.6633" gradientUnits="userSpaceOnUse"><stop stop-color="#00A600"></stop><stop offset="1" stop-color="#00D924"></stop></linearGradient></defs>
        </svg>),
        label: "Invocing",
        description: 'Online reports',
    },
    {
        key: 'sigma',
        svg: (<svg class="ProductIcon ProductIcon--Sigma " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    
            <title>Sigma</title>
          
          <path d="M5 35V7a3 3 0 0 1 5.48-1.69L21.2 21 9.32 38H8a3 3 0 0 1-3-3z" fill="url(#product-icon-sigma-SiteMobileMenu-a)"></path><path d="M8.06 4h25.16a1.5 1.5 0 0 1 1.1 2.51L21.15 21 5.84 4.92A3 3 0 0 1 8.05 4z" fill="url(#product-icon-sigma-SiteMobileMenu-b)"></path><path d="M7.88 38H33.2a1.5 1.5 0 0 0 1.11-2.51L21.11 21 7.14 36.33A1 1 0 0 0 7.88 38z" fill="#9A66FF"></path><defs><linearGradient id="product-icon-sigma-SiteMobileMenu-a" x1="13.1" y1="38" x2="13.1" y2="12.99" gradientUnits="userSpaceOnUse"><stop stop-color="#9860FE"></stop><stop offset="1" stop-color="#6E00F5"></stop></linearGradient><linearGradient id="product-icon-sigma-SiteMobileMenu-b" x1="20.28" y1="8.42" x2="20.28" y2="19.47" gradientUnits="userSpaceOnUse"><stop stop-color="#FF5091"></stop><stop offset="1" stop-color="#E03071"></stop></linearGradient></defs>
        </svg>),
        label: "Sigma",
        description: 'Custom reports',
    },
    {
        key: 'dataPipe',
        svg: (<svg class="ProductIcon ProductIcon--DataPipeline " width="20" height="20" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 10.813h-.938C3.75 10.813 0 14.957 0 19.718c0 4.761 3.75 8.906 8.438 8.906H18.75c1.035 0 1.875-.84 1.875-1.875v-6.563H11.25a1.875 1.875 0 0 1-1.875-1.875v-7.5Z" fill="url(#product-icon-data-pipeline-SiteMobileMenu-a)"></path><path d="M20.625 12.688c0-1.036-.84-1.876-1.875-1.876H9.375v7.5c0 1.036.84 1.875 1.875 1.875h9.375v-7.5Z" fill="url(#product-icon-data-pipeline-SiteMobileMenu-b)"></path><path d="M9.375 4.25c0-1.036.84-1.875 1.875-1.875h10.313C26.25 2.375 30 6.52 30 11.281c0 4.762-3.75 8.906-8.438 8.906h-.937v-7.5c0-1.035-.84-1.874-1.875-1.874H9.375V4.25Z" fill="#9A66FF"></path><defs><linearGradient id="product-icon-data-pipeline-SiteMobileMenu-a" x1="9.375" y1="11.75" x2="4.875" y2="29" gradientUnits="userSpaceOnUse"><stop stop-color="#E03071"></stop><stop offset="1" stop-color="#FF5091"></stop></linearGradient><linearGradient id="product-icon-data-pipeline-SiteMobileMenu-b" x1="12.375" y1="20" x2="15.078" y2="9.056" gradientUnits="userSpaceOnUse"><stop stop-color="#9860FE"></stop><stop offset="1" stop-color="#6E00F5"></stop></linearGradient></defs></svg>),
        label: "Data Pipeline",
        description: 'Data sync',
    }
];


export {
    ProductConstant,
    ProductGlobal,
    RevenueFinance
};



