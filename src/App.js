import React, { useState,useEffect } from "react";
import xmlbuilder from 'xmlbuilder';
import axios from "axios";

    // Sample Input Data for Testing
    const jsonData ={
        "formTypeXid": 11,
        "createdOn": "2024-12-11T13:19:57.3166667",
        "paymentStatusXid": 4,
        "invoiceXID": null,
        "nameEng": null,
        "clientCompanyName": "CALIBRECUE IT SOLUTIONS PRIVATE LIMITED",
        "mobileNo": "4545454",
        "paymentTerms": "",
        "purchaseOrder": "3",
        "purchaseOrderDate": "2024-12-11T07:49:25.501Z",
        "remarks": "",
        "paymentRemarks": "",
        "validity": null,
        "invoiceCreatedOn": "2024-12-11T07:49:25.501",
        "clientEmailAddress": "",
        "taxes": "",
        "delivery": null,
        "pandF": null,
        "transport": null,
        "tYear": "23-24",
        "refID": 5,
        "dateofIssue": "2024-12-11T13:19:57.0481262",
        "dateofRemoval": "2024-12-11T13:19:57.0481264",
        "timefIssue": null,
        "timefremoval": null,
        "isGST": true,
        "stateXid": 1,
        "buyerClientXid": 2051,
        "deliveryNote": null,
        "modeorTermsOfPayment": null,
        "otherReferences": null,
        "despatchedDocumentNumber": null,
        "deliveryNoteDate": null,
        "clients": {
            "pid": 2051,
            "clientReferenceNumber": 2,
            "companyName": "EQUATOR GLOBAL TRADING PVT.LTD",
            "mobile": "4545454",
            "email": "aaaa@calibrecue.com",
            "password": null,
            "countryXid": null,
            "country": null,
            "branchXid": null,
            "branches": null,
            "isLocked": false,
            "prefix": "CC",
            "clientPrefix": "CLT",
            "cbXid": null,
            "companyBranches": null,
            "poBox": "3",
            "tradeLicenseNumber": null,
            "trnNumber": null,
            "telephoneOrFaxNo": null,
            "officeAddress": "Balanagar",
            "createdOn": "2024-12-11T07:49:58.4815032Z",
            "lastEdit": "2024-12-11T07:49:58.4815034Z",
            "lastEditByXid": 9999,
            "modifiedBy": null,
            "oldRefNo": "333",
            "clientLPO": null,
            "contracts": null,
            "userClientMappings": null,
            "gstin": null,
            "pan": null,
            "stateXid": 36,
            "firstName": "EQUATOR",
            "lastName": null,
            "masterStateNames": {
                "pid": 36,
                "stateCode": "36",
                "stateName": "TELANGANA",
                "isActive": true,
                "createdOn": "2023-11-26T12:08:56.2033333",
                "lastEdit": "2023-11-26T12:08:56.2033333",
                "lastEditByXid": 9999
            },
            "existingClientXid": null,
            "clients": null,
            "buyerClients": null,
            "companyBranchInvoices": null,
            "paymentTransactions": null,
            "invoiceProductDetails": null,
            "paymentTransactionsArray": null,
            "isUser": false,
            "companyXid": 0,
            "clientTypeXid": 1,
            "clientTypes": null,
            "isWhatsApp": false,
            "sendWAWelcomeMessage": false
        },
        "buyerClients": {
            "pid": 2051,
            "clientReferenceNumber": 2,
            "companyName": "",
            "mobile": "4545454",
            "email": "aaaa@calibrecue.com",
            "password": null,
            "countryXid": null,
            "country": null,
            "branchXid": null,
            "branches": null,
            "isLocked": false,
            "prefix": "CC",
            "clientPrefix": "CLT",
            "cbXid": null,
            "companyBranches": null,
            "poBox": "3",
            "tradeLicenseNumber": null,
            "trnNumber": null,
            "telephoneOrFaxNo": null,
            "officeAddress": "Balanagar",
            "createdOn": "2024-12-11T07:49:58.4851891Z",
            "lastEdit": "2024-12-11T07:49:58.4851892Z",
            "lastEditByXid": 9999,
            "modifiedBy": null,
            "oldRefNo": "333",
            "clientLPO": null,
            "contracts": null,
            "userClientMappings": null,
            "gstin": null,
            "pan": null,
            "stateXid": 36,
            "firstName": "EQUATOR",
            "lastName": null,
            "masterStateNames": {
                "pid": 36,
                "stateCode": "36",
                "stateName": "TELANGANA",
                "isActive": true,
                "createdOn": "2023-11-26T12:08:56.2033333",
                "lastEdit": "2023-11-26T12:08:56.2033333",
                "lastEditByXid": 9999
            },
            "existingClientXid": null,
            "clients": null,
            "buyerClients": null,
            "companyBranchInvoices": null,
            "paymentTransactions": null,
            "invoiceProductDetails": null,
            "paymentTransactionsArray": null,
            "isUser": false,
            "companyXid": 0,
            "clientTypeXid": 1,
            "clientTypes": null,
            "isWhatsApp": false,
            "sendWAWelcomeMessage": false
        },
        "companyBranches": {
            "pid": 2038,
            "phone": "33939393",
            "mobile": "33939393",
            "poBox": "H. No, 14-1, 89/1/A, Gayatri Nagar, Allapur, Borabanda, Hyderabad",
            "fax": null,
            "email": "rehman@calibrecue.com",
            "webSite": null,
            "heading": "Treadmill - Cross Trainer - Elliptical Bikes - Home Gym - Multi Stations Sales and Service",
            "branchXid": 6,
            "branches": null,
            "companyXid": 2041,
            "companies": null,
            "createdOn": "2024-11-18T13:34:03.35",
            "lastEdit": "2024-11-18T13:34:03.35",
            "lastEditByXid": 9999,
            "modifiedBy": null,
            "userCompanies": null,
            "imageName": null,
            "imagePath": null,
            "companyBranchConfigurations": {
                "pid": 2037,
                "cbXid": 2038,
                "prefix": "CC",
                "clientPrefix": "CLT",
                "contractPrefix": "CON",
                "subContractPrefix": "SUB-CON",
                "reporttPrefix": "RPT",
                "clientRefNumber": 1,
                "contractRefNumber": 1,
                "reportRefNumber": 1,
                "createdOn": "2024-11-18T13:34:03.6233333",
                "lastEdit": "2024-11-18T13:34:03.6233333",
                "lastEditByXid": 12046,
                "modifiedBy": null,
                "termsXID": 1,
                "termsAndConditions": {
                    "pid": 1,
                    "termsDetails": "1Declaration\r\nWe Declare that this Invoice Shows the Actual Price of the Goods\r\nDescribed and that all Particulars are true and Correct.",
                    "isActive": true,
                    "createdOn": "2024-07-15T04:49:17.9266667",
                    "lastEdit": "2024-07-15T04:49:17.9266667",
                    "lastEditByXid": 9999,
                    "modifiedBy": null
                },
                "show4Copies": true,
                "posHeading": "POS",
                "posPrintFull": true,
                "showfooterOfCalibreCue": true,
                "showDiscount": true,
                "showColorCode": true,
                "walletNumber": null,
                "isGooglePay": false,
                "isPhonePay": false,
                "showWalletInInvoice": false,
                "showPreviousBalanceInInvoice": false,
                "enableWhatsApp": true,
                "invoiceHeading": "Invoice",
                "projectPrefix": null,
                "projectRefNumber": null
            },
            "gstin": null,
            "arn": null,
            "pan": null,
            "stateXid": 36,
            "stateNames": {
                "pid": 36,
                "stateCode": "36",
                "stateName": "TELANGANA",
                "isActive": true,
                "createdOn": "2023-11-26T12:08:56.2033333",
                "lastEdit": "2023-11-26T12:08:56.2033333",
                "lastEditByXid": 9999
            },
            "tinNo": null,
            "cstNo": null,
            "eccNo": null,
            "companyBranchBanks": [
                {
                    "pid": 15,
                    "cbXid": 2038,
                    "bankName": "AXIS",
                    "accountNo": "",
                    "bankBranch": null,
                    "ifscCode": null,
                    "bankAddress": null,
                    "isActive": true,
                    "isDefault": false,
                    "createdOn": "2024-11-18T13:34:03.7066667",
                    "lastEdit": "2024-11-18T13:34:03.7066667",
                    "lastEditByXid": 9999
                }
            ],
            "isActive": null,
            "isDeleted": null,
            "nameEng": "HR FITNESS",
            "companySignature": "For HR FITNESS"
        },
        "termsAndConditions": {
            "pid": 1,
            "termsDetails": "1Declaration\r\nWe Declare that this Invoice Shows the Actual Price of the Goods\r\nDescribed and that all Particulars are true and Correct.",
            "isActive": true,
            "createdOn": "2024-07-15T04:49:17.9266667",
            "lastEdit": "2024-07-15T04:49:17.9266667",
            "lastEditByXid": 9999,
            "modifiedBy": null
        },
        "companyBranchesBank": [
            {
                "pid": 15,
                "bankName": "AXIS",
                "bankAddress": null,
                "bankBranch": null,
                "ifscCode": null
            }
        ],
        "invoiceProductDetails": [
            {
                "pid": 9598,
                "itemXID": 3095,
                "description": "XLCWASHER",
                "invoiceXID": 9732,
                "quantity": 1,
                "uom": "Nos",
                "quantityAmount": 600,
                "totalAmount": 600,
                "invoiceDiscountType": 0,
                "invoiceDiscountValue": 0,
                "invoiceDiscountAmount": 0,
                "totalRateBeforeDiscount": 0,
                "exciseDutyTotalInWords": null,
                "hsncode": "3343443",
                "gstPer": 18,
                "sgstPer": 9,
                "sgstAmount": 54,
                "cgstPer": 9,
                "cgstAmount": 54,
                "igstPer": 0,
                "igstAmount": 0,
                "afterGSTAmount": 708,
                "mfgDate": null,
                "expDate": null,
                "cases": null,
                "createdOn": "2024-12-11T13:19:57.62",
                "lastEdit": "2024-12-11T13:19:57.62",
                "lastEditByXid": 9999,
                "isDeleted": false,
                "colorCode": null,
                "colorAmount": null,
                "isReward": false,
                "isAdditionalCharges": false,
                "nameEng": null,
                "materialName": "MS",
                "specificationTypeName": "Size",
                "specificationTypeDetailName": "200x200x250",
                "brandName": "TVS",
                "brandXID": 21
            },
            {
                "pid": 9599,
                "itemXID": 3096,
                "description": "MS PIPE",
                "invoiceXID": 9732,
                "quantity": 1,
                "uom": "Nos",
                "quantityAmount": 6000,
                "totalAmount": 6000,
                "invoiceDiscountType": 0,
                "invoiceDiscountValue": 0,
                "invoiceDiscountAmount": 0,
                "totalRateBeforeDiscount": 0,
                "exciseDutyTotalInWords": null,
                "hsncode": "443434",
                "gstPer": 18,
                "sgstPer": 9,
                "sgstAmount": 540,
                "cgstPer": 9,
                "cgstAmount": 540,
                "igstPer": 0,
                "igstAmount": 0,
                "afterGSTAmount": 7080,
                "mfgDate": null,
                "expDate": null,
                "cases": null,
                "createdOn": "2024-12-11T13:19:57.62",
                "lastEdit": "2024-12-11T13:19:57.62",
                "lastEditByXid": 9999,
                "isDeleted": false,
                "colorCode": null,
                "colorAmount": null,
                "isReward": false,
                "isAdditionalCharges": false,
                "nameEng": null,
                "materialName": "SS",
                "specificationTypeName": "Size",
                "specificationTypeDetailName": "200x200x250",
                "brandName": "TVS",
                "brandXID": 21
            },
            {
                "pid": 9600,
                "itemXID": 3097,
                "description": "XXCLOTH",
                "invoiceXID": 9732,
                "quantity": 1,
                "uom": "NOS",
                "quantityAmount": 330,
                "totalAmount": 330,
                "invoiceDiscountType": 0,
                "invoiceDiscountValue": 0,
                "invoiceDiscountAmount": 0,
                "totalRateBeforeDiscount": 0,
                "exciseDutyTotalInWords": null,
                "hsncode": "34343",
                "gstPer": 18,
                "sgstPer": 9,
                "sgstAmount": 29.7,
                "cgstPer": 9,
                "cgstAmount": 29.7,
                "igstPer": 0,
                "igstAmount": 0,
                "afterGSTAmount": 389.4,
                "mfgDate": null,
                "expDate": null,
                "cases": null,
                "createdOn": "2024-12-11T13:19:57.62",
                "lastEdit": "2024-12-11T13:19:57.62",
                "lastEditByXid": 9999,
                "isDeleted": false,
                "colorCode": null,
                "colorAmount": null,
                "isReward": false,
                "isAdditionalCharges": false,
                "nameEng": "MS",
                "materialName": "MS",
                "specificationTypeName": "SIZE",
                "specificationTypeDetailName": "200 X 200 / 300",
                "brandName": "TVS-Local",
                "brandXID": 22
            }
        ],
        "paymentInvoiceMaps": [],
        "paymentTransactions": null,
        "transactionStatusXid": 2
    };

const InvoiceForm = () => {
    const [formData, setFormData] = useState(jsonData);
    const [xmlOutput, setXmlOutput] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate total amount including GST for all products
    const calculateFinalTotalAmount = () => {
        let totalStockItemsAmount = 0;
        let totalCGSTAmount = 0;
        let totalSGSTAmount = 0;

        formData.invoiceProductDetails.forEach((product) => {
            const { quantity = 0, quantityAmount = 0, gstPer = 0 } = product;
            const baseAmount = quantity * quantityAmount;
            const gstAmount = (baseAmount * (gstPer / 100)) / 2; // SGST = CGST = GST/2
            totalStockItemsAmount += baseAmount;
            totalCGSTAmount += gstAmount;
            totalSGSTAmount += gstAmount;
            
        });
        const finalTotal = totalStockItemsAmount + totalCGSTAmount + totalSGSTAmount;
        setTotalAmount(finalTotal); // Update state with the final total
        return finalTotal; 
    };
  
    useEffect(() => {
        calculateFinalTotalAmount();
    }, [formData.invoiceProductDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'totalAmount') {
            setFormData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
        } else if (name === 'purchaseOrderDate') {
            setFormData((prev) => ({ ...prev, [name]: value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleClientChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            clients: { ...prev.clients, [name]: value },
        }));
    };

    const handleProductChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProducts = [...formData.invoiceProductDetails];
        updatedProducts[index][name] = name === 'quantity' || name === 'quantityAmount' || name === 'gstPer' ? parseFloat(value) || 0 : value;
        setFormData((prev) => ({ ...prev, invoiceProductDetails: updatedProducts }));
    };

    const addProduct = () => {
        setFormData((prev) => ({
            ...prev,
            invoiceProductDetails: [
                ...prev.invoiceProductDetails,
                { description: "", quantity: 0, uom: "", quantityAmount: 0, gstPer: 0 },
            ],
        }));
    };


    const generateTallyXML = (jsonData) => {
        const { clientCompanyName, purchaseOrderDate, totalAmount ,companyName,refID} = jsonData;
        // Calculate total amount before proceeding
        const calculatedTotalAmount = calculateFinalTotalAmount(); // Call the function and get the total amount
        // Create the root element
        const xml = xmlbuilder.create('ENVELOPE');
        // Add the HEADER section
        xml.ele('HEADER')
            .ele('TALLYREQUEST', 'Import Data').up()
            .up();
        // Add the BODY section
        const body = xml.ele('BODY')
            .ele('IMPORTDATA')
            .ele('REQUESTDESC')
            .ele('REPORTNAME', 'Vouchers').up()
            .ele('STATICVARIABLES')
            .ele('SVCURRENTCOMPANY', clientCompanyName).up()
            .up().up();
        // Add the REQUESTDATA section with the VOUCHER
        const tallyMessage = body.ele('REQUESTDATA')
            .ele('TALLYMESSAGE', { 'xmlns:UDF': 'TallyUDF' })
            .ele('VOUCHER', { REMOTEID: '', VCHTYPE: 'Sales', ACTION: 'Create' });
        // Set voucher details
        tallyMessage.ele('VOUCHERTYPENAME', 'Sales').up();
        tallyMessage.ele('DATE', purchaseOrderDate.split("T")[0].replace(/-/g, '')).up();
        tallyMessage.ele('EFFECTIVEDATE', '20240401').up();
        tallyMessage.ele('REFERENCE').up();
        tallyMessage.ele('NARRATION').up();
        tallyMessage.ele('VOUCHERNUMBER', jsonData.refID).up();
        tallyMessage.ele('ALTERID', '174656').up(); // Adding ALTERID here
        // Add the first ledger entry (Client)
        const ledgerEntry = tallyMessage.ele('ALLLEDGERENTRIES.LIST');
        ledgerEntry.ele('REMOVEZEROENTRIES', 'No').up();
        ledgerEntry.ele('ISDEEMEDPOSITIVE', 'Yes').up();
        ledgerEntry.ele('LEDGERNAME',jsonData.clients.companyName).up(); // Use clientCompanyName from jsonData
        calculateFinalTotalAmount();
        console.log("totalamount",-calculatedTotalAmount);
        ledgerEntry.ele('AMOUNT', -calculatedTotalAmount.toFixed(2)).up();
       // ledgerEntry.ele('AMOUNT', -totalAmount.toFixed(2)).up(); // Negative amount for sales
        // Start the ALLLEDGERENTRIES.LIST for product entries
        const productEntriesList = tallyMessage.ele('ALLLEDGERENTRIES.LIST');
        // Function to accumulate CGST and SGST amounts
        const accumulateGSTAmounts = (products) => {
            let totalCGSTAmount = 0;
            let totalSGSTAmount = 0;
            let gstSalesAdded = false;
            for (const product of products) {
                const { description, quantity, quantityAmount, gstPer } = product;
                // Debugging output to check input values
                console.log('Product Details - Description: ${description}, Quantity: ${quantity}, Quantity Amount: ${quantityAmount}, GST Percentage: ${gstPer}');
                const baseAmount = quantity * quantityAmount;
                const sgstAmount = (baseAmount * (gstPer / 100)) / 2; // Calculate SGST amount
                const cgstAmount = sgstAmount; // CGST is equal to SGST in this case
                // Accumulate CGST and SGST amounts
                totalCGSTAmount += cgstAmount;
                totalSGSTAmount += sgstAmount;
                console.log('Processing Product: ${description}, Base Amount: ${baseAmount.toFixed(2)}, CGST Amount: ${cgstAmount.toFixed(2)}, SGST Amount: ${sgstAmount.toFixed(2)}'); // Debugging output
                const totalAmountForProduct = baseAmount + sgstAmount + cgstAmount;
                // Check if GST Sales @ gstPer% should be added only once
                if (!gstSalesAdded) {
                    productEntriesList.ele('REMOVEZEROENTRIES', 'No').up();
                    productEntriesList.ele('ISDEEMEDPOSITIVE', 'No').up();
                    productEntriesList.ele('LEDGERNAME', `GST Sales @ ${gstPer}%`).up();
                    productEntriesList.ele('AMOUNT', totalAmountForProduct.toFixed(2)).up();
                    gstSalesAdded = true; // Set flag to true after adding this entry
                }
                // Inventory allocation for each product
                const inventory = productEntriesList.ele('INVENTORYALLOCATIONS.LIST');
                inventory.ele('ISDEEMEDPOSITIVE', 'No').up();
                inventory.ele('STOCKITEMNAME', description).up();
                inventory.ele('AMOUNT', baseAmount.toFixed(2)).up();
                inventory.ele('ACTUALQTY', quantity).up();
                inventory.ele('BILLEDQTY', quantity).up();
                inventory.ele('RATE', quantityAmount.toFixed(2)).up();
                // Adding BATCHALLOCATIONS.LIST after RATE
                const batchAllocations = inventory.ele('BATCHALLOCATIONS.LIST');
                batchAllocations.ele('TRACKINGNUMBER').up(); // Empty Tracking Number
                batchAllocations.ele('MFDON', '20240401').up(); // Example MFDON date
                batchAllocations.ele('EXPIRYPERIOD').up(); // Empty Expiry Period
                batchAllocations.ele('AMOUNT', (baseAmount * 0.1).toFixed(2)).up(); // Example Amount, adjust as needed
                batchAllocations.ele('ACTUALQTY', quantity).up(); 
                batchAllocations.ele('BILLEDQTY', quantity).up(); 
                batchAllocations.ele('GODOWNNAME').up(); // Empty Godown Name
            }
            return { totalCGSTAmount, totalSGSTAmount }; // Return accumulated amounts
        };
        // Call the function to get accumulated values
        const { totalCGSTAmount, totalSGSTAmount } = accumulateGSTAmounts(jsonData.invoiceProductDetails);
        console.log("Total CGST Amount:", totalCGSTAmount);  // Debugging output
        console.log("Total SGST Amount:", totalSGSTAmount);  // Debugging output
        // Now add CGST Entry using accumulated value after exiting loop
        if (totalCGSTAmount > 0) {
            const cgstEntry = tallyMessage.ele('ALLLEDGERENTRIES.LIST');
            cgstEntry.ele('REMOVEZEROENTRIES', 'No').up();
            cgstEntry.ele('ISDEEMEDPOSITIVE', 'No').up();
            cgstEntry.ele('LEDGERNAME', 'CGST').up();
            cgstEntry.ele('AMOUNT', totalCGSTAmount.toFixed(2)).up();  // Use accumulated CGST amount here
        }
        // Add SGST Entry using accumulated value after exiting loop
        if (totalSGSTAmount > 0) {
            const sgstEntry = tallyMessage.ele('ALLLEDGERENTRIES.LIST');
            sgstEntry.ele('REMOVEZEROENTRIES', 'No').up();
            sgstEntry.ele('ISDEEMEDPOSITIVE', 'No').up();
            sgstEntry.ele('LEDGERNAME', 'SGST').up();
            sgstEntry.ele('AMOUNT', totalSGSTAmount.toFixed(2)).up();  // Use accumulated SGST amount here
        }
        // Finalize and return XML as a string with pretty formatting
        return xml.end({ pretty: true });
    };
    console.log(xmlOutput);
// Call the function with sample data for testing
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Generate XML from form data
        const tallyXML = generateTallyXML(formData);
        // Set the generated XML to state to display it
        setXmlOutput(tallyXML);
        // Post the XML to Tally Server
        console.log('Generated XML:', tallyXML); // Log the generated XML
        try {
          const response = await axios.post('http://localhost:5000/tally',tallyXML, {
            headers: { 'Content-Type': 'text/xml' },
          });
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error posting ledger data:', error);
      };
   };

   return (
       <>
           <form onSubmit={handleSubmit}>
               <h1>Tally Invoice Entry</h1>
               {/* Company Name */}
               <label>SVCURRENTCOMPANY:</label><br />
               <input 
                   type="text" 
                   name="SVCURRENTCOMPANY" 
                   value={formData.clientCompanyName} 
                   onChange={handleChange} 
                   required 
               /><br />
               {/* Voucher Number */}
               <label>Voucher Number:</label><br />
               <input 
                   type="text" 
                   name="VOUCHERNUMBER" 
                   value={jsonData.refID} 
                   onChange={handleChange} 
                   required 
               /><br />
               {/* Date */}
               <label>Date:</label><br />
               <input 
                   type="date" 
                   name="purchaseOrderDate" 
                   value={formData.purchaseOrderDate.split("T")[0]} 
                   onChange={handleChange} 
                   required 
               /><br />
               {/* Client Details */}
               <h3>Client Details</h3>
               {/* Client Company Name */}
               <label>Client Company Name:</label><br />
               <input 
                   type="text" 
                   name="companyName" 
                   value={formData.clients.companyName} 
                   onChange={handleClientChange} 
                   required 
               /><br />
               {/* Total Amount Field */}
               
               <h3>Total Amount</h3>
               <label>Total Amount:</label><br />
               <input 
                   type="number" 
                   name="totalAmount" 
                   value={totalAmount} 
                   required step="0.01" min="0" 
               /><br />
               {/* GST Percentage Field */}
               <h3>GST Percentage</h3>
               <label>GST Percentage:</label><br />
               <input 
                   type="number" 
                   name="gstPer" 
                   value={18} 
                   onChange={handleChange} 
                   required 
               /><br />
               {/* Product Details */}
               {formData.invoiceProductDetails.map((product, index) => (
                   <div key={index}>
                       <h3>Product {index + 1}</h3>
                       {/* Stock Item Name */}
                       <label>Stock Item Name:</label><br />
                       <input 
                           type="text" 
                           name="description" 
                           value={product.description} 
                           onChange={(e) => handleProductChange(index, e)} 
                           required 
                       /><br />
                       {/* Quantity */}
                       <label>Quantity:</label><br />
                       <input 
                           type="number" 
                           name="quantity" 
                           value={product.quantity} 
                           onChange={(e) => handleProductChange(index, e)}  
                           required  
                       /><br />
                       {/* Quantity Amount */}
                       <label>Quantity Amount:</label><br />
                       <input 
                           type="number"  
                           name="quantityAmount"  
                           value={product.quantityAmount}  
                           onChange={(e) => handleProductChange(index, e)}  
                           required  
                       /><br />
                   </div>
               ))}
               {/* Add Product Button */}
               <button type="button" onClick={addProduct}>Add Product</button><br />
               {/* Submit Button */}
               <button type="submit">Submit Invoice</button>
           </form>
           {/* Display Generated XML */}
           {xmlOutput && (
              <>
                  <h2>Generated XML</h2>
                  <pre>{xmlOutput}</pre>
              </>
          )}
       </>
   );
};

export default InvoiceForm;