// create server import express fs module set route pass fs.readFile pass file name , "utf-8" ,cb with if else

// import express from "express"
// import fs from "fs"

// const PORT = 3000;
// const app = express()

// app.get("/",(req,res)=>{
//     res.send("hi from server")
// })
// app.get("/product",(req,res)=>{
//     fs.readFile("product.json","utf-8",(err,data)=>{
//         if(err){
//             res.status(500).send("error reading file")
//         }else{
//             res.send(JSON.parse(data))
//         }
//     })
// })

// app.listen(PORT,()=>{
//     console.log(`server initiated at PORT : ${PORT}`)
// })

// product.js
import express from "express";
import fs from "fs";
import path from "path";

const PORT = 3000;
const app = express();

const productFilePath = path.join(process.cwd(), "product.json");

// Helper to safely read product.json and return an array/object
function loadProducts() {
  try {
    const raw = fs.readFileSync(productFilePath, "utf-8");
    const parsed = JSON.parse(raw);
    // If file contains an object with a products array (common), try to return that
    if (parsed && Array.isArray(parsed)) return parsed;
    if (parsed && parsed.products && Array.isArray(parsed.products)) return parsed.products;
    // otherwise return parsed as-is
    return parsed;
  } catch (err) {
    console.error("Failed to read product.json:", err.message);
    return []; // return empty array on failure so UI doesn't break
  }
}

/* -------------------------
   Route: Home UI (inject products)
   ------------------------- */
app.get("/", (req, res) => {
  const products = loadProducts();
  // stringify product data so the browser JS can consume it
  const productsJSON = JSON.stringify(products).replace(/</g, "\\u003c");

  res.send(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Product Showcase</title>
      <style>
        :root{
          --bg1: #f0f7ff;
          --card-bg: #ffffff;
          --accent: #6c63ff;
          --muted: #666;
          --shadow: 0 8px 30px rgba(35, 31, 86, 0.08);
        }
        *{box-sizing:border-box}
        body{
          margin:0;
          font-family: Inter, system-ui, Arial, sans-serif;
          background: linear-gradient(180deg, #f5f8ff 0%, #eef7fa 100%);
          color:#222;
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale;
          padding:32px;
        }
        header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          max-width:1200px;
          margin:0 auto 24px auto;
        }
        h1{
          margin:0;
          font-size:1.6rem;
        }
        .controls{
          display:flex;
          gap:8px;
          align-items:center;
        }
        .search{
          padding:8px 12px;
          border-radius:999px;
          border:1px solid #e6e9f2;
          outline:none;
          width:220px;
        }
        .container{
          max-width:1200px;
          margin:0 auto;
        }
        .grid{
          display:grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap:20px;
          margin-top:18px;
        }
        .card{
          background:var(--card-bg);
          border-radius:12px;
          box-shadow:var(--shadow);
          overflow:hidden;
          transition:transform .16s ease, box-shadow .16s ease;
          display:flex;
          flex-direction:column;
        }
        .card:hover{ transform: translateY(-8px); box-shadow: 0 18px 40px rgba(35,31,86,0.12); }
        .media{
          background:linear-gradient(135deg, rgba(108,99,255,0.08), rgba(108,99,255,0.02));
          height:150px;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .media img{
          width:100%;
          max-height:150px;
          object-fit:cover;
        }
        .pad{
          padding:14px;
        }
        .title{
          font-weight:600;
          margin:0 0 6px 0;
        }
        .desc{
          margin:0;
          font-size:0.9rem;
          color:var(--muted);
          min-height:36px;
        }
        .row{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-top:12px;
        }
        .price{
          color: #0b8457;
          font-weight:700;
        }
        .btn{
          background: linear-gradient(90deg, var(--accent), #4ea1ff);
          color:white;
          border:none;
          padding:8px 12px;
          border-radius:10px;
          cursor:pointer;
          box-shadow: 0 6px 18px rgba(108,99,255,0.18);
        }
        .badge{
          display:inline-block;
          padding:4px 8px;
          background:#fff8e6;
          border-radius:999px;
          color:#a36500;
          font-size:0.8rem;
          border:1px solid rgba(160,120,10,0.06);
        }
        .empty{
          text-align:center;
          padding:80px 20px;
          color:var(--muted);
        }

        /* small responsive tweak */
        @media (max-width:520px){
          header{flex-direction:column;align-items:flex-start;gap:12px}
          .search{width:100%}
        }
      </style>
    </head>
    <body>
      <header>
        <div>
          <h1>🛍️ Product Showcase</h1>
          <div style="color:var(--muted);font-size:0.95rem;margin-top:6px">
            Fetching from <code>/product.json</code> (served from server folder)
          </div>
        </div>

        <div class="controls">
          <input id="q" class="search" placeholder="Search products by name..." />
          <button id="clear" class="btn" style="background:transparent;border:1px solid #e6e9f2;color:var(--accent)">Clear</button>
        </div>
      </header>

      <main class="container">
        <div id="grid" class="grid"></div>
        <div id="empty" class="empty" style="display:none">No products found.</div>
      </main>

      <script>
        // Injected product data from server:
        const PRODUCTS = ${productsJSON || '[]'};

        // Normalize input: if PRODUCTS is object with products array, use that
        const items = Array.isArray(PRODUCTS) ? PRODUCTS : (PRODUCTS.products || []);

        const grid = document.getElementById('grid');
        const empty = document.getElementById('empty');
        const q = document.getElementById('q');
        const clear = document.getElementById('clear');

        function formatPrice(p){
          if(p === undefined || p === null) return 'N/A';
          if(typeof p === 'number') return p.toFixed(2);
          return p;
        }

        function imageFor(item){
          // try common keys for image; otherwise placeholder
          return item.image || item.img || item.thumbnail || 'https://via.placeholder.com/600x400?text=Product';
        }

        function render(list){
          grid.innerHTML = '';
          if(!list || list.length === 0){
            empty.style.display = 'block';
            return;
          }
          empty.style.display = 'none';
          list.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = \`
              <div class="media"><img src="\${imageFor(prod)}" alt="\${(prod.name||'Product').replace(/"/g,'')}" onerror="this.src='https://via.placeholder.com/600x400?text=No+Image'"></div>
              <div class="pad">
                <div class="title">\${prod.name || 'Unnamed product'}</div>
                <p class="desc">\${(prod.description || prod.desc || '').slice(0,120)}</p>
                <div class="row">
                  <div>
                    <div class="price">$\${formatPrice(prod.price)}</div>
                    <div style="font-size:0.8rem;color:var(--muted);margin-top:6px">\${prod.category || ''}</div>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">
                    <button class="btn add">Add</button>
                    <div class="badge">\${(prod.rating || '') ? '⭐ ' + prod.rating : 'New'}</div>
                  </div>
                </div>
              </div>
            \`;

            // example click handler:
            card.querySelector('.add').addEventListener('click', () => {
              card.querySelector('.add').textContent = 'Added ✓';
              card.querySelector('.add').disabled = true;
            });

            grid.appendChild(card);
          });
        }

        // initial render
        render(items);

        // search filtering
        q.addEventListener('input', () => {
          const term = q.value.trim().toLowerCase();
          if(!term) return render(items);
          const filtered = items.filter(p => (p.name || '').toLowerCase().includes(term) || (p.description||'').toLowerCase().includes(term));
          render(filtered);
        });

        clear.addEventListener('click', () => {
          q.value = '';
          render(items);
        });
      </script>
    </body>
    </html>
  `);
});

/* -------------------------
   Route: /product API (returns JSON)
   ------------------------- */
app.get("/product", (req, res) => {
  try {
    const data = fs.readFileSync(productFilePath, "utf-8");
    res.type("application/json").send(data);
  } catch (err) {
    res.status(500).json({ error: "Could not read product.json", details: err.message });
  }
});

/* -------------------------
   Start server
   ------------------------- */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
