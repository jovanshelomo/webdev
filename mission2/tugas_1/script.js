const products = [
  {
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-22100-hhigl2khhziv61",
    name: "Basreng Pedas Original",
    price: 15_500,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98o-ll09fl4ae6in1d",
    name: "Kipas Angin Portable Mini",
    price: 26_900,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/9508d7fc7bf06e88022e35a87173d5dc",
    name: "Fresh Care Aromatherapy Roll On",
    price: 11_500,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7qukz-lhrjxxymgz53b1",
    name: "Blender Daging Stainless 2L",
    price: 74_500,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkteyo18fx8ie6",
    name: 'Asus ROG Strix G614JV Intel i7 Gen 13 16GB 2TB SSD RTX4060-8GB 16" Windows 11 Home',
    price: 26_799_000,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134201-7qul0-libi69afe6see2",
    name: 'Xiaomi TV A2 43" [FHD] Smart HD Dolby Audio',
    price: 2_899_000,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/e548c0613a87857a4436d7db9a937439",
    name: "sepatu Vans old skool Fetino sepatu kasual",
    price: 33_400,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7qul1-lkh03fqg28pg62",
    name: "vivo Y27 (6/128) - 50MP Camera, 44W FlashCharge+5000mAH, Dynamic Design",
    price: 2_299_000,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7qul8-lhiygdgmwgno29",
    name: "Sunco Minyak Goreng Sawit 2L Pouch",
    price: 39_900,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7qul3-lf3ck831z22l1a",
    name: "Pepsodent strong 75+15gr murah 10rb isi 3",
    price: 10_950,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/6d9c27623d0ffd954dcbf946f1c934b4",
    name: "SLAKE L-XL sweater hoodie jumper pria & wanita",
    price: 68_000,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-22100-umabchf8ikiv6a",
    name: "Apple Iphone 14 256GB",
    price: 26_299_000,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7qul8-lk7sxauvogo740",
    name: "SOMETHINC Calm Down! Skinpair R-Cover Cream",
    price: 103_200,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-22110-ochrqkrn5gkv07",
    name: "Pensil Abadi Eternal Tidak Bisa Habis Infinite Pencil Pensil Ajaib",
    price: 2_400,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/5b6e228a6cc72b48798a7dcc763a844a",
    name: "Speaker Portable Bluetooth LED 3 Inches Mobile Phone With Mic",
    price: 45_000,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134601-7qula-lk6l6mb0idz70b",
    name: "Alat Pengasah Pisau Dapur 3 in 1 Kepala Garis penajam Asah Asahan Gunting Swift Sharp knife Sharpener",
    price: 7_750,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7qvf5-lfgomi0jd8y45b",
    name: "Sariwangi Teh Hijau Celup Isi 25 Kantung Celup Twinpack",
    price: 12_662,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-50009109-426faa4c676715655cb01efdabafc861",
    name: "ECLE Pro 6 TWS Waterproof Headset Bluetooth Touch Control Low Latency Bluetooth Earphone HIFI Stereo True Wireless Earbuds",
    price: 99_900,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/cda81f79c7ee6ac82cd5baf44254fce6",
    name: "Pisau Acar Kentang Wortel Alat Potong Bergelombang Stainless Steel Timun Asinan Puding Kripik",
    price: 4_600,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7quky-lf5cbqjqh03id9",
    name: "Penghapus Wangi",
    price: 1_600,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/ce5cfbfafe1c8f7897fd0c20b1aa343f",
    name: "Boneka Baby Shark / Ikan Hiu 35cm",
    price: 13_000,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-23020-cc1rmhs4jenvf5",
    name: "Tesladi SmartWatch Y68 Sport Tahan Air Smart Bluetooth Watch Heart Rate Gelang Pedometer Pelacak Kebugaran",
    price: 52_000,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-22120-wy8kfs8gg6kv6b",
    name: "Sony Alpha A1 Mirrorless Body Only",
    price: 92_999_000,
  },
];

// rehydrate cart from local storage if exist
const rehydrateCart = JSON.parse(localStorage.getItem("cart") ?? "[]");

const formatPrice = (price) => {
  return `Rp. ${Math.round(price).toLocaleString("id-ID")}`;
};

const stringToDOM = (str) => {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body.children[0];
};

cartDetails = {
  items: [
    // CartItem
  ],
  totalPrice: 0,
  ppn: 0,
  grandTotal: 0,
};

const cartManager = {
  addItem: (product) => {
    newItem = new CartItem(product);
    cartDetails.items.push(newItem);
    cartManager.updateUI();
    return newItem;
  },
  removeItem: (product) => {
    const item = cartDetails.items.find(
      (cartItem) => cartItem.product == product
    );
    item.product.cartItem = null;
    item.remove();
    cartDetails.items.splice(cartDetails.items.indexOf(item), 1);
    cartManager.updateUI();
  },
  updateUI: () => {
    cartDetails.totalPrice = cartDetails.items.reduce(
      (acc, curr) => acc + curr.product.price * curr.product.qty,
      0
    );
    cartDetails.ppn = cartDetails.totalPrice * 0.11;
    cartDetails.grandTotal = cartDetails.totalPrice + cartDetails.ppn;

    document.getElementById("total-pembelian").innerHTML = formatPrice(
      cartDetails.totalPrice
    );
    document.getElementById("pajak").innerHTML = formatPrice(cartDetails.ppn);
    document.getElementById("total-bayar").innerHTML = formatPrice(
      cartDetails.grandTotal
    );

    //toggle empty cart & checkout button
    if (cartDetails.items.length === 0) {
      document.getElementById("no-item").classList.remove("hidden");
      document.getElementById("checkout").setAttribute("disabled", true);
    } else {
      document.getElementById("no-item").classList.add("hidden");
      document.getElementById("checkout").removeAttribute("disabled");
    }
  },
};

class CartItem {
  constructor(product) {
    this.product = product;
    this.element = null;

    this.render();
  }

  render() {
    const html = `
<div class="flex flex-row bg-stone-200 p-4 rounded-3xl gap-2 items-center">
    <img class="w-20 object-cover aspect-square rounded-lg" src="${
      this.product.image
    }"/>
    <div class="flex flex-col flex-1">
        <h5 class="text-dark-blue font-extrabold mb-2 xl:max-w-[200px]">${
          this.product.name
        }</h5>
        <p class="text-sm text-slate-500">${formatPrice(
          this.product.price
        )} x <span>${this.product.qty}</span></p>
    </div>
    <div>
        <h4 class="font-extrabold text-lg">${formatPrice(
          this.product.price * this.product.qty
        )}</h4>
    </div>
    <button data-interaction="remove">
        <img src="./assets/remove.svg" alt="" />
    </button>
</div>`;
    this.element = stringToDOM(html);
    this.element
      .querySelector(`[data-interaction="remove"]`)
      .addEventListener("click", () => {
        cartManager.removeItem(this.product);
      });

    document.getElementById("cart-container").append(this.element);
  }

  updateTotal() {
    this.element.querySelector("h4").innerHTML = formatPrice(
      this.product.price * this.product.qty
    );
    this.element.querySelector("p span").innerHTML = this.product.qty;
    cartManager.updateUI();
  }

  remove() {
    this.product.resetItem();
    this.element.remove();
  }
}

class Product {
  constructor(item) {
    this.index = item.index;
    this.image = item.image;
    this.name = item.name;
    this.price = item.price;
    this.element = null;
    this.cartItem = null;

    this.qty = 0;
    this.render();

    //check if rehydrate cart has this item
    const rehydrateItem = rehydrateCart.find(
      (rehydrateItem) => rehydrateItem.name == this.name
    );
    if (rehydrateItem) {
      this.changeQty(rehydrateItem.qty);
    }
  }

  render() {
    const html = `
      <div class="flex flex-col shadow-md p-4 bg-white rounded-3xl">
        <img
          class=" rounded-lg mb-4 object-cover aspect-square"
          src="${this.image}"
        />
        <div class="mb-4 flex-1">
            <p class="font-extrabold mb-2">${this.name}</p>
            <p class="text-sm text-slate-500 ">${formatPrice(this.price)}</p>
        </div>
        <div class="flex flex-row gap-2">
          <button data-interaction="minus" class="bg-yellow-800 enabled:hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold px-4 py-2 select-none rounded-lg" disabled>-</button>
          <input type="number" data-interaction="total" class="bg-gray-100 py-2 px-4 w-16 flex-1 grid place-items-center text-center rounded-lg" value="0" min="0"/>
          <button data-interaction="plus" class="bg-yellow-800 enabled:hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold px-4 py-2 select-none rounded-lg">+</button>
        </div>
      </div>
        `;
    this.element = stringToDOM(html);
    document.querySelector("#items-container").appendChild(this.element);

    this.element
      .querySelector(`[data-interaction="plus"]`)
      .addEventListener("click", () => {
        this.addItem();
      });

    this.element
      .querySelector(`[data-interaction="minus"]`)
      .addEventListener("click", () => {
        this.decreaseItem();
      });

    this.element
      .querySelector(`[data-interaction="total"]`)
      .addEventListener("change", (e) => {
        this.changeQty(parseInt(e.target.value));
      });
  }

  addItem() {
    this.qty++;
    this.updateAll();
  }

  decreaseItem() {
    if (this.qty == 0) return;

    this.qty--;
    this.updateAll();
  }

  changeQty(qty) {
    // NaN & negative check
    this.qty = qty >= 0 ? qty : 0;
    this.updateAll();
  }

  resetItem() {
    this.qty = 0;
    this.updateAll();
  }

  updateAll() {
    // update qty in element
    this.element.querySelector(`[data-interaction="total"]`).value = this.qty;

    // update disabled minus button
    if (this.qty == 0) {
      this.element
        .querySelector(`[data-interaction="minus"]`)
        .setAttribute("disabled", true);
    } else {
      this.element
        .querySelector(`[data-interaction="minus"]`)
        .removeAttribute("disabled");
    }

    // update cart
    if (this.cartItem) {
      this.cartItem.updateTotal();
    }

    if (this.qty > 0 && !this.cartItem) {
      this.cartItem = cartManager.addItem(this);
    } else if (this.qty == 0 && this.cartItem) {
      cartManager.removeItem(this);
    }

    //save to local storage
    updateLocalStorage();
  }
}

const updateLocalStorage = () => {
  localStorage.setItem(
    "cart",
    JSON.stringify(
      cartDetails.items.map((item) => ({
        name: item.product.name,
        qty: item.product.qty,
      }))
    )
  );
};

const showModal = () => {
  document.getElementById("modal-items-container").innerHTML = "";
  document.getElementById(
    "modal-tanggal"
  ).innerHTML = `Tanggal: ${new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "numeric",
    day: "numeric",

    hour: "numeric",
    minute: "numeric",
  })}`;
  document.getElementById("modal-total-pembelian").innerHTML = formatPrice(
    cartDetails.totalPrice
  );
  document.getElementById("modal-pajak").innerHTML = formatPrice(
    cartDetails.ppn
  );
  document.getElementById("modal-total-bayar").innerHTML = formatPrice(
    cartDetails.grandTotal
  );
  cartDetails.items.forEach((item) => {
    const html = `
    <div>
        <p>${item.product.name}</p>
        <div class="flex flex-row justify-between">
            <p>${formatPrice(item.product.price)} X ${item.product.qty}</p>
            <p>${formatPrice(item.product.price * item.product.qty)}</p>
        </div>
    </div>
    `;
    document.getElementById("modal-items-container").innerHTML += html;
  });

  document.getElementById("modal").showModal();
};

// render products
const renderedProducts = products.map((item, index) => {
  new Product({
    ...item,
    index,
  });
});
