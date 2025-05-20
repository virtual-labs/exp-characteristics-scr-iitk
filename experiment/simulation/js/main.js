// //Your JavaScript goes in here
// c2=false;
// let sn=0;
// let v2=0;
// let V_measured=0;
// let current=0;
// let table = document.getElementById("tab1");
// let count = 0;
// var V2id = document.getElementById("voltage_2");
// V2id.disabled = true;
// const procedure = () => {
// sn=sn+1;
// if(sn<=10){
//     table.innerHTML += `<tr>
//                 <td id='r${count}c0' width=60px></td>
//                 <td id='r${count}c1' width=60px></td>
//                 <td id='r${count}c2' width=60px></td>
//                 <td id='r${count}c3' width=60px></td> 
//   </tr>`
//     var data = new Array();
//     data.push(sn);
//     data.push(v2);
//     data.push(V_measured);
//     data.push(current);
//     for (i = 0; i < data.length; i++) {
//         document.getElementById("r" + count + "c" + i).innerHTML = data[i];
//     }
//     count++;
// }
// }
// function switchon1() {
// 		if (c2 == false) {
// 			document.getElementById("phasechange").style.transform = "rotate(90deg)";
// 			document.getElementById("phasechange").style.transformOrigin = "84px 274px";
// 			document.getElementById("phasechange").style.transition = 'transform 0.5s';
// 			c2 = true;
//             V2id.disabled=false;
// 		}
// 		else if (c2 == true) {
// 			document.getElementById("phasechange").style.transform = "rotate(0deg)";
// 			c2 = false;
//             V2id.disabled=true;
// 	}
// }
// function getVoltage(id){
//     if (id === 'voltage_2'){
//         voltage1 = document.getElementById(id).value;
//         document.getElementById("voltage-2-display").innerText = voltage1+" V";
//         document.getElementById("disp_voltage_2").innerHTML = voltage1+" V";

//     }
// }
// function openNav() {
//     document.getElementById("mySidepanel").style.width = "500px";
//     document.getElementById("mySidepanel").style.height = "100%";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidepanel").style.width = "0";
//   }

// c2 = false;
// let sn = 0;
// let v2 = 0;
// let V_measured = 0;
// let current = 0;
// let table = document.getElementById("tab1");
// let count = 0;
// var V2id = document.getElementById("voltage_2");
// V2id.disabled = true;

// const procedure = () => {
//     // updated voltage from slider
//     v2 = parseFloat(document.getElementById("voltage_2").value) || 0;

//     // Example formulas — update as needed
//     V_measured = (v2 * 0.98).toFixed(2); // measured voltage
//     current = (v2 / 100).toFixed(2);     // current calculation

//     // Update the SVG text element to display V_measured dynamically
//     const vMeasuredText = document.getElementById("v_measured_display");
//     if (vMeasuredText) {
//         vMeasuredText.textContent = V_measured + " V";
//     }

//     // Update the SVG text element to display current dynamically
//     const currentText = document.getElementById("current_display");
//     if (currentText) {
//         currentText.textContent = current + " mA";
//     }

//     sn += 1;

//     if (sn <= 10) {
//         const row = table.insertRow();
//         row.id = `r${count}`;

//         const data = [sn, v2.toFixed(1), V_measured, current];

//         data.forEach((value, i) => {
//             const cell = row.insertCell();
//             cell.width = "60px";
//             cell.id = `r${count}c${i}`;
//             cell.innerHTML = value;
//         });

//         count++;
//     }
// };

// function switchon1() {
//     if (!c2) {
//         document.getElementById("phasechange").style.transform = "rotate(90deg)";
//         document.getElementById("phasechange").style.transformOrigin = "84px 274px";
//         document.getElementById("phasechange").style.transition = 'transform 0.5s';
//         c2 = true;
//         V2id.disabled = false;
//     } else {
//         document.getElementById("phasechange").style.transform = "rotate(0deg)";
//         c2 = false;
//         V2id.disabled = true;
//     }
// }

// function getVoltage(id) {
//     if (id === 'voltage_2') {
//         const voltage1 = document.getElementById(id).value;
//         document.getElementById("voltage-2-display").innerText = voltage1 + " V";
//         document.getElementById("disp_voltage_2").innerHTML = voltage1 + " V";
//         v2 = parseFloat(voltage1) || 0;
//     }
// }

// function openNav() {
//     document.getElementById("mySidepanel").style.width = "500px";
//     document.getElementById("mySidepanel").style.height = "100%";
// }

// function closeNav() {
//     document.getElementById("mySidepanel").style.width = "0";
// }
//this is second

// c2 = false;
// let sn = 0;
// let v2 = 0;
// let V_measured = 0;
// let current = 0;
// let table = document.getElementById("tab1");
// let count = 0;
// var V2id = document.getElementById("voltage_2");
// V2id.disabled = true;

// function updateMeasurements() {
//     v2 = parseFloat(document.getElementById("voltage_2").value) || 0;

//     // Example formulas — update as needed
//     V_measured = (v2 * 0.98).toFixed(2);
//     current = (v2 / 100).toFixed(2);

//     // Update display
//     const vMeasuredText = document.getElementById("v_measured_display");
//     if (vMeasuredText) {
//         vMeasuredText.textContent = V_measured + " V";
//     }

//     const currentText = document.getElementById("current_display");
//     if (currentText) {
//         currentText.textContent = current + " mA";
//     }
// }

// function addRow() {
//     sn += 1;
//     if (sn <= 10) {
//         const row = table.insertRow();
//         row.id = `r${count}`;

//         const data = [sn, v2.toFixed(1), V_measured, current];

//         data.forEach((value, i) => {
//             const cell = row.insertCell();
//             cell.width = "60px";
//             cell.id = `r${count}c${i}`;
//             cell.innerHTML = value;
//         });

//         count++;
//     }
// }

// // Call this whenever the voltage slider/input changes
// function getVoltage(id) {
//     if (id === 'voltage_2') {
//         const voltage1 = document.getElementById(id).value;
//         document.getElementById("voltage-2-display").innerText = voltage1 + " V";
//         document.getElementById("disp_voltage_2").innerHTML = voltage1 + " V";

//         updateMeasurements();
//     }
// }

// function switchon1() {
//     if (!c2) {
//         document.getElementById("phasechange").style.transform = "rotate(90deg)";
//         document.getElementById("phasechange").style.transformOrigin = "84px 274px";
//         document.getElementById("phasechange").style.transition = 'transform 0.5s';
//         c2 = true;
//         V2id.disabled = false;
//     } else {
//         document.getElementById("phasechange").style.transform = "rotate(0deg)";
//         c2 = false;
//         V2id.disabled = true;
//     }
// }

// function openNav() {
//     document.getElementById("mySidepanel").style.width = "500px";
//     document.getElementById("mySidepanel").style.height = "100%";
// }

// function closeNav() {
//     document.getElementById("mySidepanel").style.width = "0";
// }
// //this is third


c2 = false;
let sn = 0;
let v2 = 0;
let V_measured = 0;
let current = 0;
let table = document.getElementById("tab1");
let count = 0;
var V2id = document.getElementById("voltage_2");
V2id.disabled = true;

function updateMeasurements() {
    // Read the DC source voltage V2 (in volts)
    v2 = parseFloat(document.getElementById("voltage_2").value) || 0;

    // Circuit constants
    const Rs = 100;         // Series resistor value in ohms
    const V_on = 1.2;       // SCR on-state voltage drop in volts

    // Formula to compute current through SCR (in amperes):
    // I = (V2 - V_on) / Rs
    current = ((v2 - V_on) / Rs).toFixed(4);

    // Formula to compute voltage across SCR (in volts):
    // V_measured = V2 - I * Rs
    V_measured = (v2 - current * Rs).toFixed(2);

    // Convert current to milliamps for display
    const current_mA = (current * 1000).toFixed(2);

    // Update display elements
    const vMeasuredText = document.getElementById("v_measured_display");
    if (vMeasuredText) {
        vMeasuredText.textContent = V_measured + " V";
    }

    const currentText = document.getElementById("current_display");
    if (currentText) {
        currentText.textContent = current_mA + " mA";
    }
}

function addRow() {
    sn += 1;
    if (sn <= 10) {
        const row = table.insertRow();
        row.id = `r${count}`;

        // Prepare row data: [S.No, DC_Voltage_2, V_Measured, Current]
        const data = [
            sn,
            v2.toFixed(1) + " V",
            V_measured + " V",
            ( (v2 - 1.2) / 100 * 1000 ).toFixed(2) + " mA"
        ];

        data.forEach((value, i) => {
            const cell = row.insertCell();
            cell.width = "60px";
            cell.id = `r${count}c${i}`;
            cell.innerHTML = value;
        });

        count++;
    }
}

// Call this whenever the voltage slider/input changes
function getVoltage(id) {
    if (id === 'voltage_2') {
        const voltage1 = document.getElementById(id).value;
        document.getElementById("voltage-2-display").innerText = voltage1 + " V";
        document.getElementById("disp_voltage_2").innerHTML = voltage1 + " V";

        updateMeasurements();
    }
}

function switchon1() {
    if (!c2) {
        document.getElementById("phasechange").style.transform = "rotate(90deg)";
        document.getElementById("phasechange").style.transformOrigin = "84px 274px";
        document.getElementById("phasechange").style.transition = 'transform 0.5s';
        c2 = true;
        V2id.disabled = false;
    } else {
        document.getElementById("phasechange").style.transform = "rotate(0deg)";
        c2 = false;
        V2id.disabled = true;
    }
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
