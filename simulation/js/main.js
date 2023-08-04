//Your JavaScript goes in here
c2=false;
let sn=0;
let v2=0;
let V_measured=0;
let current=0;
let table = document.getElementById("tab1");
let count = 0;
var V2id = document.getElementById("voltage_2");
V2id.disabled = true;
const procedure = () => {
sn=sn+1;
if(sn<=10){
    table.innerHTML += `<tr>
                <td id='r${count}c0' width=60px></td>
                <td id='r${count}c1' width=60px></td>
                <td id='r${count}c2' width=60px></td>
                <td id='r${count}c3' width=60px></td>
  </tr>`
    var data = new Array();
    data.push(sn);
    data.push(v2);
    data.push(V_measured);
    data.push(current);
    for (i = 0; i < data.length; i++) {
        document.getElementById("r" + count + "c" + i).innerHTML = data[i];
    }
    count++;
}
}
function switchon1() {
		if (c2 == false) {
			document.getElementById("phasechange").style.transform = "rotate(90deg)";
			document.getElementById("phasechange").style.transformOrigin = "84px 274px";
			document.getElementById("phasechange").style.transition = 'transform 0.5s';
			c2 = true;
            V2id.disabled=false;
		}
		else if (c2 == true) {
			document.getElementById("phasechange").style.transform = "rotate(0deg)";
			c2 = false;
            V2id.disabled=true;
	}
}
function getVoltage(id){
    if (id === 'voltage_2'){
        voltage1 = document.getElementById(id).value;
        document.getElementById("voltage-2-display").innerText = voltage1+" V";
        document.getElementById("disp_voltage_2").innerHTML = voltage1+" V";

    }
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
