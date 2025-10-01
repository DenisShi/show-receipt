// import { useState, useEffect } from 'react';

// interface ShowReceiptProps {
//   transactionId?: number;
//   // moduleName?: string;
// }

// const testChargingReceipt = {
//   receiptId: 'EV-CZ-2024-789',
//   transactionId: 'TXN-CZ-456123',
//   date: '15.03.2024',
//   time: '14:30:25',

//   stationInfo: {
//     id: 'STA-PRG-789',
//     name: 'CEZ Charging Station #789',
//     operator: 'CEZ Group',
//     address: 'Na Strži 1717/2, Prague 4, 140 00',
//     city: 'Prague'
//   },

//   vehicleInfo: {
//     make: 'Škoda',
//     model: 'Enyaq iV',
//     licensePlate: '4A2 1234'
//   },

//   userInfo: {
//     userId: 'CZ-USER-88452',
//     name: 'Jan Novák'
//   },

//   chargingSession: {
//     startTime: '15.03.2024 13:15:30',
//     endTime: '15.03.2024 14:30:25',
//     duration: '1h 15m',

//     startBatteryLevel: 15,
//     endBatteryLevel: 85,
//     energyAdded: 42.5,

//     connectorType: 'CCS Combo 2',
//     maxPower: 150
//   },

//   pricing: {
//     currency: 'CZK',
//     energyRate: 8.5,
//     energyCost: 361.25,
//     sessionFee: 35,
//     subtotal: 396.25,
//     tax: 84.25,
//     vatRate: 21,
//     total: 480.5
//   },

//   payment: {
//     method: 'Credit Card',
//     cardType: 'Mastercard',
//     lastDigits: '7890'
//   },

//   environmentalImpact: {
//     co2Saved: 18.7
//   }
// };

// function ShowReceipt(receiptProps: ShowReceiptProps) {
//   const [receiptData, setReceiptData] = useState(null);
//   const [isOpenReceipt, setIsOpenReceipt] = useState(false);

//   const { transactionId } = receiptProps;

//   // useEffect(() => {
//   //   const fetchReceiptData = async () => {
//   //     try {
//   //       const url = '/api/receipt';
//   //       const response = await fetch(`${url}`);
//   //       const data = await response.json();
//   //       console.log('Receipt data:', data);
//   //       setReceiptData(data);
//   //     } catch (error) {
//   //       console.error('Error fetching receipt data:', error);
//   //     }
//   //   };
//   //   fetchReceiptData();
//   // });

//   ////////// logic to show receipt modal //////////

//   const showReceipt = () => {
//     console.log('Show receipt for transaction ID:', transactionId);
//     isOpenReceipt ? setIsOpenReceipt(true) : setIsOpenReceipt(false);

//     return (
//       <div>
//         <h2>Receipt Data</h2>
//         {receiptData ? <pre>{JSON.stringify(receiptData, null, 2)}</pre> : <p>Loading receipt data...</p>}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h2>Receipt Data</h2>
//       {receiptData ? <pre>{JSON.stringify(receiptData, null, 2)}</pre> : <p>Loading receipt data...</p>}
//       <button onClick={showReceipt}>Show Receipt</button>
//       {isOpenReceipt && JSON.stringify(testChargingReceipt, null, 2)}
//     </div>
//   );
// }

// export default ShowReceipt;

///////////////////////////////////////////////////////

// import { useState, useEffect } from 'react';
// import './ShowReceipt.css';

// type TestChargingReceiptType = {
//   receiptId: string;
//   transactionId: string;
//   date: string;
//   time: string;
//   stationInfo: {
//     id: string;
//     name: string;
//     operator: string;
//     address: string;
//     city: string;
//   };
//   vehicleInfo: {
//     make: string;
//     model: string;
//     licensePlate: string;
//   };
//   userInfo: {
//     userId: string;
//     name: string;
//   };
//   chargingSession: {
//     startTime: string;
//     endTime: string;
//     duration: string;
//     startBatteryLevel: string;
//     endBatteryLevel: string;
//     energyAdded: string;
//     connectorType: string;
//     maxPower: string;
//   };
//   pricing: {
//     currency: string;
//     energyRate: string;
//     energyCost: string;
//     sessionFee: string;
//     subtotal: string;
//     tax: string;
//     vatRate: string;
//     total: string;
//   };
//   payment: {
//     method: string;
//     cardType: string;
//     lastDigits: string;
//   };
//   environmentalImpact: {
//     co2Saved: string;
//   };
// };

// interface ShowReceiptProps {
//   transactionId?: number;
//   // moduleName?: string;
// }

// const testChargingReceipt = {
//   receiptId: 'EV-CZ-2024-789',
//   transactionId: 'TXN-CZ-456123',
//   date: '15.03.2024',
//   time: '14:30:25',

//   stationInfo: {
//     id: 'STA-PRG-789',
//     name: 'CEZ Charging Station #789',
//     operator: 'CEZ Group',
//     address: 'Na Strži 1717/2, Prague 4, 140 00',
//     city: 'Prague'
//   },

//   vehicleInfo: {
//     make: 'Škoda',
//     model: 'Enyaq iV',
//     licensePlate: '4A2 1234'
//   },

//   userInfo: {
//     userId: 'CZ-USER-88452',
//     name: 'Jan Novák'
//   },

//   chargingSession: {
//     startTime: '15.03.2024 13:15:30',
//     endTime: '15.03.2024 14:30:25',
//     duration: '1h 15m',

//     startBatteryLevel: 15,
//     endBatteryLevel: 85,
//     energyAdded: 42.5,

//     connectorType: 'CCS Combo 2',
//     maxPower: 150
//   },

//   pricing: {
//     currency: 'CZK',
//     energyRate: 8.5,
//     energyCost: 361.25,
//     sessionFee: 35,
//     subtotal: 396.25,
//     tax: 84.25,
//     vatRate: 21,
//     total: 480.5
//   },

//   payment: {
//     method: 'Credit Card',
//     cardType: 'Mastercard',
//     lastDigits: '7890'
//   },

//   environmentalImpact: {
//     co2Saved: 18.7
//   }
// };

// function ShowReceipt(receiptProps: ShowReceiptProps) {
//   const [receiptData, setReceiptData] = useState<TestChargingReceiptType | null>(null);
//   const [isOpenReceipt, setIsOpenReceipt] = useState(false);

//   const { transactionId } = receiptProps;

//   useEffect(() => {
//     setReceiptData(testChargingReceipt);
//   }, []);

//   ////////// logic to show receipt modal //////////
//   const showReceipt = () => {
//     console.log('Show receipt for transaction ID:', transactionId);
//     setIsOpenReceipt(true);
//   };

//   const closeReceipt = () => {
//     setIsOpenReceipt(false);
//   };

//   return (
//     <div>
//       <button className="receiptButton" onClick={showReceipt}>
//         Show Receipt
//       </button>

//       {isOpenReceipt && (
//         <div className="modalContainer" onClick={closeReceipt}>
//           <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//             <button className="closeButton" onClick={closeReceipt}>
//               ×
//             </button>
//             <h2 className="receiptTitle">Charging Receipt</h2>
//             {receiptData ? (
//               <div>
//                 <pre className="receiptPre">{JSON.stringify(receiptData, null, 2)}</pre>
//               </div>
//             ) : (
//               <p className="loadingText">Loading receipt data...</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShowReceipt;

import { useState, useEffect } from 'react';
import './ShowReceipt.css';

interface ShowReceiptProps {
  transactionId?: number;
  // moduleName?: string;
}

type TestChargingReceiptType = {
  transactionId: string;
  receiptDate: string;
  receiptLines: string[];
};

const testChargingReceipt: TestChargingReceiptType = {
  transactionId: 'BnRGv1',
  receiptDate: '2025-06-30T15:01:24.11+00:00',
  receiptLines: [
    'OMV Tankstelle',
    'Elizabeta Stampfer',
    'Speisinger Straße 228',
    '1230 Wien',
    'UID: ATU61549015',
    'Tankstellen-Nr.: 7505',
    'Tel.: +43 (0) 1 8887229',
    'Fax : +43 (0) 1 888722919',
    '',
    '',
    '',
    'Datum und Uhrzeit: 30.06.2025   15:01:24',
    'Beleg Nr.:          9972/64/250630/00001',
    'Fiskal Nr.:          09972064/20250630/1',
    'Automat Nr.:                          64',
    'Eindeutige Nummer:                   257',
    '----------------------------------------',
    '###            Rechnung              ###',
    '----------------------------------------',
    'ZP  Artikel Bezeichnung            Summe',
    'MwSt  Menge         Preis/Einheit',
    '----------------------------------------',
    '* 8     97  OMV eMotion AC         3,58*',
    '*0,0  (5,19  kWh x     0,690 EUR)[A]   *',
    'Steueranteil:        1,35 EUR',
    'Nettowert:           2,23 EUR',
    '----------------------------------------',
    'MwSt %   Ohne MwSt     MwSt       Gesamt',
    '0,0        3,58       0,00         3,58',
    '========================================',
    'Gesamtbetrag:                   3,58 EUR',
    '========================================',
    'Maestro:                        3,58 EUR',
    'Vorautorisierungsbetrag:      EUR 100.00',
    '',
    'Der Verkauf von mit [A] gekennzeichneten',
    'Waren erfolgt im Namen und auf Rechnung:',
    'OMV Downstream GmbH',
    'Trabrennstrasse 6-8, 1020 Wien',
    'Ust-IdNr.: ATU48359903',
    '',
    'Kassenidentifikationsnummer:    09972064',
    '_R1-ATU12345678_09972064_2025063000000001_2025-06-30T15:01:28_0,00_0,00_0,00_3,58_0,00_h/QIWnlEotAls6pKKHdClA==_U:ATU12345678_P4R6DdQmDjU=_MEUCICOkypMfw8bsq5Txk6izMRSBL9kn5N2ILxzGcAj4jWzVAiEA/sTj+GfA0X/FwQ0+kV+V0aQjyC6so5bWj0Tli7aykWE=',
    '',
    'Wir danken für Ihren Einkauf!',
    'Gu(r)te Fahrt!',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
};

function ShowReceipt(receiptProps: ShowReceiptProps) {
  const [receiptData, setReceiptData] = useState<TestChargingReceiptType | null>(null);
  const [isOpenReceipt, setIsOpenReceipt] = useState(false);

  const { transactionId } = receiptProps;

  useEffect(() => {
    setReceiptData(testChargingReceipt);
  }, []);

  const showReceipt = () => {
    console.log('Show receipt for transaction ID:', transactionId);
    setIsOpenReceipt(true);
  };

  const closeReceipt = () => {
    setIsOpenReceipt(false);
  };

  return (
    // <div>
    //   <button className="receiptButton" onClick={showReceipt}>
    //     Show Receipt
    //   </button>

    //   {isOpenReceipt && (
    //     <div className="modalContainer" onClick={closeReceipt}>
    //       <div className="modalContent" onClick={(e) => e.stopPropagation()}>
    //         <button className="closeButton" onClick={closeReceipt}>
    //           ×
    //         </button>
    //         <h2 className="receiptTitle">Charging Receipt</h2>
    //         {receiptData ? (
    //           <div>
    //             <pre className="receiptPre">{JSON.stringify(receiptData, null, 2)}</pre>
    //           </div>
    //         ) : (
    //           <p className="loadingText">Loading receipt data...</p>
    //         )}
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div>
      <button className="receiptButton" onClick={showReceipt}>
        Show Receipt
      </button>

      {isOpenReceipt && (
        <div className="modalContainer" onClick={closeReceipt}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closeReceipt}>
              ×
            </button>
            <h2 className="receiptTitle">Charging Receipt</h2>

            {receiptData ? (
              <div className="receipt-text-content">
                <pre className="receipt-text">
                  {receiptData.receiptLines
                    .filter((line: string) => line.trim() !== '')
                    .map((line: string, index: number) => (
                      <div key={index} className={line.startsWith('---') ? 'receipt-divider' : 'receipt-line'}>
                        {line}
                      </div>
                    ))}
                </pre>
              </div>
            ) : (
              <p className="loadingText">Loading receipt data...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowReceipt;
