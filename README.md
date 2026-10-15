# Kuckoo Co. shop

A simple, static online shop for **Kuckoo Co.**, which sells quirky knick-knacks and gifts.
It has no backend or database, so it can be hosted for free on GitHub Pages.

## Pages

| Page | File | What it shows |
|---|---|---|
| Home | `index.html` | Brand intro and 4 featured products |
| Shop | `shop.html` | All 12 products, with filter buttons for Home Décor, Desk Stuff, Gifts and Keychains |
| Product | `product.html?id=…` | One page per product: picture, price, description and similar items |

## Changing products

All products live in one file: **`js/products.js`**. Open it, and you'll see one block per product
(name, price in RM, category, description, picture and whether it's featured on the Home page).
Edit the text, save, and the whole site updates. Instructions are at the top of that file.

To swap a placeholder picture for a real photo, put the photo in `images/products/`
and change that product's `image` line to the new file name (for example `images/products/teh-tarik-mug.jpg`).
Square photos work best.

## Changing the look

Colours and fonts are set at the top of `css/style.css`.

## Putting it online with GitHub Pages

1. On GitHub, open this repository and go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, pick **main** and **/ (root)**, then **Save**.
3. After a minute or two the site will be live at `https://reemshakira.github.io/kuckoo-co-shop/`.

## Previewing on your computer

Double-click `index.html` to open it in your browser.

## Not included yet

There is no cart or checkout. The product page shows an "Online ordering coming soon" button.
Taking payments needs an outside service (for example a payment link from Stripe, ToyyibPay or Billplz),
which can be added later.
