const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="so">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulsho Kaab Pro</title>
    <style>
        body { font-family: sans-serif; background-color: #f8f9fa; padding: 20px; display: flex; flex-direction: column; align-items: center; }
        h2 { color: #333; margin-bottom: 20px; }
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; width: 100%; max-width: 600px; }
        .card { background: #fff; padding: 20px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center; }
        .companies { background: #f3e5f5; }
        .products { background: #e0f7fa; } 
        .expenses { background: #ffebee; } 
        .invoices { background: #ede7f6; } 
        .reports { background: #e3f2fd; }
        .title { font-weight: bold; margin: 8px 0 4px; color: #222; }
        .subtitle { font-size: 12px; color: #666; margin-bottom: 10px; }
        .open-btn { font-size: 12px; color: #007bff; text-decoration: none; font-weight: bold; }
        .footer { margin-top: 30px; font-size: 12px; color: #888; }
    </style>
</head>
<body>
    <h2>Bulsho Kaab Pro</h2>
    <div class="grid-container">
        <div class="card companies">
            <div class="title">Shirkadaha</div><div class="subtitle">Companies</div><a href="#" class="open-btn">Open &gt;</a>
        </div>
        <div class="card products">
            <div class="title">Alaabta</div><div class="subtitle">Products</div><a href="#" class="open-btn">Open &gt;</a>
        </div>
        <div class="card expenses">
            <div class="title">Kharashaad</div><div class="subtitle">Expenses</div><a href="#" class="open-btn">Open &gt;</a>
        </div>
        <div class="card invoices">
            <div class="title">Invoice-yada</div><div class="subtitle">Invoices</div><a href="#" class="open-btn">Open &gt;</a>
        </div>
        <div class="card reports">
            <div class="title">Warbixin</div><div class="subtitle">Report</div><a href="#" class="open-btn">Open &gt;</a>
        </div>
    </div>
    <div class="footer">Bulsho Kaab Pro · Debt & Business Management</div>
</body>
</html>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
