// =============================================
// EMAILJS INIT
// =============================================
emailjs.init("4L3qievJyn5R3kg_Y");

const P = [
    {id:1, cat:'Helmets', icon:'🪖', name:'LS2 FF000 STORM II', price:4990},
    {id:2, cat:'Helmets', icon:'🪖', name:'KYT TT Course Tourist Black', price:6628.23},
    {id:3, cat:'Helmets', icon:'🪖', name:'KYT TT Course Tourist Red', price:6628.23},
    {id:4, cat:'Helmets', icon:'🪖', name:'KYT TT Course Tourist White', price:6628.23},
    {id:5, cat:'Riding Gear', icon:'🧤', name:'Fox Racing Dirtpaw Gloves', price:389},
    {id:6, cat:'Oils', icon:'🧤', name:'Mokoto Half Finger Gloves', price:100},
    {id:7, cat:'Oils', icon:'🧤', name:'MG02 Half Finger Gloves', price:127},
    {id:8, cat:'Oils', icon:'🧤', name:'BOM X Universal Handle Grip Red', price:250},
    {id:9, cat:'Oils', icon:'🧤', name:'BOM X Universal Handle Grip Black', price:250},
    {id:10, cat:'Oils', icon:'🧤', name:'Playlife Universal Motorcycle Handle Grip', price:110},
    {id:11, cat:'Oils', icon:'🧤', name:'Rizoma Pillow Top Lite Handle Grip', price:200},
    {id:12, cat:'Oils', icon:'⚙️', name:'BWIN Camshaft Bearing High Speed', price:345},
    {id:13, cat:'Oils', icon:'⚙️', name:'BWIN Transmission Gearing Set', price:1980},
    {id:14, cat:'Oils', icon:'⅏', name:'Sun Racing Center Spring 1000RPM', price:350},
    {id:15, cat:'Oils', icon:'⚙️', name:'Sun Racing Spirit CVT System Champion', price:1300},
    {id:16, cat:'Oils', icon:'⚙️', name:'BWIN Racing Clutch Bell', price:1299},
    {id:17, cat:'Oils', icon:'⚙️', name:'Sun Racing Clutch Lining Assembly', price:1100},
    {id:18, cat:'Oils', icon:'⚙️', name:'JVT Pulley Set', price:1650},
    {id:19, cat:'Oils', icon:'⚙️', name:'Sun Racing Spirit CVT Pulley Set', price:1600},
    {id:20, cat:'Oils', icon:'⚙️', name:'BWIN Racing Pulley Set', price:1200},
    {id:21, cat:'Oils', icon:'⚙️', name:'KOSO Fly Ball', price:400},
    {id:22, cat:'Oils', icon:'⚙️', name:'JVT Weight Rollers', price:450},
    {id:23, cat:'Oils', icon:'🔩', name:'Gold Disc Bolts', price:45},
    {id:24, cat:'Oils', icon:'🔩', name:'Gold Banjo Bolts', price:50},
    {id:25, cat:'Oils', icon:'🔩', name:'Gold Body Bolts', price:35},
    {id:26, cat:'Oils', icon:'🔩', name:'Silver Banjo Bolts', price:45},
    {id:27, cat:'Oils', icon:'🔦', name:'Mini Driving Lights', price:400},
    {id:28, cat:'Oils', icon:'🔧', name:'RCB E2 Alloy Lever Blue', price:1245},
    {id:29, cat:'Oils', icon:'🔧', name:'RCB E2 Alloy Lever Red', price:1245},
    {id:30, cat:'Oils', icon:'🔧', name:'RCB E2 Alloy Lever White', price:1245},
    {id:31, cat:'Oils', icon:'⚙️', name:'SC SIAM Stainless Rear Nut CNC', price:350},
    {id:32, cat:'Oils', icon:'⅏', name:'Black Mono Shock A2 Series', price:2250},
    {id:33, cat:'Oils', icon:'⅏', name:'Red Mono Shock A2 Series', price:2250},
    {id:34, cat:'Oils', icon:'⅏', name:'Red Mono Shock SB-3 Series', price:5900},
    {id:35, cat:'Oils', icon:'⅏', name:'Yellow Mono Shock SB-3 Series', price:5900},
    {id:36, cat:'Oils', icon:'🔩', name:'CNC Crankcase Bolts', price:620},
    {id:37, cat:'Oils', icon:'⚙️', name:'Faito Moveo 6300 2RS Wheel Bearing', price:169},
    {id:38, cat:'Oils', icon:'𖥞', name:'Lighten Disc XRM/Wave Bowl', price:220},
    {id:39, cat:'Oils', icon:'💨', name:'Koby Tire Sealant', price:149},
    {id:40, cat:'Oils', icon:'𖥞', name:'RCB SP500 Mags', price:3499},
    {id:41, cat:'Oils', icon:'𖥞', name:'Kawasaki Rouser DTSi 200', price:4499},
    {id:42, cat:'Oils', icon:'𖥞', name:'Kawasaki Rouser 180', price:2499},
    {id:43, cat:'Oils', icon:'𖥞', name:'Racing Force G-Ren Mags', price:5499},
    {id:44, cat:'Oils', icon:'𖥞', name:'Bajaj Boxer BM150', price:2499},
    {id:45, cat:'Oils', icon:'𖥞', name:'Alloy Brake Disc 301 300', price:1099},
    {id:46, cat:'Oils', icon:'𖥞', name:'Alloy Brake Disc 501 300', price:1299},
    {id:47, cat:'Oils', icon:'𖥞', name:'Alloy Brake Disc S-SERIES', price:1399},
    {id:48, cat:'Oils', icon:'𖥞', name:'BRAKE CALIPER S-45 SERIES BLUE', price:2250},
    {id:49, cat:'Oils', icon:'𖥞', name:'BRAKE CALIPER S-45 SERIES SILVER', price:2250},
    {id:50, cat:'Oils', icon:'𖥞', name:'BRAKE CALIPER S3-SERIES BLACK', price:2450},
    {id:51, cat:'Oils', icon:'𖥞', name:'BRAKE CALIPER S3-SERIES RED', price:2450},
    {id:52, cat:'Oils', icon:'🔩', name:'Koby Chain Cleaning Agent', price:199},
    {id:53, cat:'Oils', icon:'🛢️', name:'TOP 1 Power Coolant', price:150},
    {id:54, cat:'Oils', icon:'🛢️', name:'MTRT Fuel Injector', price:1450},
    {id:55, cat:'Oils', icon:'🛢️', name:'Koby Chain Cleaning Spray', price:258},
    {id:56, cat:'Oils', icon:'🛢️', name:'Mobil Super Moto 10W-40 Scooter Oil', price:459},
    {id:57, cat:'Oils', icon:'🛢️', name:'Motul 300V 10W40 Engine Oil', price:1300},
    {id:58, cat:'Oils', icon:'🛢️', name:'Motul Scooter Oil LE MB 10W40', price:330},
    {id:59, cat:'Oils', icon:'🔩', name:'KYRON Thermostat Assy', price:399},
    {id:60, cat:'Oils', icon:'🛢️', name:'Valve Seal Bwin', price:189},
    {id:61, cat:'Oils', icon:'🔩', name:'Bwin Water Pump Assy', price:1250},
    {id:62, cat:'Oils', icon:'🛢️', name:'WD-40 Multi Purpose Lubricant', price:255},
    {id:63, cat:'Oils', icon:'🛢️', name:'Yamalube AT MB 10W-40 $ Stroke Motor Oil', price:250},
    {id:64, cat:'Oils', icon:'🛢️', name:'Yamalube Scooter Gear Oil', price:150},
];

let qty = {};
P.forEach(p => qty[p.id] = 0);

function validateName(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
}

function validatePhone(e) {
    let val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length >= 2 && !val.startsWith('09')) {
        val = '09';
    } else if (val.length === 1 && val !== '0') {
        val = '0';
    }
    e.target.value = val;
}

function setStep(n) {
    for(let i=1; i<=4; i++) {
        document.getElementById('s'+i).classList.toggle('widget-hidden', i !== n);
        const pill = document.getElementById('sp'+i);
        pill.classList.remove('active', 'done');
        if(i === n) pill.classList.add('active');
        else if(i < n) pill.classList.add('done');
    }
}

function goToShop() {
    const n = document.getElementById('name').value.trim();
    const ph = document.getElementById('phone').value.trim();

    if(!n) return alert("Please enter your name");
    if(!ph || !ph.startsWith('09')) return alert("Phone number must start with 09");
    if(ph.length < 11) return alert("Please enter a valid 11-digit phone number");

    renderGrid();
    setStep(2);
}

function renderGrid() {
    const g = document.getElementById('pgrid');
    g.innerHTML = P.map(p => `
        <div class="widget-pc ${qty[p.id] > 0 ? 'sel' : ''}">
            <span>${p.icon}</span>
            <div style="flex:1">
                <div style="font-size:13px; font-weight:600">${p.name}</div>
                <div style="font-size:11px; color:#e8a020">₱${p.price}</div>
            </div>
            <div style="display:flex; align-items:center; gap:8px">
                <button onclick="changeQty(${p.id},-1)" style="width:20px">-</button>
                <span style="font-size:12px">${qty[p.id]}</span>
                <button onclick="changeQty(${p.id},1)" style="width:20px">+</button>
            </div>
        </div>
    `).join('');
}

function changeQty(id, d) {
    qty[id] = Math.max(0, qty[id] + d);
    renderGrid();
}

function goToReview() {
    if(!Object.values(qty).some(v => v > 0)) return alert("Select a part");
    let total = 0;
    const items = P.filter(p => qty[p.id] > 0).map(p => {
        total += p.price * qty[p.id];
        return `<div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px">
                    <span>${p.name} x${qty[p.id]}</span>
                    <span>₱${p.price * qty[p.id]}</span>
                </div>`;
    }).join('');

    document.getElementById('review-items').innerHTML = items +
        `<hr style="border:0; border-top:1px solid #333; margin:10px 0">` +
        `<div style="display:flex; justify-content:space-between; font-weight:700; color:#e8a020"><span>Total</span><span>₱${total}</span></div>`;
    setStep(3);
}

function placeOrder() {
    const name    = document.getElementById('name').value;
    const email   = document.getElementById('email').value;    
    const phone   = document.getElementById('phone').value;
    const orderId = "RP-" + Math.floor(Math.random()*100000);

    let total = 0;
    const orderItems = P.filter(p => qty[p.id] > 0).map(p => {
        total += p.price * qty[p.id];
        return `${p.name} x${qty[p.id]} — ₱${p.price * qty[p.id]}`;
    }).join('\n');

    const confirmBtn = document.querySelector('#s3 .widget-btn-primary');
    confirmBtn.textContent = 'Sending...';
    confirmBtn.disabled = true;

    emailjs.send("service_c86jidb", "template_y1y9j48", {
        to_email:       email,     // ← NOW this will work
        customer_name:  name,
        customer_phone: phone,
        order_id:       orderId,
        order_items:    orderItems,
        order_total:    "₱" + total
    })
    .then(() => {
        document.getElementById('s-name').textContent = "Confirmed for " + name;
        document.getElementById('s-oid').innerHTML = "ID: " + orderId;
        setStep(4);
    })
    .catch((error) => {
        alert("Failed to send confirmation email. Please try again.");
        console.error("EmailJS error:", error);
        confirmBtn.textContent = 'Confirm Order';
        confirmBtn.disabled = false;
    });
}

function resetAll() {
    P.forEach(p => qty[p.id] = 0);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    setStep(1);
}