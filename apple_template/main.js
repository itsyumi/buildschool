// $g() Select & Return Element
function $g(selector) {
    return document.querySelector(selector);
}

// $div() DIV with 'classname'
function $div(...classname) {
    let div = document.createElement('div');
    if (classname.toString().includes('#') && !classname.includes(' ')) {
        div.id = classname.toString().substring(1);
    } else if (classname) { div.classList.add(...classname); }
    return div;
}

// Product.json
// Info物件包含「產品名稱 productName」、「預設圖片 "imageUrl"」
// Apprearance陣列包含「顏色 color」、"colorValue"、"imageUrl"
// Spec陣列包含「容量 size」，而容量決定「價格 price」
var Product = {
    "IPhone": {
        "Info": {
            "name": "iPhone",
            "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1567022175704"
        },
        "Appearance": [
            { "color": "紅色", "colorValue": "#ba0c2f", "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144763" },
            { "color": "黃色", "colorValue": "#FFE681", "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-yellow-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1568141245782" },
            { "color": "黑色", "colorValue": "#1F2120", "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418" },
        ],
        "Spec": [
            { "size": "64GB", "price": 24900 },
            { "size": "128GB", "price": 26900 },
            { "size": "256GB", "price": 30400 },
        ]
    },
    "IPad": {
        "Info": {
            "name": "iPad",
            "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-hero-unselected-201909_GEO_TW?wid=372&amp;hei=606&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1567298453562"
        },
        "Appearance": [
            { "color": "太空灰色", "colorValue": "#B0B3B6", "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-wifi-select-space-201909_GEO_TW?wid=470&hei=556&fmt=png-alpha&.v=1567443080749" },
            { "color": "銀色", "colorValue": "#E0E2E1", "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-wifi-select-silver-201909_GEO_TW?wid=470&hei=556&fmt=png-alpha&.v=1567299773948" },
            { "color": "金色", "colorValue": "#EED0C3", "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-wifi-select-gold-201909_GEO_TW?wid=470&hei=556&fmt=png-alpha&.v=1567302181892" },
        ],
        "Spec": [
            { "size": "32GB", "price": 10900 },
            { "size": "128GB", "price": 13900 },
        ]
    },
    "MBP": {
        "Info": {
            "name": "MacBook Pro",
            "imageUrl": "https://www.apple.com/v/macbook-pro-16/b/images/overview/hero_static__d85kqoc2fumq_large_2x.jpg"
        },
        "Appearance": [
            { "color": "太空灰色", "colorValue": "#B0B3B6", "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_TW?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1573165435411" },
            { "color": "銀色", "colorValue": "#E0E2E1", "imageUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-silver-select-201911_GEO_TW?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1573153623825" },
        ],
        "Spec": [
            { "size": "512GB", "price": 77900 },
            { "size": "1TB", "price": 83900 },
            { "size": "2TB", "price": 95900 },
            { "size": "8TB", "price": 149900 },
        ]
    }
};



$g('#IPhone').addEventListener('click', initProduct);
$g('#IPad').addEventListener('click', initProduct);
$g('#MBP').addEventListener('click', initProduct);

$g('#IPhone').click();      // Default Display



function initProduct(event) {
    let productId = event.target.id;
    // console.log(event);
    // console.log(event.target.id);

    $g('#navTitle').innerText = Product[productId]['Info']['name'];


    let ctn = $g('#' + productId + '-tab'),
        row = $div('row'),
        imgCol = $div('col-12', 'col-md-6'),
        selectCol = $div('col-12', 'col-md-6');


    ctn.innerText = '';


    let img = document.createElement('img');
    img.id = 'productImg';


    ctn.appendChild(row);
    row.appendChild(imgCol);
    row.appendChild(selectCol);
    imgCol.appendChild(img);


    row.classList.add('vh-100')
    imgCol.classList.add('h-75', 'd-flex', 'justify-content-center', 'align-items-center');
    img.classList.add('w-75', 'mt-5');
    img.setAttribute('src', Product[productId]['Info']['imageUrl']);
    // console.log(Product[productId]['Info']['imageUrl']);


    let appearanceTitle = document.createElement('h5'),
        appearanceRow = $div('row', 'show'),
        specTitle = document.createElement('h5'),
        specRow = $div('row', 'show'),
        // priceTitle = document.createElement('h5'),
        priceRow = $div('row', 'show');

    appearanceTitle.id = 'appearanceTitle';
    appearanceRow.id = 'appearanceRow';
    specTitle.id = 'specTitle';
    specRow.id = 'specRow';
    // priceTitle.id = 'priceTitle';
    priceRow.id = 'priceRow';

    appearanceTitle.setAttribute('data-toggle', 'collapse');
    appearanceTitle.setAttribute('data-target', '#appearanceRow');
    specTitle.setAttribute('data-toggle', 'collapse');
    specTitle.setAttribute('data-target', '#specRow');

    appearanceTitle.innerText = '外觀';
    specTitle.innerText = '規格';


    selectCol.appendChild(appearanceTitle);
    selectCol.appendChild(appearanceRow);
    selectCol.appendChild(specTitle);
    selectCol.appendChild(specRow);
    selectCol.appendChild(priceRow);


    for (let i = 0; i < Object.keys(Product[productId]['Appearance']).length; i++) {

        let button_div = $div('col-6', 'my-3');
        let button = document.createElement('button');
        button.classList.add('btn', 'w-100', 'border', 'rounded-lg', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center');
        button.setAttribute('data-toggle', 'collapse');
        button.setAttribute('data-target', '#appearanceRow');

        let canvas = document.createElement('canvas');
        canvas.classList.add('rounded-circle');
        canvas.style.cssText = `width: 32px; height: 32px; background-color:${Product[productId]['Appearance'][i]['colorValue']};`;

        let colorName = document.createElement('span');
        colorName.innerText = Product[productId]['Appearance'][i]['color'];

        appearanceRow.appendChild(button_div);
        button_div.appendChild(button);
        button.appendChild(canvas);
        button.appendChild(colorName);

    }


    for (let i = 0; i < Object.keys(Product[productId]['Spec']).length; i++) {

        let button_div = $div('col-6', 'my-3');
        let button = document.createElement('button');
        button.classList.add('btn', 'w-100', 'border', 'rounded-lg', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center');
        button.setAttribute('data-toggle', 'collapse');
        button.setAttribute('data-target', '#specRow');

        let size = document.createElement('h2');
        size.innerText = Product[productId]['Spec'][i]['size'];

        let price = document.createElement('p');
        price.innerHTML = `NT$<span>${Product[productId]['Spec'][i]['price']}</span>起`

        specRow.appendChild(button_div);
        button_div.appendChild(button);
        button.appendChild(size);
        button.appendChild(price);
    }




}


